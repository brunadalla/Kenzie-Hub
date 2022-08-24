import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from './styles/Global';

import RoutesMain from './routes/index';

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='App'>
      
        <GlobalStyle/>
        <RoutesMain/>
        <ToastContainer
                position={window.matchMedia("(min-width:769px)").matches ? "top-right" : "top-center"}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
      
    </div> 
  );
}

export default App;
