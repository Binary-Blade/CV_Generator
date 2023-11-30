import { useState } from 'react';
import FormPersonal from './FormPersonal.jsx';
import PersonalDetailsView from "./PersonalDetailsView.jsx";

const ManagePersonal = () => {
    const [content, setContent] = useState({
        fullName: '',
        address: '',
        city: '',
        phone: '',
        email: ''
    });

    const handleContentResume = (newContent) => {
        setContent(prevContent => ({
            ...prevContent,
            ...newContent
        }));
    };

    return (
        <>
            <FormPersonal onFormSubmit={handleContentResume} initialData={content} />
            <PersonalDetailsView details={content} />
            {/* ... */}
        </>
    );
};

export default ManagePersonal;
