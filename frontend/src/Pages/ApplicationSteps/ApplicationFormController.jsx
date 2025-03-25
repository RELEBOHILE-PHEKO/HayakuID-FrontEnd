import React, { useState } from 'react';
import AddressInfo from './AddressInfo.jsx';
import DocumentUploadStep from './DocumentUpload.jsx';
import BiometricStep from './BiometricStep.jsx';
import PersonalInfo from './PersonalInfo.jsx';
import ReviewStep from './ApplicationReview.jsx';
import SubmitApplication from './SubmitApplication.jsx'; // ✅ Import

const ApplicationFormController = () => {
    const [step, setStep] = useState(1);
    const [documentType, setDocumentType] = useState('idCard'); // Default document type

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    // Handler for document uploads
    const handleDocumentUpload = (file) => {
        console.log('Document uploaded:', file);
        // Process the uploaded document
    };

    return (
        <div>
            {step === 1 && <PersonalInfo onNext={nextStep} />}
            {step === 2 && <AddressInfo onNext={nextStep} onPrevious={prevStep} />}
            {step === 3 && <DocumentUploadStep
                onNext={nextStep}
                onPrevious={prevStep}
                documentType={documentType}
                onUpload={handleDocumentUpload}
            />}
            {step === 4 && <BiometricStep onNext={nextStep} onPrevious={prevStep} />}
            {step === 5 && <ReviewStep onNext={nextStep} onPrevious={prevStep} />}
            {step === 6 && <SubmitApplication onPrevious={prevStep} />} {/* ✅ Final Step */}
        </div>
    );
};

export default ApplicationFormController;