import React from "react"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Data from './Data'

function App() {

  const cards = Data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})   

  return (
    <div>

      <Navbar/>
      <section className="cards--list">
        {cards}
      </section>
     
    </div>
  );
}

export default App;
