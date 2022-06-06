
import './App.css'
import Header from './components/header'
import Visor from './components/visor'
import { FormTransaction } from './components/formTransaction'

function App() {

  return (
    <div className="App">
      <Header />
      <FormTransaction />
      <Visor />
    </div>
  )
}

export default App
