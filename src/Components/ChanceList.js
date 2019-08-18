import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Binomial from '../Lib/Binomial'
import mappable from '../Lib/Mappable'

const ChanceListStyled = styled.div`
  transition: max-height 0.2s;
  max-height: 150px;
  width: 100%;
  float: left;
  background: rgba(255,255,255,0.05);
  overflow-y: auto;

  ${breakpoint('desktop')`
    max-height: 200px;
  `}
`
const ChanceListItemStyled = styled.div`
  height: 20px;
  font-size: 15px;
  padding: 5px;

  ${breakpoint('desktop')`
    padding: 10px 200px;
  `}
`
const Left = styled.div`float: left;`
const Right = styled.div`float: right;`

const ChanceListItem = props => (
  <ChanceListItemStyled>
    <Left>{props.number} or more hits</Left>
    <Right>{props.children}</Right>
  </ChanceListItemStyled>
)

const ChanceList = props => (
  <ChanceListStyled {...props}>
    {
      mappable(props.dice).map(x => (
          <ChanceListItem number={x + 1} key={x}>{props.renderer.render(
            Binomial(props.dice, props.p, x + 1)
          )}</ChanceListItem>
      ))
    }
  </ChanceListStyled>
)

export default ChanceList
