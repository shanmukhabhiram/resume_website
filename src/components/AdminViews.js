import React, { useState } from 'react';

const ADMIN_PASSWORD = "password@123456789"; // static password

const AdminViews = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authenticated) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Admin Access</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button onClick={handleLogin} style={{ marginLeft: "10px" }}>Submit</button>
      </div>
    );
  }

  const logs = JSON.parse(localStorage.getItem("viewLogs")) || [];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Visitor Logs</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Region</th>
            <th>Country</th>
            <th>Timezone</th>
            <th>Region Time</th>
            <th>India Time</th>
            <th>Timestamp (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.ip}</td>
              <td>{log.region}</td>
              <td>{log.country}</td>
              <td>{log.timezone}</td>
              <td>{log.regionTime}</td>
              <td>{log.indiaTime}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViews;