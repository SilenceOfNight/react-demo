import React from 'react'
import Button from './components/Button'

const App = props => (
  <div>
    This is a simple demo of React.
    <Button disabled>disabled</Button>
    <Button role="primary">Primary</Button>
    <Button>Generation</Button>
    <Button size="small">Small</Button>
    <Button>Default</Button>
    <Button size="large">Large</Button>
  </div>
)

export default App
