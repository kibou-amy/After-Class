import React, { useState } from 'react';
import SideBar2 from '../components/SideBar2';

export default function Formations() {
  const [activeTab, setActiveTab] = useState('Formation');

  const [formationsList] = useState([
    {
      id: 1,
      name: 'Full-Stack Web Development',
      teachers: ['Sarah Connor', 'Marcus Vance'],
      groups: [
        { name: 'Group Alpha-24', studentCount: 18 },
        { name: 'Group Alpha-25', studentCount: 15 }
      ]
    },
    {
      id: 2,
      name: 'UI/UX Design Masterclass',
      teachers: ['Alexander Pierce'],
      groups: [
        { name: 'Group Beta-10', studentCount: 12 },
        { name: 'Group Beta-11', studentCount: 14 }
      ]
    },
    {
      id: 3,
      name: 'Data Science & AI',
      teachers: ['Elena Rostova', 'Amara Okafor'],
      groups: [
        { name: 'Group Delta-03', studentCount: 20 }
      ]
    },
    {
      id: 4,
      name: 'Mobile App Development (Flutter)',
      teachers: ['Marcus Vance'],
      groups: [
        { name: 'Group Gamma-07', studentCount: 16 },
        { name: 'Group Gamma-08', studentCount: 10 }
      ]
    },
    {
      id: 5,
      name: 'Cybersecurity Essentials',
      teachers: ['Sophia Chen'],
      groups: [
        { name: 'Group Shield-01', studentCount: 22 }
      ]
    },
    {
      id: 6,
      name: 'Cloud Computing & DevOps',
      teachers: ['David Miller'],
      groups: [
        { name: 'Group Cloud-01', studentCount: 11 },
        { name: 'Group Cloud-02', studentCount: 13 }
      ]
    }
  ]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <SideBar2 activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px', backgroundColor: '#FDF8F5' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div>
            <h2 style={{ margin: 0, color: '#4A0E17', fontSize: '26px' }}>Formations Overview</h2>
            <p style={{ margin: '4px 0 0 0', color: '#777', fontSize: '14px' }}>
              Track course programs, assigned instructors, and student numbers per group
            </p>
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
            + Create Formation
          </button>
        </div>

        {/* Formations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {formationsList.map((formation) => {
            const totalStudents = formation.groups.reduce((acc, g) => acc + g.studentCount, 0);

            return (
              <div key={formation.id} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '22px',
                border: '1px solid #F0E2DC',
                boxShadow: '0 4px 12px rgba(74, 14, 23, 0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Formation Title */}
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#4A0E17' }}>
                  {formation.name}
                </h3>

                {/* Teachers Section */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Instructors / Teachers
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {formation.teachers.map((teacher, index) => (
                      <span key={index} style={{
                        backgroundColor: '#F5EBE6',
                        color: '#4A0E17',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600'
                      }}>
                        👨‍🏫 {teacher}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Groups Breakdown */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Groups & Student Count
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    {formation.groups.map((group, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        justify: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#FAF5F2',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '13px'
                      }}>
                        <span style={{ fontWeight: '600', color: '#2D2D2D' }}>👥 {group.name}</span>
                        <span style={{
                          backgroundColor: '#E6F4EA',
                          color: '#137333',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontWeight: 'bold',
                          fontSize: '12px'
                        }}>
                          {group.studentCount} Students
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid #F0E2DC',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>
                    Total Enrolled: <strong style={{ color: '#721C24' }}>{totalStudents}</strong>
                  </span>
                  <button style={{
                    backgroundColor: '#F5EBE6',
                    color: '#4A0E17',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}>
                    Manage
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}