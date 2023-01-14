import Buttons from './components/Buttons'
import Slides from './components/Slides'
// import './assets/assets'
const images = [
  {
    id: 1,
    src:'./assets/assets/asset 0.jpeg'
  }
]
function App() {
  return (
    <div>
      <Slides image={images[0].src} />

    </div>
  )
}

export default App
