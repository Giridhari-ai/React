
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FunComp from './Components/FunComp'

function App() {
  

  return (
      <div>
        <h2> welcome to React </h2> 
        <h3> Giridhari you are a future coder </h3>
        <ClassComponent cource="React js" duration="3month" />
        <FunComp cource="React js" duration="3month"/>
      </div>
      
  )
}

export default App
