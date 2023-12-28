import React from 'react';
import Certis from '../assets/certificates/certis';
const Certificates = () => {
    const certificateKeys = Object.keys(Certis);

    return (
        <div style={
            {
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: 'auto',
                padding: 10,
            }
        }>
            {certificateKeys.map((key) => (
                <img key={key} height={200} width="auto" src={Certis[key]} alt={key} />
            ))}
        </div>
    );
}

export default Certificates;
