import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Employee() {
    const [student, setStudent] = useState('');
    const navigate = useNavigate();
    const params = useParams();

    const handleClick = () => {
        navigate(`/student?studentName=${student}`);
    }
    
    useEffect(() => {
        const { studentName } = params;
        if (studentName) {
            setStudent(studentName);
        }
    }, [params]);


    return (
        <div>Employee
            <input type="text"
                value={student}
                onChange={(e) => setStudent(e.target.value)}
                placeholder='Nhập từ khóa tìm kiếm' />
            <button onClick={handleClick}>Tìm kiếm</button>
        </div>
    )
}

