import './App.css';
import Heading from './components/Heading';

const currentDate = new Date();
const year = currentDate.getFullYear();

const dockerLogoURL =
  'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png';
const k8sLogoURL =
  'https://logos-download.com/wp-content/uploads/2018/09/Kubernetes_Logo.png';

const App = () => {
  return (
    <div className='App'>
      <Heading />
      <img className='App-tech-img' src={dockerLogoURL} alt='docker logo' />
      <img className='App-tech-img' src={k8sLogoURL} alt='k8s logo' />
      <p>&copy; {year}, Zhengxing Xue</p>
    </div>
  );
};

export default App;
