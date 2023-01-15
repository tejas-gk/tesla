import Navbar from './components/Navbar'
import Slides from './components/Slides'
const images = [
  {
    id: 1,
    src: './assets/assets/asset 0.jpeg',
    txt: 'Existing inventory',
    primary_txt: 'Custom order',
    heading: 'model s',
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
      dec:'Produce Clean Energy From Your Roof'
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
      <div className="h-auto text-center debug bg-white  py-3
      ">
        Until March 2023, certain new Model 3 and Model Y vehicles qualify for a $7,500 federal tax credit for eligible buyers.
        <span className='underline underline-offset-2  hover:underline-thickness-8
       '>Learn More</span>
      </div>

        <Navbar />
      <div className="snap snap-y snap-mandatory">
      {
        images.map((image) => (
          <div key={image.id} className=' relative'>
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
