import React from 'react';

interface ProtectedRouteProps {
    // Add the props your component accepts
    // Common examples might include:
    component?: React.ComponentType<any>;
    element?: React.ReactElement;
    children?: React.ReactNode;
    isAuthenticated?: boolean;
    redirectPath?: string;
    fallback?: React.ReactNode;
    // Add any other props specific to your implementation
}

declare const ProtectedRoute: React.FC<ProtectedRouteProps>;

export default ProtectedRoute;