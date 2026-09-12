import React, { useState, useEffect } from 'react';
import SideBar2 from '../components/SideBar2';

export default function StaticCards() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [deadlines, setDeadlines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const mockData = {
          user: {
            name: "Nour",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
          },
          metrics: {
            activeProjects: 17,
            projectGrowth: "+8%",
            taskProgress: 64,
            teamPerformance: 91
          },
          chart: {
            revenue: "20 000 DA",
            velocity: "78%",
            labels: ["Jan", "Feb", "Mar", "Wed", "Thu", "Jul", "Sep"],
            points: "M0,110 Q60,40 120,90 T240,30 T360,70 T500,20",
            tooltip: "20 000 DA"
          },
          deadlines: [
            { id: 1, title: "Web Dev", date: "Sep 14, 2026", priority: "Active", color: "#15803D", bg: "#DCFCE7" },
            { id: 2, title: "UI/UX Design", date: "Sep 28, 2026", priority: "Active", color: "#15803D", bg: "#DCFCE7" },
            { id: 3, title: "Video Editing", date: "Oct 25, 2026", priority: "Pending", color: "#B45309", bg: "#FEF3C7" },
            { id: 3, title: "Video Editing", date: "Oct 25, 2026", priority: "Pending", color: "#B45309", bg: "#FEF3C7" },
            { id: 3, title: "Video Editing", date: "Oct 25, 2026", priority: "Pending", color: "#B45309", bg: "#FEF3C7" }
          ],
          activities: [
            { id: 1, user: "noor", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80", text: "TOP 1", subtext: "PSG Football Club Fan Page", date: "Sep 5, 2026" },
            { id: 2, user: "abdellah", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80", text: "TOP 2", subtext: "FC Bayern Football Club Fan Page", date: "Sep 4, 2026" }
          ],
          teamMembers: [
            { id: 1, name: "Amel ASSAL", status: "Active", statusColor: "#15803D", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80" },
            { id: 2, name: "Ilham B", status: "Active", statusColor: "#15803D", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80" }
          ]
        };

        setUserData(mockData.user);
        setMetrics(mockData.metrics);
        setChartData(mockData.chart);
        setDeadlines(mockData.deadlines);
        setActivities(mockData.activities);
        setTeamMembers(mockData.teamMembers);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: '#6B1D2F' }}>Loading dashboard data...</div>;
  if (error) return <div style={{ padding: '40px', color: '#B91C1C' }}>{error}</div>;

  return (
    <div style={styles.container}>
      <SideBar2 activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={styles.mainContent}>
        {/* Top Header */}
        <header style={styles.header}>
          <div style={styles.userInfo}>
            <img src={userData?.avatar} alt={userData?.name} style={styles.avatar} />
            <div>
              <h1 style={styles.pageTitle}>Dashboard Overview</h1>
              <span style={styles.welcomeText}>Welcome back, {userData?.name}</span>
            </div>
          </div>

          <div style={styles.headerActions}>
          </div>
        </header>

        {/* Metric Cards Row */}
        <section style={styles.metricsGrid}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>Active Formations</span>
              <span style={styles.dotMenu}>•••</span>
            </div>
            <div style={styles.metricRow}>
              <div>
                <span style={styles.metricVal}>{metrics?.activeProjects}</span>
                <span style={styles.badgeSuccess}>{metrics?.projectGrowth}</span>
              </div>
            </div>
            <div style={styles.buttonRow}>
              <button style={styles.btnSecondary}>Edit</button>
              <button style={styles.btnDanger}>Delete</button>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>Formations Progress</span>
            </div>
            <div style={styles.metricRow}>
              <span style={styles.metricVal}>{metrics?.taskProgress}%</span>
              <span style={{ fontSize: '24px' }}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="24" color='#721c24' fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
              </svg></span>
            </div>
            <div style={styles.buttonRow}>
              <button style={styles.btnSecondary}>Edit</button>
              <button style={styles.btnDanger}>Delete</button>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>Team Performance</span>
            </div>
            <div style={styles.metricRow}>
              <span style={styles.metricVal}>{metrics?.teamPerformance}%</span>
              <span style={{ fontSize: '24px' }}> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color='#721c24' fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"/>
</svg>

              </span>
            </div>
            <div style={styles.buttonRow}>
              <button style={styles.btnSecondary}>Edit</button>
              <button style={styles.btnDanger}>Delete</button>
            </div>
          </div>
        </section>

        {/* Main Content Grid: Chart & Deadlines */}
        <section style={styles.middleGrid}>
          <div style={{ ...styles.card, flex: 2 }}>
            <div style={styles.cardHeader}>
              <h3 style={styles.sectionHeader}>Overview</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                  <span style={styles.subText}>Revenue</span>
                  <div style={{ fontWeight: '600', color: '#6B1D2F' }}>{chartData?.revenue}</div>
                </div>
                <div>
                  <span style={styles.subText}>Velocity</span>
                  <div style={{ fontWeight: '600', color: '#6B1D2F' }}>{chartData?.velocity}</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', position: 'relative' }}>
              <svg viewBox="0 0 500 150" style={{ width: '100%', height: '260px' }}>
                <path d={chartData?.points} fill="none" stroke="#6B1D2F" strokeWidth="3" />
              </svg>
              <div style={styles.chartTooltip}>{chartData?.tooltip}</div>
            </div>

            <div style={styles.chartLabels}>
              {chartData?.labels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>

          <div style={{ ...styles.card, flex: 1 }}>
            <div style={styles.cardHeader}>
              <h3 style={styles.sectionHeader}>Upcoming Deadlines</h3>
              <span style={styles.dotMenu}>•••</span>
            </div>
            <ul style={styles.list}>
              {deadlines.map((item) => (
                <li key={item.id} style={styles.listItem}>
                  <div>
                    <strong style={{ color: '#2D2D2D' }}>{item.title}</strong>
                    <div style={styles.subText}>{item.date}</div>
                  </div>
                  <span style={{ ...styles.tag, background: item.bg, color: item.color }}>
                    {item.priority}
                  </span>
                </li>
              ))}
            </ul>
            <button style={styles.btnFullWidth}>View All</button>
          </div>
        </section>

        {/* Bottom Grid: Recent Activity & Team Members */}
        <section style={styles.bottomGrid}>
          <div style={{ ...styles.card, flex: 2 }}>
            <div style={styles.cardHeader}>
              <h3 style={styles.sectionHeader}>Recent Students TOP Activities</h3>
              <span style={styles.dotMenu}>•••</span>
            </div>
            <ul style={styles.list}>
              {activities.map((act) => (
                <li key={act.id} style={styles.activityItem}>
                  <div style={styles.activityUser}>
                    <img src={act.avatar} style={styles.avatarSm} alt={act.user} />
                    <div>
                      <div style={{ color: '#2D2D2D' }}>{act.text}</div>
                      <span style={styles.subText}>{act.subtext}</span>
                    </div>
                  </div>
                  <span style={styles.subText}>{act.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ ...styles.card, flex: 1 }}>
            <div style={styles.cardHeader}>
              <h3 style={styles.sectionHeader}>Most Active Teachers</h3>
              <span style={styles.dotMenu}>•••</span>
            </div>
            <ul style={styles.list}>
              {teamMembers.map((member) => (
                <li key={member.id} style={styles.teamItem}>
                  <img src={member.avatar} style={styles.avatarSm} alt={member.name} />
                  <div>
                    <div style={{ color: '#2D2D2D' }}><strong>{member.name}</strong></div>
                    <span style={{ color: member.statusColor, fontSize: '12px', fontWeight: '500' }}>
                      ● {member.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

// Custom Styling Palette matching After Class UI
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#F9F6F0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#333333',
  },
  mainContent: {
    flex: 1,
    padding: '32px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #6B1D2F',
  },
  pageTitle: {
    margin: 0,
    fontSize: '26px',
    fontWeight: '700',
    color: '#2D2D2D',
  },
  welcomeText: {
    fontSize: '14px',
    color: '#827A7A',
  },
  headerActions: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '8px 16px',
    border: '1px solid #E2DDD5',
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    marginLeft: '8px',
    fontSize: '14px',
    color: '#333',
  },
  btnPrimary: {
    background: '#6B1D2F',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '24px',
    border: '1px solid #EAE5DD',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: '16px',
    color: '#2D2D2D',
  },
  sectionHeader: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '600',
    color: '#2D2D2D',
  },
  dotMenu: {
    color: '#A09898',
    cursor: 'pointer',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  metricRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '16px 0',
  },
  metricVal: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#6B1D2F',
  },
  badgeSuccess: {
    fontSize: '12px',
    color: '#15803D',
    marginLeft: '10px',
    background: '#DCFCE7',
    padding: '4px 8px',
    borderRadius: '12px',
    fontWeight: '600',
  },
  buttonRow: {
    display: 'flex',
    gap: '12px',
    marginTop: '12px',
  },
  btnSecondary: {
    flex: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '10px',
    background: '#F5EBE6',
    color: '#6B1D2F',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
  },
  btnDanger: {
    flex: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '10px',
    background: '#FFF0ED',
    color: '#991B1B',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
  },
  middleGrid: {
    display: 'flex',
    gap: '24px',
  },
  subText: {
    fontSize: '13px',
    color: '#827A7A',
  },
  chartLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#827A7A',
    fontSize: '12px',
    marginTop: '12px',
  },
  chartTooltip: {
    position: 'absolute',
    top: '20px',
    left: '200px',
    background: '#6B1D2F',
    color: '#FFFFFF',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
  },
  bottomGrid: {
    display: 'flex',
    gap: '24px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  btnFullWidth: {
    width: '100%',
    marginTop: '20px',
    padding: '10px',
    borderRadius: '12px',
    border: 'none',
    background: '#6B1D2F',
    color: '#FFFFFF',
    fontWeight: '600',
    cursor: 'pointer',
  },
  activityItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
  },
  activityUser: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatarSm: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1.5px solid #6B1D2F',
  },
  teamItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
  },
};