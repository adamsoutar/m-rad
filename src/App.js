import React, { useState } from 'react'
import ChanceCalculator from './Components/ChanceCalculator'
import MaterialButton from './Components/MaterialButton'
import mappable from './Lib/Mappable'

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
      {/* Material button scroll padder */}
      <div style={{ height: 170 }}></div>

      <MaterialButton
        left
        onClick={() => setRenderIndex(
          renderIndex === chanceRenderers.length - 1 ? 0 : renderIndex + 1
        )}>{renderer.symbol}</MaterialButton>
      <MaterialButton
        right
        onClick={() => setCalculators(calculators + 1)}>+</MaterialButton>
    </div>
  )
}

export default App
