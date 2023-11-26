import styled from 'styled-components'
import { MediaQuery } from '../../../../shares/const/mediaQuery'

export const FieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-grow: 1;
  ${MediaQuery.MOBILE_SCREEN} {
    flex-direction: column;
  }
`
