import React, { useState } from 'react';
import { Popular, TovarInfo } from '../../widgets';

export const TovarPage = () => {
  const [activeLike, setActiveLike] = useState('like-btn')
  const like = () => {
      if(activeLike === 'like-btn'){
          setActiveLike('like-btn-black')
      }else{
          setActiveLike('like-btn')
      }
  };
  return (
    <div>
      <TovarInfo activeLike={activeLike} like={like}/>
      <Popular activeLike={activeLike} like={like} />
    </div>
    );
}

