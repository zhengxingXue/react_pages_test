import './techlogos.css';
import React from 'react';

const k8sLogoURL =
  'https://logos-download.com/wp-content/uploads/2018/09/Kubernetes_Logo.png';

const K8sLogo = () => {
  return <img className='tech-logo-img' src={k8sLogoURL} alt='k8s logo' />;
};

export default K8sLogo;
