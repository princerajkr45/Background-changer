import { useState } from 'react'



function App() {
  const [color, setColor] = useState("salmon")

  return (
    <>
      <div className="w-full h-screen "
        style={{ backgroundColor: color }}
      >
        <div className='flex justify-center  fixed bottom-12 inset-x-0 px-2'>
          <div className='flex justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            >Red</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
            >Green</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
            >Yellow</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
            >Blue</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
            >Pink</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
            >Black</button>
            <button className='outline-none rounded-full px-4 py-1 text-white'
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
            >Purple</button>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
