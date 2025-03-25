import React from "react";

const SubmitApplication = ({ onPrevious }) => {
    const handleSubmit = () => {
        alert("Application Submitted Successfully! 🎉");
        // TODO: Add actual API call here
    };

    return (
        <div className="text-center">
            <h2>You're Almost Done!</h2>
            <p>Click the button below to submit your application.</p>
            <button className="btn btn-secondary me-2" onClick={onPrevious}>Back</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit Application</button>
        </div>
    );
};

export default SubmitApplication;
