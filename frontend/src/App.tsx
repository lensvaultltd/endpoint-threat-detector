import React from 'react';
import AlertTable from './components/AlertTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-red-500 mb-6">EDR Threat Dashboard</h1>
      <AlertTable />
    </div>
  );
}

export default App;
