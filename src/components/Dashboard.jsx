import { useState } from 'react';
import ResumePreview from "./common/ResumePreview.jsx";
import Resume from "./Resume.jsx";
import FormPersonal from "./Form/FormPersonal.jsx";
import FormProfessional from "./Form/FormProfessional.jsx";
import FormEducation from "./Form/FormEducation.jsx";


const Dashboard = () => {
    const [personalInfo, setPersonalInfo] = useState({});
    const [professionalInfo, setProfessionalInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState({});

    const handlePersonalInfoUpdate = (newInfo) => {
        setPersonalInfo(newInfo);
    };

    const handleProfessionalInfoUpdate = (newInfo) => {
        setProfessionalInfo(newInfo);
    };

    const handleEducationInfoUpdate = (newInfo) => {
        setEducationInfo(newInfo);
    }


    return (
        <>

            <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="flex-2 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h1 className="text-center text-3xl font-bold text-gray-700 mb-8">Dashboard</h1>
                    <FormPersonal onInfoUpdate={handlePersonalInfoUpdate} />
                    <FormProfessional onInfoUpdate={handleProfessionalInfoUpdate} />
                    <FormEducation onInfoUpdate={handleEducationInfoUpdate} />
                </div>
                <div className="flex-1">
                    <Resume preview={
                        <>
                            <ResumePreview title="Personal Information" details={personalInfo} />
                            <ResumePreview title="Professional Information" details={professionalInfo} />
                            <ResumePreview title="Educational Information" details={educationInfo} />
                        </>
                    } />
                </div>
            </div>


        </>
    );
};

export default Dashboard;