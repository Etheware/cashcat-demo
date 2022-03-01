import React from 'react';
import { Header, Sidebar, VideoPanel } from '../../components';
const BaseHome = () => {
  return (
      <div className='basehome'>
        <Header />
        <VideoPanel />
        <Sidebar />
      </div>
  );
}

export default BaseHome;
