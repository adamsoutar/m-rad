import React, { useState } from 'react'
import ChanceCalculator from './Components/ChanceCalculator'
import MaterialButton from './Components/MaterialButton'

function mappable (num) {
  let x = []
  for (let i = 0; i < num; i++) x.push(i)
  return x
}

const chanceRenderers = [
  {
    symbol: '%',
    render: chance => `${parseInt(chance * 100, 10)}%`
  },
  {
    symbol: '/',
    render: chance => `1 / ${parseFloat((1 / chance).toFixed(2))}`
  },
  {
    symbol: '.',
    render: chance => chance.toFixed(2)
  }
]

const App = props => {
  const [calculators, setCalculators] = useState(1)
  const [renderIndex, setRenderIndex] = useState(0)
  const renderer = chanceRenderers[renderIndex]

  return (
    <div>
      {
        mappable(calculators).map(x => (
          <ChanceCalculator renderer={renderer} key={x}></ChanceCalculator>
        ))
      }
      <MaterialButton
        style={{bottom: 50, left: 50}}
        onClick={() => setRenderIndex(
          renderIndex === chanceRenderers.length - 1 ? 0 : renderIndex + 1
        )}>{renderer.symbol}</MaterialButton>
      <MaterialButton
        style={{bottom: 50, right: 50}}
        onClick={() => setCalculators(calculators + 1)}>+</MaterialButton>
    </div>
  )
}

export default App
