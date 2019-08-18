import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import ChanceList from './ChanceList'
import Binomial from '../Lib/Binomial'

const ChanceCalculatorStyled = styled.div`
  background: #24282f;
  overflow: hidden;

  animation: entry 0.5s 1 forwards;
`
const Left = styled.div`
  float: left;
  margin-left: ${props => props.left ? 15 : 0}px;
  margin-right: ${props => props.right ? 15 : 0}px;
  text-align: ${props => props.right ? 'right' : 'left'};
  height: 100px;

  ${breakpoint('desktop')`
    margin-left: ${props => props.left ? 50 : 0}px;
    margin-right: ${props => props.right ? 50 : 0}px;
    height: 120px;
  `}
`
const Right = styled.div`
  float: right
  height: 100px;
  ${breakpoint('desktop')`
    height: 120px;
  `}
`
const Title = styled.div`
  height: 20px;
  line-height: 20px;
  padding-top: 10px;
  font-size: 17px;
  color: rgba(255,255,255,0.5);

  ${breakpoint('desktop')`
    height: 30px;
    line-height: 30px;
    font-size: 25px;
  `}
`
const Body = styled.div`
  height: 70px;
  line-height: 70px;
  font-size: 40px;

  ${breakpoint('desktop')`
    height: 90px;
    line-height: 90px;
    font-size: 50px;
  `}
`
const NumIn = styled.input`
  color: inherit;
  background: transparent;
  border: none;
  font-size: inherit;
  height: 100%;
  width: 50px;
  font-family: inherit;
  padding: 0; margin: 0;

  ${breakpoint('desktop')`
    width: 100px;
  `}
`
const DownButton = styled.div`
  width: 100%;
  float: right;
  text-align: center;
  padding: 10px 0;
`

const Titled = props => (
  <Left {...props}>
    <Title>{props.title}</Title>
    <Body>{props.children}</Body>
  </Left>
)

const ChanceCalculator = props => {
  const [dice, setDice] = useState(1)
  const [sides, setSides] = useState(6)
  const [hitOn, setHitOn] = useState(6)
  const [open, setOpen] = useState(false)

  const hittingSides = sides - hitOn + 1
  const oneOrMore = Binomial(dice, hittingSides / sides, 1)

  return (
    <ChanceCalculatorStyled>
      <Left>
        <Titled left title='Dice'>
          <NumIn
            type='number'
            onInput={(e) => setDice(e.target.value)}
            min={0}
            max={600}
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

      <DownButton onClick={() => setOpen(!open)}>
        {open ? '▲' : '▼'}
      </DownButton>

      <ChanceList
        dice={dice}
        sides={sides}
        hitOn={hitOn}
        p={hittingSides / sides}
        renderer={props.renderer}
        style={{ maxHeight: open ? undefined : 0 }} />
    </ChanceCalculatorStyled>
  )
}

export default ChanceCalculator
