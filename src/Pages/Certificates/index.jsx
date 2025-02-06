const Certificates = () => {
    return (
        <section className="certificates-section" id="certificates">
          <h2 className="certificates-title">Certificados</h2>
          <div className="certificates-grid">
            <div className="certificates-card">
              <img src="../../public/images/certificado1.png" alt="Certificado 1" />
              <div className="certificate-info">
                <h3>Desarrollo Web Full Stack</h3>
                <p>Platzi - 2023</p>
              </div>
            </div>
            <div className="certificates-card">
              <img src="../../public/images/certificado2.png" alt="Certificado 2" />
              <div className="certificate-info">
                <h3>React.js Avanzado</h3>
                <p>Udemy - 2023</p>
              </div>
            </div>
            <div className="certificates-card">
              <img src="../../public/images/certificado3.png" alt="Certificado 3" />
              <div className="certificate-info">
                <h3>Laravel Master</h3>
                <p>Coursera - 2022</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Certificates;
