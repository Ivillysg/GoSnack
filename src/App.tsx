import React from 'react'
import { HashRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyle'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Routes
import Routes from './routes'

// Components
import HeaderWindow from './components/headerWindow'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HeaderWindow/>
      <HashRouter>
        <Header/>
        <GlobalStyle />
        <Routes/>
      </HashRouter>
    </Provider>
  )
}

export default App
