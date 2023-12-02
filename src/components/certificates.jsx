import React from 'react';
import Certis from '../assets/certificates/certis';
const Certificates = () => {
    const certificateKeys = Object.keys(Certis);

    return (
        <div
        
        style={
            {
                alignItems:'center',
                justifyContent:'space-around',
                margin:'auto',

            }
        }
        >
            {certificateKeys.map((key) => (
                <img key={key} width={500} src={Certis[key]} alt={key} />
            ))}
        </div>
    );
}

export default Certificates;
