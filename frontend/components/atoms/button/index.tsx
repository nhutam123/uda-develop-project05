import { FC } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  color?: string

  backgroundColor?: string

  htmlType?: 'button' | 'reset' | 'submit'
  onClick?: () => void
  padding?: string
  margin?: string
  text?: string
  minWidth?: string
  borderColor?: string
  isFixed?: boolean
  isDisabled?: boolean
  fontSize?: string
  radius?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const {} = props
  const {
    padding = '',
    margin = '',
    backgroundColor = 'while',
    color = '#ccc',
    htmlType = 'button',
    onClick,
    text = '',
    borderColor = '#ccc',
    isFixed,
    isDisabled = false,
    fontSize = '14px',
    minWidth = 'unset',
    radius = '64px',
    ...rest
  } = props

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      disabled={isDisabled}
      fontSize={fontSize}
      isDisabled={isDisabled}
      margin={margin}
      minWidth={isFixed ? '200px' : minWidth}
      padding={padding}
      radius={radius}
      type={htmlType}
      onClick={onClick}
      {...rest}
    >
      {text}
    </StyledButton>
  )
}

const DefaultStyled = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  align-items: center;
  display: flex;
  gap: 6px;
  padding: 8px 24px;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

const StyledButton = styled(DefaultStyled)<ButtonProps>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  min-width: ${(props) => props.minWidth};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius};
  :hover {
    cursor: ${(props) => props.isDisabled && 'no-drop'};
  }
`
