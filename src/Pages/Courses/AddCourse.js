import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddCourse = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="radial-progress" style={{ "--value": 70 }}></div>
    }
    else {

    }
    return (
        <div>
            <h1>services addded</h1>
        </div>
    );
};

export default AddCourse;