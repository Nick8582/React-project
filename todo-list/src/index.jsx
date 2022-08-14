import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/Layout';
import Add from './components/screens/Add/Add';
import Edit from './components/screens/Edited/Edit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Add />
      <Edit />
    </Layout>
  </React.StrictMode>
);


