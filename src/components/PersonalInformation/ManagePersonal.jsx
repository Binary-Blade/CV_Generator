import { useState } from 'react';
import FormPersonal from './FormPersonal.jsx';
import PersonalDetailsView from "./PersonalDetailsView.jsx";

const ManagePersonal = () => {
    const [content, setContent] = useState(null);

    const handleContentResume = (newContent) => {
        setContent({ ...newContent, id: Date.now() });
    };

    return (
        <>
            <FormPersonal onFormSubmit={handleContentResume} />
            {content ? (
                // Utilise le composant PersonalDetailsView pour afficher les données
                <PersonalDetailsView details={content} />
            ) : (
                <p>No content submitted yet</p>
            )}
        </>
    );
};

export default ManagePersonal;
