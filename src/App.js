import { Provider } from 'react-redux';
import generateStore from './config/store';
import Index from './pages/Index';

const store = generateStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <h2 className="mt-3 text-center">Citas médicas</h2>
        <hr />
      <Index />
    </Provider>
  </div>
  );
}

export default App;
