'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const layout = ({children}) => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            router.push('/');
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;