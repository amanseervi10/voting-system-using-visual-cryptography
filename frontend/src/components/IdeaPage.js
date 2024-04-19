import React, { useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';
import { IoIosHand } from 'react-icons/io';

function IdeaPage() {
    useEffect(() => {
        // Disable scrollbar on mount
        document.body.style.overflow = 'hidden';

        // Re-enable scrollbar on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-3 mb-4">A voting system</h1>
                <h2 className="display-5 mb-4">secured by visual cryptography technique</h2>
                <FaLock size={60} color="#007bff" />
                <FaHandPointer size={60} color="#D1A07E" />
            </div>
        </div>
    );
}

export default IdeaPage;
