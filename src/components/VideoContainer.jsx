/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { YOUTUBE_API, API_KEY } from '../constant/youtube';
import Videocart from './Videocart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomevideo } from '../utils/appslice';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { video, category } = useSelector((store) => store.app);

  const fetchvideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_API);
      console.log(res?.data?.items);
      dispatch(setHomevideo(res?.data?.items));
    } catch (error) {
      console.log("error happened", error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispatch(setHomevideo(res?.data?.items));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchvideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
      {video.map((item) => {
        return (
          <Link to={`/watch?v=${typeof item.id === "object" ? item.id.videoId : item.id}`} key={typeof item.id === "object" ? item.id.videoId : item.id}>
            <Videocart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
