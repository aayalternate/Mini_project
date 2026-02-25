import React from 'react';
import './ComplaintCard.css';

const ComplaintCard = ({ complaint, onClick }) => {
    return (
        <div className="complaint-card" onClick={onClick}>
            <div className="complaint-card-header">
                {complaint.department && (
                    <span className="department-badge">{complaint.department}</span>
                )}
                {complaint.location && (
                    <a
                        href={`https://www.google.com/maps?q=${complaint.location.lat},${complaint.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-pin"
                        title="View on Google Maps"
                        onClick={(e) => e.stopPropagation()}
                    >
                        📍
                    </a>
                )}
            </div>
            {complaint.heading && (
                <h3 className="complaint-heading">{complaint.heading}</h3>
            )}
            <hr className="complaint-divider" />
            <div className="complaint-content-wrapper">
                {complaint.text && (
                    <p className="complaint-text">{complaint.text}</p>
                )}
                {/* Display a small thumbnail of the first media item if it exists */}
                {complaint.media && complaint.media.length > 0 && (
                    <div className="card-media-thumbnail">
                        <img src={complaint.media[0].preview} alt="Evidence thumbnail" />
                        {complaint.media.length > 1 && (
                            <div className="media-count-overlay">+{complaint.media.length - 1}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComplaintCard;
