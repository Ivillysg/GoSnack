import React, { useCallback } from 'react'

import { remote } from 'electron'

import { Container, Logo, WindowActions, DefaultActionButton } from './styles'
import { FiX, FiMinus, FiMaximize2 } from 'react-icons/fi'

const headerWindow: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.close()
  }, [])

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow()

    const { width: currentWidth, height: currentHeight } = window.getBounds()

    const {
      width: maxWidth,
      height: maxHeight
    } = remote.screen.getPrimaryDisplay().workAreaSize

    const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight

    if (!isMaximized) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }, [])
  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  return (
    <Container>
      <Logo>Go Snack</Logo>
      <WindowActions>
        <DefaultActionButton onClick={handleMinimize}>
          <FiMinus/>
        </DefaultActionButton>
        <DefaultActionButton onClick={handleMaximize}>
          <FiMaximize2/>
        </DefaultActionButton>
        <DefaultActionButton onClick={handleCloseWindow}>
          <FiX/>
        </DefaultActionButton>

      </WindowActions>
    </Container>
  )
}

export default headerWindow
