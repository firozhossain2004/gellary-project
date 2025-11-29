import React, { useEffect, useState } from 'react'
import exios from 'axios'

function App() {
  const [userData, setUserData] = useState([])
  const [inde, setInde] = useState(1)
  const handdelClick = async () => {
    const response = await exios.get(`https://picsum.photos/v2/list?page=${inde}&limit=21`)
    setUserData(response.data)
  }
  useEffect(() => {
    handdelClick()
  }, [inde])
  let prientUserData = 'No data abolable';
  if (userData.length > 0) {
    prientUserData = userData.map((elam, idx) => {

      return <div key={idx}>
        <a href={elam.url}>
          <div className='w-44 h-40 overflow-hidden rounded-xl'>
            <img className='h-full object-cover' src={elam.download_url} alt="" />
          </div>
          <h3>{elam.author}</h3>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto text-white p-5 h-screen'>

      <div className='flex flex-wrap gap-4'>
        {prientUserData}
      </div>

      <div className='flex justify-center items-center gap-8 p-5 '>
        <button className='bg-amber-500 text-black px-4 py-2 rounded  active:scale-95'
          onClick={() => {
            if (inde > 1) {
              setInde(inde - 1)

            }

          }}>Prev</button>
           <h3 className=' text-4xl rounded text-center'>page {inde}</h3>
        <button className='bg-amber-500 text-black px-4 py-2 rounded  active:scale-95' onClick={() => {
       if(inde<10){
   setInde(inde + 1)
       }

        }}>Next</button>
       
      </div>
    </div>
  )
}

export default App