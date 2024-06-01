import './App.css';
import Heading from "./components/heading"
import Footer from './components/footer'

const style = {
  backgroundImage : "url(https://img.freepik.com/free-photo/surface-white-planks_23-2147625787.jpg)"
}
function App() {
  return (
    <>
    <Heading title="Keeper App"/>
    <Footer />
    </>
  );
}

export default App;
