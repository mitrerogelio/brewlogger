import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {collection, getDocs} from '@firebase/firestore';
import {db} from '../firebase/firebase-config';

interface ILog {
    coffee: string;
    dose: number;
    grind: string;
    image?: string;
    multiple: number;
    rating: number;
    roast: string;
    uid?: string;
    id: string;
    vehicle: string;
}

const Logs = () => {
    const [logs, setLogs] = useState<ILog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getLogs = async () => {
            const querySnapshot = await getDocs(collection(db, 'logs'));
            const logsData = querySnapshot.docs.map((doc) => ({
                ...(doc.data() as ILog)
            }));
            setLogs((prevLogs) => [...prevLogs, ...logsData]);
        };
        getLogs();
    }, []);

    return logs.map((log: ILog, index) => (
        <article
            className='stats bg-primary text-primary-content carousel-item'
            key={index}
        >
            <div className='stat'>
                <h4 className='stat-title'>Brew Method:</h4>
                <p className='stat-value'>{log.vehicle}</p>
                <div className='stat-actions'>
                    <Link
                        to={`/log/${log.uid}`}
                        state={{data: log.uid}}
                        className='btn btn-sm'
                    >
                        Edit Log
                    </Link>
                </div>
            </div>
            <div className='stat'>
                <h4 className='stat-title'>Dose</h4>
                <p className='stat-value'>{log.dose}g</p>
                <h4 className='stat-title'>Rating</h4>
                <p className='stat-value'>{log.rating}</p>
            </div>
        </article>
    ))
}

export default Logs
