import './App.css';
import Heading from './components/Heading';
import DockerLogo from './components/TechLogos/DockerLogo';
import K8sLogo from './components/TechLogos/K8sLogo';

const currentDate = new Date();
const year = currentDate.getFullYear();

const App = () => {
  return (
    <div className='App'>
      <Heading />
      <DockerLogo />
      <K8sLogo />
      <p>&copy; {year}, Zhengxing Xue</p>
    </div>
  );
};

export default App;
