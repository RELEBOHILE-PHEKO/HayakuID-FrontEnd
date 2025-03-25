import React, { useState } from 'react';

const NotificationPreferences = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleEmailChange = () => {
        setEmailNotifications(!emailNotifications);
    };

    const handleSmsChange = () => {
        setSmsNotifications(!smsNotifications);
    };

    return (
        <div className="container mt-4">
            <h2>Notification Preferences</h2>
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="emailNotifications"
                    checked={emailNotifications}
                    onChange={handleEmailChange}
                />
                <label className="form-check-label" htmlFor="emailNotifications">
                    Email Notifications
                </label>
            </div>
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="smsNotifications"
                    checked={smsNotifications}
                    onChange={handleSmsChange}
                />
                <label className="form-check-label" htmlFor="smsNotifications">
                    SMS Notifications
                </label>
            </div>
            <button className="btn btn-primary mt-3">Save Preferences</button>
        </div>
    );
};

export default NotificationPreferences;