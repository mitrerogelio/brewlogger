import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {collection, getDocs} from '@firebase/firestore';
import {db} from '../firebase/firebase-config';

interface IBrewer {
    id: string;
    name: string;
    description: string;
    dose: number;
    img: string;
    multiple: number;
}

const Brewmethods = () => {

    const [brewers, setBrewers] = useState<IBrewer[]>([]);

    useEffect(() => {
        const getBrewers = async () => {
            const querySnapshot = await getDocs(collection(db, 'brewers'));
            const brewersData = querySnapshot.docs.map((doc) => ({
                ...(doc.data() as IBrewer)
            }));
            setBrewers((prevBrewers) => [...prevBrewers, ...brewersData]);
        };
        getBrewers();
    }, []);
    
    return (
        <>
            {brewers.map((brewer: IBrewer, index) => (
                <Link
                    to={`/brew/${brewer.id}`}
                    state={{data: brewer}}
                    className="cursor-pointer"
                    key={index}
                >
                    <article className="avatar h-32 m-3 flex flex-col justify-center">
                        <div className="w-28 rounded-full">
                            <img src={brewer.img} alt={`Closeup of ${brewer.name}`}/>
                        </div>
                        <p className="text-center">{brewer.name}</p>
                    </article>
                </Link>
            ))}
        </>
    )
}

export default Brewmethods
