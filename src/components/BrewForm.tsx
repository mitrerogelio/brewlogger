import React, {useState, useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from '@firebase/firestore';
import { auth, db } from '../firebase/firebase-config';
import {ratios} from '../utils/ratios'

export interface Brewer {
    name: string;
    img: string;
    multiple: number;
    dose: number;
}

interface FormFields {
    coffee: string;
    multiple: number;
    dose: number;
    roast: string;
    grind: string;
    rating: number;
}

const useFirebaseUser = () => {
    return auth.currentUser;
};

const BrewForm = ({ brewer }: { brewer: Brewer }) => {

    const { multiple, dose, name: vehicle, img: brewerImg } = brewer;
    const currentUser = useFirebaseUser();

    const [formFields, setFormFields] = useState<FormFields>({
        coffee: '',
        multiple: multiple,
        dose: dose,
        roast: '',
        grind: '',
        rating: 0,
    });

    const setFormFieldsHandler = (inputName: string, updatedValue: any) => {
        setFormFields(prevFormFields => {
            const newFormFields = {
                ...prevFormFields,
                [inputName]: updatedValue
            }
           return newFormFields
        });
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.name === 'multiple') {         // Brew Ratio Handler
            const selectedValue = e.target.value;
            const numericValue = parseInt(selectedValue.split(':')[1].trim(), 10);
            setFormFieldsHandler(e.target.name, numericValue);
        }   else if (e.target.name === 'dose') {    // Dose Slider Handler
            const grams = parseInt(e.target.value.substring(0), 10)
            setFormFieldsHandler(e.target.name, grams)
        }   else if (e.target.name === 'rating') {  // Rating Input Handler
            const rating = parseInt(e.target.value)
            setFormFieldsHandler(e.target.name, rating)
        }   else {                                  // Text Input Handler
            setFormFieldsHandler(e.target.name, e.target.value)
        }
    }

    // Button Click Logic
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement | null>(null);

    // Create Log ❤️
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
                onChange={inputHandler}
            />

             <select name='multiple' className='select select-bordered w-full max-w-xs' onChange={inputHandler}>
                <option>Brew Ratio:</option>
                    {ratios.map((ratio, index) => {
                    return <option key={index}>{ratio}</option>
                    })}
            </select>

            <section className='flex flex-col items-center my-5'>
                <label
                    htmlFor='coffee-dose'
                    className='self-start mb-2 text-l'
                >
                    Coffee (grams): {formFields.dose}g
                </label>
                <input
                    type='range'
                    id='coffee-dose'
                    name='dose'
                    min='10'
                    max='50'
                    defaultValue={formFields.dose}
                    className='range'
                    step='5'
                    onChange={inputHandler}
                />
                <input
                    type="text"
                    name='roast'
                    placeholder="Roast level"
                    className="my-5 input input-sm input-bordered w-full max-w-xs mb-5"
                    onChange={inputHandler}
                />
                <input
                    type="text"
                    name='grind'
                    placeholder="Grind"
                    className="my-5 input input-sm input-bordered w-full max-w-xs mb-5"
                   onChange={inputHandler}
                />
                <div className='w-full mt-4'>
                    <p>Water Amount:{' '}
                        <span className='text-primary'>{formFields.multiple * formFields.dose}</span>
                        (mL/grams)
                    </p>
                </div>

                <section className="rating gap-1 mt-10">
                    <input type="radio" name="rating" value={1} className="mask mask-heart bg-red-400"
                    onChange={inputHandler} />
                    <input type="radio" name="rating" value={2} className="mask mask-heart bg-orange-400"
                    onChange={inputHandler} />
                    <input type="radio" name="rating" value={3} className="mask mask-heart bg-yellow-400"
                    onChange={inputHandler} />
                    <input type="radio" name="rating" value={4} className="mask mask-heart bg-lime-400"
                    onChange={inputHandler} />
                    <input type="radio" name="rating" value={5} className="mask mask-heart bg-green-400"
                    onChange={inputHandler} />
                </section>

                <button className="btn btn-primary mt-10" type='submit'>Create Log</button>
            </section>
        </form>
    );
};

export default BrewForm;