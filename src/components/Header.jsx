export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#hero" style={styles.navLink}>Home</a></li>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#projects" style={styles.navLink}>Projects</a></li>
          <li><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#f8f8f8',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500'
  }
};
