import React, { useState } from 'react';

const Klik = (nama) => {
    alert(`Halo ${nama}`);
}

const Form = () => {
    const [nama, setNama] = useState(''); // Menyimpan nilai input di state

    const handleInputChange = (event) => {
        setNama(event.target.value); // Memperbarui state ketika input berubah
    }

    const handleButtonClick = () => {
        Klik(nama); // Memanggil fungsi Klik dengan nama yang ada di state
    }

    return (
        <div>
            Masukkan Nama
            <input 
                type="text" 
                value={nama} 
                onChange={handleInputChange} // Menangani perubahan input
            />
            <button onClick={handleButtonClick}>Click</button>
        </div>
    );
}

export default Form;
