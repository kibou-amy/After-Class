import React, { useState } from 'react';
import SideBar2 from '../components/SideBar2';

export default function Coaches() {
  const [activeTab, setActiveTab] = useState('Coaches');
  
  // Expanded list with IDs 1 through 7
  const [coachesList, setCoachesList] = useState([
    {
      id: 1,
      name: 'Sarah Connor',
      specialty: 'Web Development',
      email: 'sarah.c@example.com',
      status: 'Active',
      avatar: 'https://m.media-amazon.com/images/M/MV5BNTk0Mjc4ZGUtOTA1MC00MzgzLTkyZDgtZGIyYmYzNTY5MjJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 2,
      name: 'Alexander Pierce',
      specialty: 'UI/UX Design',
      email: 'alex.p@example.com',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      specialty: 'Data Science',
      email: 'elena.r@example.com',
      status: 'On Leave',
      avatar: 'https://i.pravatar.cc/150?img=32'
    },
    {
      id: 4,
      name: 'Marcus Vance',
      specialty: 'Mobile App Development',
      email: 'marcus.v@example.com',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=60'
    },
    {
      id: 5,
      name: 'Sophia Chen',
      specialty: 'Cybersecurity',
      email: 'sophia.c@example.com',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=49'
    },
    {
      id: 6,
      name: 'David Miller',
      specialty: 'Cloud Computing & DevOps',
      email: 'david.m@example.com',
      status: 'On Leave',
      avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
      id: 7,
      name: 'Amara Okafor',
      specialty: 'Artificial Intelligence',
      email: 'amara.o@example.com',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=45'
    }
  ]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Barre latérale */}
      <SideBar2 activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <div style={{ flex: 1, padding: '32px', backgroundColor: '#FDF8F5' }}>
        {/* En-tête */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div>
            <h2 style={{ margin: 0, color: '#4A0E17', fontSize: '26px' }}>Coaches Management</h2>
            <p style={{ margin: '4px 0 0 0', color: '#777', fontSize: '14px' }}>View and manage all active instructors</p>
          </div>
          <button style={{
            backgroundColor: '#721C24',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            + Add New Coach
          </button>
        </div>

        {/* Grille des Coachs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {coachesList.map((coach) => (
            <div key={coach.id} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #F0E2DC',
              boxShadow: '0 4px 12px rgba(74, 14, 23, 0.06)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <img 
                  src={coach.avatar} 
                  alt={coach.name} 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #721C24', objectFit: 'cover' }} 
                />
                <span style={{
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  backgroundColor: coach.status === 'Active' ? '#E6F4EA' : '#FEF7E0',
                  color: coach.status === 'Active' ? '#137333' : '#B06000'
                }}>
                  {coach.status}
                </span>
              </div>
              
              <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#2D2D2D' }}>{coach.name}</h3>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#721C24', fontWeight: 'bold' }}>{coach.specialty}</p>
              <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: '#888' }}>{coach.email}</p>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button style={{ flex: 1, padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: '#F5EBE6', color: '#4A0E17', fontWeight: 'bold', cursor: 'pointer' }}>Edit</button>
                <button style={{ flex: 1, padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: '#FFF0F0', color: '#D32F2F', fontWeight: 'bold', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}