import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.tsx';
import './styles/commonStyles.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
