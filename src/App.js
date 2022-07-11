import "./App.css"
import SearchAdvice from "./compoenents/SearchAdvice"
import RandomAdvice from "./compoenents/RandomAdvice"

function App() {
  return (
    <div className="App">
      <RandomAdvice></RandomAdvice>
      <SearchAdvice />
    </div>
  )
}

export default App
