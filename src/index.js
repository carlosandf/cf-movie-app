import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@pages/App';
//import getTrendingPreview from './hooks/getTrendingPreview';


const app = document.getElementById('app');
const root = createRoot(app);


root.render(<App />);