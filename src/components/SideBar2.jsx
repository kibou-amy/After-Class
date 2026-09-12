import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";

export default function SideBar2({ activeTab, setActiveTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/AdminDash',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Formation',
      path: '/FormationList',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: 'Students',
      path: '/StudentsList',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      name: 'Coaches',
      path: '/coaches',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <aside style={{
      width: '240px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      left: 0,
      background: 'linear-gradient(to bottom, #F5EBE6, #4A0E17)',
      padding: '24px 16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      overflowY: 'auto'
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ width: '180px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/40/800020/FFFFFF?text=L';
          }}
        />
      </div>

      {/* Navigation List */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {navItems.map((item) => {
          const isActive = activeTab 
            ? activeTab.toLowerCase() === item.name.toLowerCase()
            : location.pathname.toLowerCase().includes(item.name.toLowerCase());

          return (
            <button
              key={item.name}
              onClick={() => {
                if (setActiveTab) setActiveTab(item.name);
                if (item.path) navigate(item.path);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                textAlign: 'left',
                backgroundColor: isActive ? '#721C24' : 'transparent',
                color: isActive ? '#FFFFFF' : '#333333',
                boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}