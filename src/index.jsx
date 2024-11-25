import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ColorModeProvider } from './components/ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Root } from './pages/Root'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={defaultSystem}>
      <ColorModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Root />}>
              <Route index element={<Home />} />
              <Route path='/quiz' element={<Quiz />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
)
