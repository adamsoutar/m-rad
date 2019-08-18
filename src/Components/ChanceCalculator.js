import React, { useState } from 'react'
import styled from 'styled-components'

const ChanceCalculatorStyled = styled.div`
  height: 200px;
  background: #24282f;
`
const Left = styled.div`
  float: left;
  height: 100%;
`
const Right = styled.div`
  float: right
  height: 100%;
`
const Title = styled.div`
  height: 30px;
  line-height: 30px;
  padding-top: 10px;
  font-size: 25px;
  color: rgba(255,255,255,0.5);
`
const Body = styled.div`
  height: calc(100% - 40px);
  line-height: 160px;
  font-size: 50px;
`
const NumIn = styled.input`
  color: inherit;
  background: transparent;
  border: none;
  font-size: 50px;
  height: 55px;
  width: 100px;
  font-family: inherit;
`

const Titled = props => (
  <Left style={{
      marginLeft: props.left ? 50 : 0,
      marginRight: props.left ? 0 : 50,
      textAlign: props.left ? 'left' : 'right'
    }}>
    <Title>{props.title}</Title>
    <Body>{props.children}</Body>
  </Left>
)

const ChanceCalculator = props => {
  const [dice, setDice] = useState(1)
  const [sides, setSides] = useState(6)
  const [hitOn, setHitOn] = useState(6)

  const hittingSides = sides - hitOn + 1
  const oneOrMore = dice * hittingSides / sides

  return (
    <ChanceCalculatorStyled>
      <Left>
        <Titled left title='Dice'>
          <NumIn
            type='number'
            onInput={(e) => setDice(e.target.value)}
            min={0}
            defaultValue={1} />
        </Titled>
        <Titled left title='Sides'>
          <NumIn
            type='number'
            onInput={(e) => setSides(e.target.value)}
            min={1}
            defaultValue={6} />
        </Titled>
        <Titled left title='Hit on'>
          <NumIn
            type='number'
            onInput={(e) => setHitOn(e.target.value)}
            max={sides}
            min={1}
            defaultValue={6} />
        </Titled>
      </Left>
      <Right>
        <Titled right title='1 or more hits'>
          {props.renderer.render(oneOrMore)}
        </Titled>
      </Right>
    </ChanceCalculatorStyled>
  )
}

export default ChanceCalculator
