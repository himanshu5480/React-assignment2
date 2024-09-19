import React, { useEffect, useState } from 'react'
import BlogList from '../components/BlogList';

const Home = () => {
  
  return (
    <div className='h-full flex flex-col items-center gap-4'>
      <div className='text-3xl font-semibold text-center'>Home</div>
      <BlogList />
    </div>
  )
}

export default Home