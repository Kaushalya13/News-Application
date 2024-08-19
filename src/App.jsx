import NavBar from './components/NavBar'
import NewsBords from './components/NewsBords'
import { useState } from 'react'

const App = () => {
  const [category,setCategory] = useState('general')

  return (
    <div> 
      <NavBar setCategory = {setCategory}/>
      <NewsBords category={category} />
    </div>
  )
}

export default App
