import Navigation from './components/navigation'
import Home from './components/home'
import Projects from './components/projects'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <h1 className='Name'>Tyler Shakibai</h1>
      <Navigation/>
      <Routes basemname={`/${process.env.PUBLIC_URL}`}>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
