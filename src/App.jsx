import React,{ useState } from 'react'

import './App.css'

function App() {
  const [search, setSearch] = useState("")
  const[definition,setDefinition]=useState("")
  const[found,setFound]=useState(false)
  const[searched,setSearched]=useState(false)

  const dictionary=[
    


    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }


  ]

  const searchFun=()=>{
    setSearched(true)
    const wordF=dictionary.find((e)=>e.word.toLowerCase()===search.toLowerCase())
    if(wordF){
      setDefinition(wordF.meaning)
      setFound(true)
    }else{
      setDefinition("Word not found in the dictonary.")
      setFound(false)
    }
  }
  return (
    
      <div>
        <h1>Dictonary App</h1>
        <div>
          <input type="text"
            placeholder='Search for a word...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
          />
          <button onClick={searchFun}>Search</button>
          
        </div>

        <div>
          {(!searched||found)&&(
            <h3>Definition:</h3>
          )}
          <p>{definition}</p>
          
        </div>
      </div>
    
  )
}

export default App
