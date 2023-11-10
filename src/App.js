import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/color'
function App() {
  const colors = ['red', 'black', 'yellow', 'blue', 'pink', 'purple'];
  return (
    <>
    <ColorPicker colors={colors} />
    </>
  );
}

export default App;
