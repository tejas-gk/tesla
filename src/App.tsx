import Navbar from './components/Navbar'
import Slides from './components/Slides'
import React, { useState,useEffect } from 'react';
const images = [
  {
    id: 1,
    src: './assets/assets/asset 0.jpeg',
    txt: 'Existing inventory',
    primary_txt: 'Custom order',
    heading: 'model y',
    desc:'Schedule a Demo Drive'
  },
  {
    id: 2,
    src: './assets/assets/asset 1.jpeg',
    txt:'Existing inventory',
     primary_txt: 'Custom order',
    heading: 'model 3',
    desc:'Schedule a Demo Drive'
    
  },
  {
    id: 3,
    src: './assets/assets/asset 2.jpeg',
    txt:'Existing inventory',
     primary_txt: 'Custom order',
    heading: 'model x',
    desc:'Schedule a Demo Drive'

  },
  {
    id: 4,
    src: './assets/assets/asset 3.jpeg',
    txt:'Existing inventory',
     primary_txt: 'Custom order',
    heading: 'model y',
    desc:'Schedule a Demo Drive'

  },
  {
    id: 5,
    src: './assets/assets/asset 4.jpeg',
    txt:'Existing inventory',
    primary_txt: 'order now',
    heading: 'solar panels',
    desc:'Lowest Cost Solar Panels in America'

  },
  {
    id: 6,
    src: './assets/assets/asset 5.webp',
    txt:'Existing inventory',
    primary_txt: 'order now',
    heading: 'Solar Roof',
    desc:'Produce Clean Energy From Your Roof'
  },
  {
    id: 7,
    src: './assets/assets/asset 6.jpeg',
    txt:'Existing inventory',
    primary_txt: 'shop now',
    heading: 'Accessories'
  }
]
function App() {
  return (
    <div>
        
        <Navbar />
      <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden w-screen h-screen">
      {
        images.map((image) => (
          <div key={image.id} className='relative snap-start
          '>
          <Slides
            image={image.src}
            text={image.txt}
              primary_txt={image.primary_txt}
              heading={image.heading}
              desc={image.desc}
            />
            </div>
            
        ))
        }
      </div>


    </div>
  )
}

export default App