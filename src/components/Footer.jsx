import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>BlueWave Swim</h2>
        <p>&copy; 2025 BlueWave Swim. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#facebook" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.04c5.522 0 10 4.477 10 10 0 4.83-3.43 8.847-7.879 9.815v-6.945h2.347l.498-2.554h-2.845v-1.96c0-.6.17-1.007 1.008-1.007h1.313v-2.487a17.235 17.235 0 0 0-2.257-.12c-2.228 0-3.732 1.33-3.732 3.775v2.168h-2.14v2.554h2.14v6.945C5.426 20.887 2 16.877 2 12.04c0-5.523 4.477-10 10-10z" />
            </svg>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.492 0-.175 0-.349-.012-.524A8.18 8.18 0 0 0 22 5.92c-.747.331-1.554.554-2.4.654a4.077 4.077 0 0 0 1.793-2.246 8.099 8.099 0 0 1-2.582.982 4.083 4.083 0 0 0-6.959 3.721 11.573 11.573 0 0 1-8.385-4.24 4.005 4.005 0 0 0 1.257 5.448 4.071 4.071 0 0 1-1.847-.505v.051a4.078 4.078 0 0 0 3.278 4.013 4.076 4.076 0 0 1-1.84.07 4.08 4.08 0 0 0 3.812 2.807A8.207 8.207 0 0 1 2 18.407a11.509 11.509 0 0 0 6.29 1.816" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
