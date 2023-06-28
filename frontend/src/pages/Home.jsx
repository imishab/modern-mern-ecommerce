import React from 'react'



const Home = () => {

  return ( <>

<div className="bg-black">
  <div className="container mx-auto flex justify-between items-center py-3">
  <div className="w-full flex flex-col py-4">
      <div className="flex items-center justify-center my-1">
        <span className="cursor-pointer font-semibold	 text-3xl text-white">
          VectorCrop
        </span>
      </div>
      </div>
    <div className="flex space-x-6">
      <button className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" id="search"><path d="M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9z"></path><path d="M23 24a.997.997 0 0 1-.707-.293l-4.795-4.795a1 1 0 0 1 1.415-1.414l4.794 4.795A.999.999 0 0 1 23 24z"></path></svg>
      </button>
      <button className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <button className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</div>



      
</> )
}

export default Home