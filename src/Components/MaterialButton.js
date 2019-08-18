import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const MaterialButtonStyled = styled.div`
  position: fixed;
  width: 45px; height: 45px;
  border-radius: 100%;
  background: #21252b;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  bottom: 20px;
  left: ${props => props.left ? '20px' : 'auto'};
  right: ${props => props.right ? '20px' : 'auto'};

  ${breakpoint('desktop')`
    width: 70px; height: 70px;
    font-size: 40px;
    line-height: 64px;
    bottom: 50px;
    left: ${props => props.left ? '50px' : 'auto'};
    right: ${props => props.right ? '50px' : 'auto'};
  `}
`

export default MaterialButtonStyled
