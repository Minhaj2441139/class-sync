
'use client'
import Table from '@/components/table';
import React, { useEffect, useState } from 'react';


const CoursePage = () => {
    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [searchedTeachers, setSearchedTeachers] = useState([]);



    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/experties/get-all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setCourse(data.experties);
            })
            .catch(error => {
                console.error('Error fetching course data:', error);
            });
    }, []);
    useEffect(() => {
        if(!selectedCourse) return;
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/teacher?tag=${selectedCourse}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setSearchedTeachers(data.teachers);
            })
            .catch(error => {
                console.error('Error fetching course data:', error);
            });
    }, [selectedCourse]);

    console.log(searchedTeachers);

    return (
        <div>
            <div>
                {course.length > 0 && (

                    <select
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} 
                    >
                        <option value="">Select an expertise</option>
                        {course.map(cor => (
                            <option key={cor.id} value={cor.name}>
                                {cor.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
           <Table data={searchedTeachers} />
            
        </div>
    );
};

export default CoursePage;
