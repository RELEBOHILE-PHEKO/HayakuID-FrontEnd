import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import FAQ from "../Pages/FAQ.jsx";
import Helpcenter from "../Pages/Helpcenter.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import Profile from "../Pages/Profile.jsx";
import SupportTicket from "../Pages/SupportTicket.jsx";
import AdminDashboard from "../Pages/Admin/AdminDashboard.jsx";
import UserManagement from "../Pages/Admin/UserManagement.jsx";
import SystemSettings from "../Pages/Admin/System Settings.jsx";
import AddressInfo from "../Pages/ApplicationSteps/AddressInfo.jsx";
import ApplicationForm from "../Pages/ApplicationSteps/ApplicationForm.jsx";
import BiometricStep from "../Pages/ApplicationSteps/BiometricStep.jsx";
import DocumentUploadStep from "../Pages/ApplicationSteps/DocumentUpload.jsx";
import DocumentPreview from "../Pages/ApplicationSteps/DocumentPreview.jsx";
import ReviewStep from "../Pages/ApplicationSteps/ApplicationReview.jsx"; // ✅ Moved to ApplicationSteps
import NotificationPreferences from "../Pages/Settings/NotificationPreferences.jsx";
import SecuritySettings from "../Pages/Settings/SecuritySettings.jsx";
import NotFound from "../Pages/NotFound.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import DocumentVerification from "../Pages/Admin/DocumentVerification.jsx";

const AppRoutes = () => {
        return (
            <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Helpcenter />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/support-ticket" element={<SupportTicket />} />

                    {/* ✅ Application Steps */}
                    <Route path="/application/address-info" element={<AddressInfo />} />
                    <Route path="/application/form" element={<ApplicationForm />} />
                    <Route path="/application/biometric-step" element={<BiometricStep />} />
                    <Route path="/application/document-upload" element={<DocumentUploadStep  documentType={} onUpload={}/>} />
                    <Route path="/application/document-preview" element={<DocumentPreview />} />
                    <Route path="/application/review-step" element={<ReviewStep />} /> {/* ✅ Fixed */}

                    {/* ✅ Protected Admin Routes */}
                    <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
                    <Route path="/admin/user-management" element={<ProtectedRoute element={<UserManagement />} />} />
                    <Route path="/admin/system-settings" element={<ProtectedRoute element={<SystemSettings />} />} />
                    <Route path="/admin/document-verification" element={<ProtectedRoute element={<DocumentVerification />} />} />

                    {/* ✅ Settings */}
                    <Route path="/settings/notification-preferences" element={<NotificationPreferences />} />
                    <Route path="/settings/security-settings" element={<SecuritySettings />} />

                    {/* ❌ 404 Page */}
                    <Route path="*" element={<NotFound />} />
            </Routes>
        );
};

export default AppRoutes;
