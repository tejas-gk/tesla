import Buttons from './components/Buttons'
import Navbar from './components/Navbar'
import Slides from './components/Slides'
// import './assets/assets'
const images = [
  {
    id: 1,
    src: './assets/assets/asset 0.jpeg',
    txt: 'Existing inventory',
    primary_txt: 'Shop now'
  },
  {
    id: 2,
    src: './assets/assets/asset 1.jpeg',
    txt:'Existing inventory',
    primary_txt: 'Shop now'
    
  },
  {
    id: 3,
    src: './assets/assets/asset 2.jpeg',
    txt:'Existing inventory',
    primary_txt: 'Shop now'

  },
  {
    id: 4,
    src: './assets/assets/asset 3.jpeg',
    txt:'Existing inventory',
    primary_txt: 'Shop now'

  },
  {
    id: 5,
    src: './assets/assets/asset 4.jpeg',
    txt:'Existing inventory',
    primary_txt: 'Shop now'

  },
  {
    id: 6,
    src: './assets/assets/asset 5.webp',
    txt:'Existing inventory',
    primary_txt: 'Shop now'
  },
  {
    id: 7,
    src: './assets/assets/asset 6.jpeg',
    txt:'Existing inventory',
    primary_txt: 'Shop now'
  }
]
function App() {
  return (
    <div>
      <Navbar/>
      {
        images.map((image) => (
          <div key={image.id}>
          <Slides
            image={image.src}
            text={image.txt}
            primary_txt={image.primary_txt}
            />
            </div>
            
        ))
      }
    </div>
  )
}

export default App
