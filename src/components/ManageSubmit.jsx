import { useState } from 'react';
import FormPersonal from './PersonalInformation/FormPersonal.jsx';
import PersonalDetailsView from "./PersonalInformation/PersonalDetailsView.jsx";
import FormProfessional from "./ProfessionalExperience/FormProfessional.jsx";

const ManagePersonal = () => {
    const [personalData, setPersonalData] = useState({
        fullName: '',
        address: '',
        city: '',
        phone: '',
        email: '',
        language: ''
    });
    const [professionalData, setProfessionalData] = useState({
        'companyName': '',
        'jobTitle': '',
        'workPeriod': '',
        'jobDescription': ''

    })

    // Fonction générique pour la mise à jour de l'état
    const handleContentUpdate = (setContent) => (newContent) => {
        setContent(prevContent => ({
            ...prevContent,
            ...newContent
        }));
    };

    // Handlers spécifiques pour chaque type de contenu
    const handlePersonalContent = handleContentUpdate(setPersonalData);
    const handleProfessionalContent = handleContentUpdate(setProfessionalData);

    return (
        <>
            <FormPersonal onFormSubmit={handlePersonalContent} initialData={personalData} />
            <PersonalDetailsView details={personalData} />
            {/* ... */}
            <FormProfessional onFormSubmit={handleProfessionalContent} initialData={professionalData} />
        </>
    );
};

export default ManagePersonal;
