import styled from 'styled-components'
import { Icon } from 'antd'

export const StyledLogo = styled.img`
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  object-fit: cover;
  background-image: url("/static/assets/logotipo.png");
`

export const StyledIconContainer = styled.div`
`

export const StyledIcon = styled(Icon)`
  &.anticon{
    margin-right: 0;
    border: 1px solid;
    border-radius: 30%;
    padding: 10px;
  }
`
