import React from 'react';

const alerts = [
  { id: 1, host: 'DESKTOP-CEO', severity: 'Critical', threat: 'Ransomware Activity' },
  { id: 2, host: 'SRV-DB-01', severity: 'High', threat: 'Reverse Shell' },
];

export default function AlertTable() {
  return (
    <table className="w-full text-left bg-gray-800 rounded">
      <thead>
        <tr><th>Host</th><th>Severity</th><th>Threat</th></tr>
      </thead>
      <tbody>
        {alerts.map(a => (
          <tr key={a.id} className="border-t border-gray-700">
            <td className="p-4">{a.host}</td>
            <td className="text-red-400 p-4">{a.severity}</td>
            <td className="p-4">{a.threat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
