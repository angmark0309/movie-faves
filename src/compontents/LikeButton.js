import React, {useState, useContext} from 'react';
import dark from '../../public/like-dark.png';
import light from '../../public/like-outline.png';
import { useLikeButton, useMyContext } from '../customHooks';
const LikeButton = ({ posterSrc }) => {
  const { likedMovies, setLikedMovies } = useMyContext();
  const [handleOnClick, isClicked] = useLikeButton(posterSrc, setLikedMovies, likedMovies);
  return (
    <div style={{ display: "flex", justifyContent: 'center' }} onClick={handleOnClick}>
      <img src={isClicked ? dark : light} style={{ width: 50 }} />
    </div>
  )
};

export default LikeButton
