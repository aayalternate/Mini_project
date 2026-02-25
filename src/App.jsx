import React, { useState } from 'react';
import Header from './Header';
import ComplaintGrid from './ComplaintGrid';
import Fab from './Fab';
import ComplaintModal from './ComplaintModal';
import ComplaintDetailModal from './ComplaintDetailModal';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('complaints');
  const [complaints, setComplaints] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleFabClick = () => {
    setIsModalOpen(true);
  };

  const handleAddComplaint = ({ heading, text, media, department, location }) => {
    const newComplaint = {
      id: Date.now(),
      heading: heading,
      text: text,
      media: media,
      department: department,
      location: location,
    };
    setComplaints([...complaints, newComplaint]);
  };

  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);
  };

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        {activeTab === 'complaints' ? (
          complaints.length > 0 ? (
            <>
              <ComplaintGrid complaints={complaints} onComplaintClick={handleComplaintClick} />
              <div className="fab-container">
                <Fab onClick={handleFabClick} />
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p className="empty-text">There are no issued complaints at this moment</p>
              <Fab onClick={handleFabClick} extended text="Give a Complaint" />
            </div>
          )
        ) : (
          <div className="empty-state">
            <p className="empty-text" style={{ color: 'var(--text-muted)' }}>
              Notifications are empty.
            </p>
          </div>
        )}

        <ComplaintModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddComplaint}
        />

        <ComplaintDetailModal
          complaint={selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
        />
      </main>
    </>
  );
}

export default App;
