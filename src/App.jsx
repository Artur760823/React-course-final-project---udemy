import './App.scss';
import StoreProvider from './store/StoreProvider';


const App = () => {
  return (
    <StoreProvider>
      <header>Hello World</header>
    </StoreProvider>

  )
}
export default App;
