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
            <h1>Dashboard</h1>
                <div>
                    <FormPersonal onInfoUpdate={handlePersonalInfoUpdate}/>
                    <FormProfessional onInfoUpdate={handleProfessionalInfoUpdate}/>
                    <FormEducation onInfoUpdate={handleEducationInfoUpdate} />
                </div>
            <div>
                <Resume preview={
                    <>
                        <ResumePreview details={personalInfo} />
                        <ResumePreview details={professionalInfo} />
                        <ResumePreview details={educationInfo} />
                    </>
                } />
            </div>

        </>
    );
};

export default Dashboard;