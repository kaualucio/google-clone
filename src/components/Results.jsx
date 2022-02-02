import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading'
import { useStateContext } from '../contexts/StateContextProvider';

function Results() {
  const { results, isLoading, getResults, searchTerm } = useStateContext();
  const location = useLocation(); //nos dá a url
  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  if (location.pathname === '/search') {
    return (
      <div className="sm:px-56 flex  flex-wrap justify-between space-y-6">
        {results?.results?.map(({ link, title }, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <span className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</span>
              <h3 className="text-indigo-600 text-xl text-bold">{title}</h3>
            </a>
          </div>
        ))}
      </div>
    )
  } else if (location.pathname === '/images') {
    return (
      <div className="flex  flex-wrap justify-between items-center">
        {results?.image_results?.map(({ image, link: { href, title } }, index) => (
          <a href={href} key={index} target="_blank" rel="noreferrer" isLoading="lazy">
            <img src={image?.src} alt={title} />
            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
          </a>
        ))}
      </div>
    )
  } else if (location.pathname === '/news') {
    return (
      <div className="sm:px-56 flex  flex-wrap justify-between space-y-6">
        {results?.entries?.map(({ link, title }, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <span className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</span>
              <h3 className="text-indigo-600 text-xl text-bold">{title}</h3>
            </a>
          </div>
        ))}
      </div>
    )
  } else if (location.pathname === '/videos') {
    console.log(results)
    return (
      <div className="flex flex-wrap">
        {results?.results?.map((video, index) => (
          <div key={index} className="p-2">
            <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
          </div>
        ))}
      </div>
    )
  }
}

export default Results;
