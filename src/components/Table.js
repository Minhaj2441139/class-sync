import { selectClasses } from '@mui/material';
import React from 'react';

const Table = ({data}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((v, i) => 
                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{v.user_info?.name}</td>

                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;