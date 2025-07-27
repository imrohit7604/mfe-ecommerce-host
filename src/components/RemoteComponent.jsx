import React,  { useEffect, useState } from 'react';
import { loadRemote } from '../utils/loadRemote';


 const RemoteComponent = ({ scope, module, url, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    loadRemote(scope, url, scope, module).then((mod) => {
      setComponent(() => mod.default || mod);
    });
  }, [scope, url, module]);

  if (!Component) return <div>Loading remote {scope}...</div>;

  return <Component {...props} />;
};

export default RemoteComponent