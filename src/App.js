import { Provider } from 'react-redux';
import BodyComponent from './components/BodyComponent';
import appStore from './utilil/appStore';
function App() {
  return (
      <Provider store={appStore}>
         <BodyComponent/>
      </Provider>
  )
}

export default App;
