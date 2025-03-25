import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Panel. Manage ID and passport applications, users, and system settings here.</p>

            <div className="dashboard-links">
                <h2>Navigation</h2>
                <ul>
                    <li><Link to="/user-management">User Management</Link></li>
                    <li><Link to="/application-management">Application Management</Link></li>
                    <li><Link to="/settings">System Settings</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                </ul>
            </div>

            <div className="dashboard-stats">
                <h2>Overview</h2>
                <p><strong>Total Users:</strong> 150</p>
                <p><strong>Total Applications Submitted:</strong> 75</p>
                <p><strong>Pending Applications:</strong> 5</p>
                <p><strong>Approved Applications:</strong> 60</p>
                <p><strong>Rejected Applications:</strong> 10</p>
            </div>

            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                    <li>User John Doe submitted a new ID application.</li>
                    <li>Application for passport by Jane Smith approved.</li>
                    <li>User Mike Johnson updated his profile information.</li>
                    <li>New application submitted by Emily Davis.</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;