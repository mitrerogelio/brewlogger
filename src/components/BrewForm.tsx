import React, {useState, useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from '@firebase/firestore';
import {auth, db} from '../firebase/firebase-config';

export interface Brewer {
    name: string;
    img: string;
    multiple: number;
    dose: number;
}

interface FormFields {
    coffee: string;
    roast: string;
    grind: string;
    rating: number;
}

const useFirebaseUser = () => {
    return auth.currentUser;
};

const BrewForm = ({brewer}: { brewer: Brewer }) => {
    const ratios = [
        '1:1',
        '1:2',
        '1:3',
        '1:4',
        '1:5',
        '1:6',
        '1:7',
        '1:8',
        '1:9',
        '1:10',
        '1:11',
        '1:12',
        '1:13',
        '1:14',
        '1:15',
        '1:16',
        '1:17',
        '1:18',
        '1:19',
        '1:20',
    ];

    const [formFields, setFormFields] = useState<FormFields>({
        coffee: '',
        roast: '',
        grind: '',
        rating: 5,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const {multiple, dose, name: vehicle, img: brewerImg} = brewer;
    const currentUser = useFirebaseUser();
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement | null>(null);

    const createLog = async (event: FormEvent) => {
        event.preventDefault();

        if (!currentUser) {
            console.log('User is not authenticated');
            return;
        }

        const logsCollectionReference = collection(db, 'logs');
        await addDoc(logsCollectionReference, {
            vehicle,
            image: brewerImg,
            uid: currentUser.uid,
            ...formFields,
        });

        formRef.current?.dispatchEvent(
            new Event('submit', {cancelable: true})
        );
        navigate('/');
    };

    return (
        <form
            className="my-5"
            onSubmit={createLog}
            ref={formRef}
        >
            <input
                type="text"
                name="coffee"
                placeholder="Your coffee"
                className="input input-sm input-bordered w-full max-w-xs mb-5"
                onChange={handleInputChange}
            />

            {/*... Other inputs ...*/}
        </form>
    );
};

export default BrewForm;
