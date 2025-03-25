import React, { useState } from 'react';

const SecuritySettings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleTwoFactorToggle = () => {
        setTwoFactorEnabled(!twoFactorEnabled);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update security settings goes here
        console.log('Security settings updated:', { currentPassword, newPassword, twoFactorEnabled });
    };

    return (
        <div className="container mt-4">
            <h2>Security Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                    />
                </div>
                <div className="form-check mt-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="twoFactor"
                        checked={twoFactorEnabled}
                        onChange={handleTwoFactorToggle}
                    />
                    <label className="form-check-label" htmlFor="twoFactor">
                        Enable Two-Factor Authentication
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update Security Settings</button>
            </form>
        </div>
    );
};

export default SecuritySettings;