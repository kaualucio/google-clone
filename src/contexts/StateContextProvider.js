import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // /videos, /image, /search
  const getResults = async (type) => {
    setIsLoading(true)

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'EU',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPID_API_KEY
      }
    });
    
    const data = await response.json();

    setResults(data)
    setIsLoading(false);

  }

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      { children }
    </StateContext.Provider>
  )

}

export const useStateContext = () => useContext(StateContext)