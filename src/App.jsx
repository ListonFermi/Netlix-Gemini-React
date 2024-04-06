import Body from "./Components/Body"
import { Provider } from 'react-redux'
import appstore from "./Utils/appstore" 

function App() {

  return (
    <Provider store={appstore}>
      <Body />
    </Provider>)
}

export default App
