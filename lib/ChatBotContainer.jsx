import styled from 'styled-components'

const ChatBotContainer = styled.div`
  font-family: Geneva;
  overflow: hidden;
  position: ${props => props.floating ? 'fixed' : 'relative'};
  bottom: ${props => props.floating ? '32px' : 'initial'};
  right: ${props => props.floating ? '32px' : 'initial'};
  z-index: 999;
  transform: ${props => props.opened ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  transition: transform .3s ease;
  height: 99vh;
  position: relative;

  @media screen and (max-width: 568px) {
    border-radius: ${props => props.floating ? '0' : ''};
    bottom: 0;
    height: 100%;
    right: 0;
    width: 100%;
  }
`

export default ChatBotContainer
