import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/home.css';
import fondo from './imagenes/fondo.jpg'
import servicioc from './imagenes/servicio.png'
const Home = () => {
    const [servicios, setServicios] = useState([]);
    const heroStyle = {
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        width: '100vw',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // This will give you a black overlay
        backgroundBlendMode: 'darken', // This will blend the image with the background color
      };
      
    useEffect(() => {
        // Obtener servicios del localStorage y establecerlos en el estado
        const serviciosAlmacenados = JSON.parse(localStorage.getItem('servicios')) || [];
        setServicios(serviciosAlmacenados);
    }, []);

    return (
        <main >
            {/* Sección del héroe */}
            <section class="hero" style={heroStyle} >
   
                    <h1 className="hero-title">DEPARTAMENTO DE BIENESTAR UNIVERSITARIO</h1>
                    <Link to="/login" className="btn-tratamientos">Ingreso</Link>
            </section>
            <div className="bienvenida">
                <p className="bienvenida-texto">
                    Bienvenidos a la dirección de bienestar, admisión y nivelación universitaria:
                    Comunidad Universitaria, la Dirección de Bienestar universitario tiene como finalidad brindar una serie de servicios orientados a mejorar la estadia de quienes formamos la ULEAM mediante la participación profesional, activa, ética y responsable de cada uno de los funcionarios que laboran en esta dependencia, convirtiéndose así en un apoyo disponible en beneficio de su salud, de su estado psicosocial y en la entrega de espacios de su formación cultural.
                </p>
            </div>
            {/* Sección de servicios */}
            <section id="servicios" class="services-section">
            <h2 className="services-title">Nuestros Servicios</h2>

                <div className="">
                    <div className="services-grid">
                        {servicios.map((servicio, index) => (
                            <div className="service-card" key={index}>
                                <img src={servicioc} alt={servicio.nombre} className="service-img" />
                                <h3 className="service-name">{servicio.nombre}</h3>
                                <p className="service-description">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
