import React from 'react';
import ComplaintCard from './ComplaintCard';
import './ComplaintGrid.css';

const ComplaintGrid = ({ complaints, onComplaintClick }) => {
    return (
        <div className="complaint-grid">
            {complaints.map(complaint => (
                <ComplaintCard
                    key={complaint.id}
                    complaint={complaint}
                    onClick={() => onComplaintClick(complaint)}
                />
            ))}
        </div>
    );
};

export default ComplaintGrid;
