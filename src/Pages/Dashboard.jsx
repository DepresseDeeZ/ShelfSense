import { div } from 'motion/react-m'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
    <div className="h-[55rem] w-full dark:bg-black bg-white relative flex items-center justify-center">
    {/* Grid background layer (absolute to prevent interference) */}
    <div className="absolute inset-0 pointer-events-none   bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  
    {/* Radial gradient fade effect */}
    <div className="absolute inset-0 pointer-events-none s flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  
 
    <div className=' z-[1] font-2ppress text-[10px] mt-5 space-y-20'>

      <div className='flex justify-center'>
      <h1 className='text-5xl '>Dashboard</h1>
      </div>
      
      <div className=' flex justify-center gap-20'>
        
        <div className='flex flex-col gap-8 border-4 border-gray-200 p-5 rounded-lg  '>
          <h2>Tools Statistics:</h2>
          <div className='flex'>
            <p>Amount of registered Tool Images:</p>
            <p>239</p>
          </div>
          <div className='flex'>
            <p>Amount of Tools:</p>
            <p>439</p>
          </div>
          <h2>Tool orders</h2>
          <div className='flex'>
            <p>Flexo:</p>
            <p>23</p>
          </div>
          <div className='flex'>
            <p>This year:</p>
            <p>20</p>
          </div >
          <div className='flex'>
            <p>This month:</p>
            <p>20</p>
          </div>
          <div className='flex'>
            <p>Last month:</p>
            <p>10</p>
          </div>
            
        </div>
        <div className='flex flex-col gap-8 border-4 border-gray-200 p-5 rounded-lg'>
          <h2>Tools Statistics:</h2>
          <div className='flex'>
            <p>Amount of registered Tool Images:</p>
            <p>239</p>
          </div>
          <div className='flex'>
            <p>Amount of Tools:</p>
            <p>439</p>
          </div>
          <h2>Tool orders</h2>
          <div className='flex'>
            <p>Flexo:</p>
            <p>23</p>
          </div>
          <div className='flex'>
            <p>This year:</p>
            <p>20</p>
          </div >
          <div className='flex'>
            <p>This month:</p>
            <p>20</p>
          </div>
          <div className='flex'>
            <p>Last month:</p>
            <p>10</p>
          </div>
            
        </div>
        <div className='flex flex-col gap-8 border-4 border-gray-200 p-5 rounded-lg'>
          <h2>Tools Statistics:</h2>
          <div className='flex'>
            <p>Amount of registered Tool Images:</p>
            <p>239</p>
          </div>
          <div className='flex'>
            <p>Amount of Tools:</p>
            <p>439</p>
          </div>
          <h2>Tool orders</h2>
          <div className='flex'>
            <p>Flexo:</p>
            <p>23</p>
          </div>
          <div className='flex'>
            <p>This year:</p>
            <p>20</p>
          </div >
          <div className='flex'>
            <p>This month:</p>
            <p>20</p>
          </div>
          <div className='flex'>
            <p>Last month:</p>
            <p>10</p>
          </div>
            
        </div>
       
      </div>

{/* buttons */}
      <div className='flex mt-10 justify-center'>
        <div className='ml-[10px]'>
            <label htmlFor="tool_number" className="block mb-2 text-[10px] font-medium text-gray-900 dark:text-white">Tool Number</label>
            <input type="text" id="tool_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2xs p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="enter your tool number" required />
            <button type="button" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-2xs font-medium rounded-lg text-[10px] px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>

        </div>
        <div className='ml-[190px]' >
            <label htmlFor="tool_number" className="block mb-2 text-[10px] font-medium text-gray-900 dark:text-white">Tool Number</label>
            <input type="text" id="tool_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2xs p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="enter your tool number" required />
            <button type="button" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-2xs font-medium rounded-lg text-[10px] px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
        </div>
        <div className='ml-[195px]'>
            <label htmlFor="tool_number" className="block mb-2 text-[10px] font-medium text-gray-900 dark:text-white">Tool Number</label>
            <input type="text" id="tool_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-[10px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2xs p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="enter your tool number" required />
            <button type="button" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-2xs font-medium rounded-lg text-[10px] px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>

        </div>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Dashboard