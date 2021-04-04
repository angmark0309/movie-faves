import React from 'react';
import { useLocation } from 'react-router-dom'
import LikeButton  from '../compontents/LikeButton';
const MovieItem = ({ posterSrc }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
      <div style={{margin: 20}}>
        <img style={{ width: 500 }} src={posterSrc} />
      </div>
      {currentPath === '/' && <LikeButton posterSrc={posterSrc} />}
    </div>
  )
};

export default MovieItem
