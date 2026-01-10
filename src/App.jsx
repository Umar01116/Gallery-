import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Userdata, setUserdata] = useState([])
  const [index, setindex] = useState(0)

  const getdata = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserdata(response.data)
  }

  useEffect(function(){
    getdata()
  },[index])

  let printuserdata = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(Userdata.length > 0){
    printuserdata = Userdata.map(function(elem, idx){
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-50 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='fomt-bold text-lg'>{elem.author}</h2>
        </a>
      </div> 
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white p-6'>
      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>
      <div className='flex justify-center mt-3 items-center gap-4'>
        <button className='bg-amber-500 font-medium cursor-pointer active:scale-95 text-black py-2 px-5 rounded-2xl' onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserdata([])
          }
        }}>Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-amber-500 font-medium cursor-pointer active:scale-95 text-black py-2 px-5 rounded-2xl' onClick={()=>{
          setUserdata([])
          setindex(index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
