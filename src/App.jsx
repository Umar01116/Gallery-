import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Userdata, setUserdata] = useState([])

  const getdata = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    setUserdata(response.data)
  }
  
  let printuserdata = "NO users available"

  if(Userdata.length > 0){
    printuserdata = Userdata.map(function(elem, idx){
      return <div className='h-40 w-50 bg-white'>
        <img className='h-full object-cover ' src={elem.download_url} alt="" />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white p-6'>
      <button onClick={getdata} className='bg-blue-700 px-5 py-3 active:scale-95 rounded '>
        Get data
      </button>
      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>
    </div>
  )
}

export default App
