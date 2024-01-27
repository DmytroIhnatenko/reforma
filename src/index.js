import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Replace ReactDOM.render with ReactDOM.createRoot
const root = createRoot(document.getElementById('root'));
root.render(<App />);
