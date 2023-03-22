import React from 'react';
import { useLocation } from 'react-router-dom';

export interface LocationHocProps {
  location: ReturnType<typeof useLocation>;
}

export default function LocationHoc(Component: React.ComponentType<LocationHocProps>) {
  return (props: LocationHocProps) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}
