import { useState } from "react"
import Background from "./Componets/Background/Background";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/Hero/Hero"

const App = () => {
  let heroData = [
                   {text1:"Dive into",text2:"what you love"},
                   {text1:"Indulge",text2:" your passions"},
                   {text1:"Give into",text2:"your passion"}
                ]

  const  [heroCount, setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
       <Navbar/>
       <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
       />
    </div>
  )
}

export default App
