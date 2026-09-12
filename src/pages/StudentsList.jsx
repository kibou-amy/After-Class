import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SideBar2 from '../components/SideBar2';

export default function StudentsList() {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('students');
  const [loading, setLoading] = useState(true);
  
  // Data State
  const [students, setStudents] = useState([]);
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [academicFilter, setAcademicFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  // Edit Modal State
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    // Simulated API/DB Fetch
    const fetchStudentsData = async () => {
      setLoading(true);
      const mockStudents = [
        { id: 1, firstName: "Robert", lastName: "Fox", email: "robert.f@example.com", formation: "Web Development", paymentStatus: "Paid", academicStatus: "Completed", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80" },
        { id: 2, firstName: "Ronald", lastName: "Richards", email: "ronald.r@example.com", formation: "UI/UX Design", paymentStatus: "Unpaid", academicStatus: "Studying", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" },
        { id: 3, firstName: "Guy", lastName: "Hawkins", email: "guy.h@example.com", formation: "Data Science", paymentStatus: "Paid", academicStatus: "Studying", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" },
        { id: 4, firstName: "Albert", lastName: "Flores", email: "albert.f@example.com", formation: "Cybersecurity", paymentStatus: "Unpaid", academicStatus: "Completed", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80" },
        { id: 5, firstName: "Eleanor", lastName: "Pena", email: "eleanor.p@example.com", formation: "Web Development", paymentStatus: "Paid", academicStatus: "Studying", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80" },
        { id: 6, firstName: "Dianne", lastName: "Russell", email: "dianne.r@example.com", formation: "UI/UX Design", paymentStatus: "Unpaid", academicStatus: "Studying", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80" },
        { id: 7, firstName: "Jerome", lastName: "Bell", email: "jerome.b@example.com", formation: "Data Science", paymentStatus: "Paid", academicStatus: "Completed", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80" }
      ];
      setStudents(mockStudents);
      setLoading(false);
    };

    fetchStudentsData();
  }, []);

  // Filter Handlers
  const filteredStudents = students.filter(student => {
    const matchesSearch = `${student.firstName} ${student.lastName} ${student.email}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPayment = paymentFilter === 'All' || student.paymentStatus === paymentFilter;
    const matchesAcademic = academicFilter === 'All' || student.academicStatus === academicFilter;
    return matchesSearch && matchesPayment && matchesAcademic;
  });

  // Reset page to 1 on search or filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, paymentFilter, academicFilter]);

  // Pagination Calculations
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage) || 1;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Action Handlers
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setStudents(students.map(s => s.id === editingStudent.id ? editingStudent : s));
    setEditingStudent(null);
  };

  // Statistic Counters
  const totalCount = students.length;
  const paidCount = students.filter(s => s.paymentStatus === 'Paid').length;
  const unpaidCount = students.filter(s => s.paymentStatus === 'Unpaid').length;
  const studyingCount = students.filter(s => s.academicStatus === 'Studying').length;
  const completedCount = students.filter(s => s.academicStatus === 'Completed').length;

  if (loading) return <div style={{ padding: '40px', color: '#6B1D2F', textAlign: 'center' }}>Loading Students...</div>;

  return (
    <div style={styles.container}>
      <SideBar2 activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={styles.mainContent}>
        {/* Top Header */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.pageTitle}>Students Management</h1>
            <span style={styles.subText}>Students list / Overview</span>
          </div>

          <div style={styles.headerActions}>
            <div style={styles.searchBar}>
              <span style={{ opacity: 0.5 }}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#721c24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search student..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
             <button 
              type="button" 
              style={styles.btnPrimary} 
              onClick={() => navigate("/AddStudent")}>+ Add Student</button>
            </div>
        </header>

        {/* Statistic Cards Top Row */}
        <section style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.iconBadge, background: '#DCFCE7', color: '#15803D' }}>✓</div>
            <div>
              <div style={styles.statTitle}>Paid Students</div>
              <div style={styles.statValue}>{paidCount} <span style={styles.statSub}>Total</span></div>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconBadge, background: '#FEF3C7', color: '#B45309' }}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#721c24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"/>
              </svg>
            </div>
            <div>
              <div style={styles.statTitle}>Unpaid Students</div>
              <div style={styles.statValue}>{unpaidCount} <span style={styles.statSub}>Total</span></div>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconBadge, background: '#E0F2FE', color: '#0369A1' }}>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#721c24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
              </svg>
            </div>
            <div>
              <div style={styles.statTitle}>Still Studying</div>
              <div style={styles.statValue}>{studyingCount} <span style={styles.statSub}>Active</span></div>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconBadge, background: '#F3E8FF', color: '#6B21A8' }}>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#721c24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>
              </svg>
            </div>
            <div>
              <div style={styles.statTitle}>Completed</div>
              <div style={styles.statValue}>{completedCount} <span style={styles.statSub}>Graduated</span></div>
            </div>
          </div>
        </section>

        {/* Main Table Container */}
        <section style={styles.tableCard}>
          {/* Tabs / Filters */}
          <div style={styles.filterBar}>
            <div style={styles.tabGroup}>
              {['All', 'Paid', 'Unpaid'].map(status => (
                <button
                  key={status}
                  onClick={() => setPaymentFilter(status)}
                  style={paymentFilter === status ? styles.activeTabBtn : styles.tabBtn}
                >
                  {status} ({status === 'All' ? totalCount : status === 'Paid' ? paidCount : unpaidCount})
                </button>
              ))}
            </div>

            <div style={styles.tabGroup}>
              {['All', 'Studying', 'Completed'].map(status => (
                <button
                  key={status}
                  onClick={() => setAcademicFilter(status)}
                  style={academicFilter === status ? styles.activeSubTabBtn : styles.tabBtn}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>Student</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Formation Signed In</th>
                <th style={styles.th}>Payment Status</th>
                <th style={styles.th}>Academic Status</th>
                <th style={styles.thRight}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.length > 0 ? (
                currentStudents.map(student => (
                  <tr key={student.id} style={styles.tr}>
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        <img src={student.avatar} alt={student.firstName} style={styles.avatar} />
                        <div>
                          <strong>{student.firstName} {student.lastName}</strong>
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>{student.email}</td>
                    <td style={styles.td}><strong>{student.formation}</strong></td>
                    <td style={styles.td}>
                      <span style={student.paymentStatus === 'Paid' ? styles.tagPaid : styles.tagUnpaid}>
                        {student.paymentStatus.toUpperCase()}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={student.academicStatus === 'Completed' ? styles.tagCompleted : styles.tagStudying}>
                        {student.academicStatus}
                      </span>
                    </td>
                    <td style={styles.tdRight}>
                      <div style={styles.actionGroup}>
                        <button onClick={() => setEditingStudent(student)} style={styles.btnEdit}>Edit</button>
                        <button onClick={() => handleDelete(student.id)} style={styles.btnDelete}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '32px', color: '#827A7A' }}>
                    No students found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Footer Pagination */}
          <div style={styles.pagination}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              style={{
                ...styles.pageBtn,
                opacity: currentPage === 1 ? 0.5 : 1,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              ← Previous
            </button>

            <div style={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <span
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  style={currentPage === num ? styles.activePageNum : styles.pageNum}
                >
                  {num}
                </span>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              style={{
                ...styles.pageBtn,
                opacity: currentPage === totalPages ? 0.5 : 1,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next →
            </button>
          </div>
        </section>

        {/* Edit Modal */}
        {editingStudent && (
          <div style={styles.modalOverlay}>
            <form style={styles.modal} onSubmit={handleSaveEdit}>
              <h3>Edit Student Information</h3>
              <label style={styles.label}>First Name:</label>
              <input style={styles.modalInput} value={editingStudent.firstName} onChange={e => setEditingStudent({...editingStudent, firstName: e.target.value})} />
              
              <label style={styles.label}>Last Name:</label>
              <input style={styles.modalInput} value={editingStudent.lastName} onChange={e => setEditingStudent({...editingStudent, lastName: e.target.value})} />
              
              <label style={styles.label}>Payment Status:</label>
              <select style={styles.modalInput} value={editingStudent.paymentStatus} onChange={e => setEditingStudent({...editingStudent, paymentStatus: e.target.value})}>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>

              <label style={styles.label}>Academic Status:</label>
              <select style={styles.modalInput} value={editingStudent.academicStatus} onChange={e => setEditingStudent({...editingStudent, academicStatus: e.target.value})}>
                <option value="Studying">Studying</option>
                <option value="Completed">Completed</option>
              </select>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button type="submit" style={styles.btnPrimary}>Save Changes</button>
                <button type="button" onClick={() => setEditingStudent(null)} style={styles.btnSecondary}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

// Styling matching Burgundy / Cream Theme
const styles = {
  container: { display: 'flex', minHeight: '100vh', backgroundColor: '#F9F6F0', fontFamily: 'system-ui, sans-serif', color: '#2D2D2D' },
  mainContent: { flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: '24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  pageTitle: { margin: 0, fontSize: '26px', fontWeight: '700' },
  subText: { fontSize: '13px', color: '#827A7A' },
  headerActions: { display: 'flex', gap: '12px' },
  searchBar: { display: 'flex', alignItems: 'center', background: '#FFFFFF', borderRadius: '12px', padding: '8px 16px', border: '1px solid #E2DDD5' },
  searchInput: { border: 'none', background: 'transparent', outline: 'none', marginLeft: '8px', fontSize: '14px' },
  btnPrimary: { background: '#6B1D2F', color: '#FFFFFF', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' },
  btnSecondary: { background: '#F5EBE6', color: '#6B1D2F', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' },
  statCard: { background: '#FFFFFF', borderRadius: '16px', padding: '20px', border: '1px solid #EAE5DD', display: 'flex', alignItems: 'center', gap: '16px' },
  iconBadge: { width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' },
  statTitle: { fontSize: '13px', color: '#827A7A' },
  statValue: { fontSize: '20px', fontWeight: 'bold', marginTop: '2px', color: '#2D2D2D' },
  statSub: { fontSize: '12px', color: '#A09898', fontWeight: 'normal' },
  tableCard: { background: '#FFFFFF', borderRadius: '20px', padding: '24px', border: '1px solid #EAE5DD' },
  filterBar: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE5DD', paddingBottom: '16px', marginBottom: '20px' },
  tabGroup: { display: 'flex', gap: '8px' },
  tabBtn: { background: 'transparent', border: 'none', padding: '8px 16px', borderRadius: '10px', cursor: 'pointer', color: '#827A7A', fontWeight: '500' },
  activeTabBtn: { background: '#F5EBE6', color: '#6B1D2F', border: 'none', padding: '8px 16px', borderRadius: '10px', cursor: 'pointer', fontWeight: '600' },
  activeSubTabBtn: { background: '#6B1D2F', color: '#FFFFFF', border: 'none', padding: '8px 16px', borderRadius: '10px', cursor: 'pointer', fontWeight: '600' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeaderRow: { textAlign: 'left', borderBottom: '1px solid #EAE5DD', color: '#827A7A', fontSize: '13px' },
  th: { padding: '12px 16px' },
  thRight: { padding: '12px 16px', textAlign: 'right' },
  tr: { borderBottom: '1px solid #F5EBE6' },
  td: { padding: '16px', fontSize: '14px' },
  tdRight: { padding: '16px', textAlign: 'right' },
  userCell: { display: 'flex', alignItems: 'center', gap: '12px' },
  avatar: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' },
  tagPaid: { background: '#DCFCE7', color: '#15803D', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  tagUnpaid: { background: '#FEF3C7', color: '#B45309', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  tagCompleted: { background: '#F3E8FF', color: '#6B21A8', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  tagStudying: { background: '#E0F2FE', color: '#0369A1', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  
  // Aligned Action Button Styles
  actionGroup: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: '8px' 
  },
  btnEdit: { 
    background: '#F5EBE6', 
    color: '#6B1D2F', 
    border: 'none', 
    width: '64px',
    height: '32px',
    borderRadius: '8px', 
    cursor: 'pointer', 
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px'
  },
  btnDelete: { 
    background: '#FFF0ED', 
    color: '#991B1B', 
    border: 'none', 
    width: '64px',
    height: '32px',
    borderRadius: '8px', 
    cursor: 'pointer', 
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px'
  },
  
  pagination: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' },
  pageBtn: { border: '1px solid #E2DDD5', background: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', color: '#2D2D2D', fontWeight: '500' },
  pageNumbers: { display: 'flex', gap: '12px', color: '#827A7A', alignItems: 'center' },
  pageNum: { cursor: 'pointer', padding: '4px 8px' },
  activePageNum: { fontWeight: 'bold', color: '#6B1D2F', background: '#F5EBE6', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modal: { background: '#FFFFFF', padding: '24px', borderRadius: '16px', width: '350px', display: 'flex', flexDirection: 'column', gap: '10px' },
  modalInput: { padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2DDD5', outline: 'none' },
  label: { fontSize: '12px', fontWeight: '600', color: '#827A7A' }
};

