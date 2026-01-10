import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Userdata, setUserdata] = useState([])

  const getdata = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserdata(response.data)
  }

  useEffect(function(){
    getdata()
  })

  let printuserdata = "NO users available"

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
    </div>
  )
}

export default App
