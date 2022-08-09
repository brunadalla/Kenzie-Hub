import './App.css';
import RoutesMain from './routes';
import GlobalStyle from './styles/Global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyle/>
        <RoutesMain/>
      </BrowserRouter>
    </div> 
  );
}

export default App;
