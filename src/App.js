import React from "react";
import { useState } from 'react';

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div className="text-center">
      {clicks.left}
      <button onClick={handleLeftClick} className="btn btn-info">
        Left
        </button>
      <button onClick={handleRightClick} className="btn btn-danger">
        Right
        </button>
      {clicks.right}
    </div>
  )
}
export default App;