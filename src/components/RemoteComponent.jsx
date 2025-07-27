// c:\Users\imroh\Documents\rohit_work\mfe-ecommerce-host\src\components\RemoteComponent.jsx
import React,  { useEffect, useState } from 'react';
import { loadRemote } from '../utils/loadRemote';

const SkeletonLoader = () => (
  <div className="skeleton-container">
    <div className="skeleton skeleton-title" />
    <div className="skeleton skeleton-line" style={{ width: '90%' }} />
    <div className="skeleton skeleton-line" />
    <div className="skeleton skeleton-line" style={{ width: '75%' }} />
  </div>
);


 const RemoteComponent = ({ scope, module, url, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    loadRemote(scope, url, scope, module).then((mod) => {
      setComponent(() => mod.default || mod);
    });
  }, [scope, url, module]);

  if (!Component) return <SkeletonLoader />;

  return <Component {...props} />;
};

export default RemoteComponent;
