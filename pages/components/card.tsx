import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import React from 'react';

interface props {
    name: string
}

const Card: React.FC<props> = ({name}) => {

    return (
        <div className={styles.card}>
                        <span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>
            {name}
        </div>
    );
};


export default Card


