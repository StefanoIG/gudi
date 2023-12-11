import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Css/dashboard.css';

const Dashboard = () => {
    // Define el objeto de estilo en tu componente
const styleWidth = {
    width: '100vw', // Ajusta este valor al ancho deseado
  };
    const [usuariosRecientes, setUsuariosRecientes] = useState([]);
    const [estadisticas, setEstadisticas] = useState({
        estudiantes: 0,
        usuarios: 0,
        servicios: 0
    });

        const [estudiantes, setEstudiantes] = useState([]);
    
    
    useEffect(() => {
        // Cargar datos de usuarios recientes desde localStorage
        const datosUsuariosRecientes = JSON.parse(localStorage.getItem('usuariosRecientes')) || [];
        setUsuariosRecientes(datosUsuariosRecientes);

        // Cargar datos de estudiantes, servicios y usuarios para estadísticas
        const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
        const servicios = JSON.parse(localStorage.getItem('servicios')) || [];
        const usuarios = JSON.parse(localStorage.getItem('misDatos'))?.usuarios || [];
         // Recuperar los datos de estudiantes del localStorage
        const datosGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
        setEstudiantes(datosGuardados);
        setEstadisticas({
            estudiantes: estudiantes.length,
            usuarios: usuarios.length,
            servicios: servicios.length
        });
    }, []);
    return (
        <>
            <nav>
            <div className="logo-name">
                <span className="logo_name">DBU</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <Link to="/dashboard">
                            <span className="link-name">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/estudiante">
                            <span className="link-name">Estudiantes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicios">
                            <span className="link-name">Servicios</span>
                        </Link>
                    </li>
                </ul>

                <ul className="logout-mode">
                    <li>
                        <Link to="/">
                            <span className="link-name">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
       
                
                
                <section className="dashboard" style={styleWidth}>
                <div className="top">
                    <div className="search-box">
                        {/* Icono de búsqueda (puede ser un componente de React o un SVG) */}
                        <input type="text" placeholder="Search here..."/>
                    </div>
                </div>

                     <div className="dash-content">
                    {/* Overview con estadísticas */}
                        <div className="overview">
                            <div className="title">
                                <span className="text">Dashboard</span>
                            </div>
                            <div className="boxes">
                                <div className="box box1">
                                    <span className="text">Estudiantes</span>
                                    <span className="number">{estadisticas.estudiantes}</span>
                                </div>
                                <div className="box box2">
                                    <span className="text">Usuarios</span>
                                    <span className="number">{estadisticas.usuarios}</span>
                                </div>
                                <div className="box box3">
                                    <span className="text">Servicios</span>
                                    <span className="number">{estadisticas.servicios}</span>
                                </div>
                            </div>
                        </div>

                        <div className="activity">
                            <div className="title">
                                <i className="uil uil-clock-three"></i>
                                <span className="text"></span>
                            </div>
                            <div className="activity-data">
                        {/* Iterar sobre los datos de estudiantes y mostrarlos */}
                        {estudiantes.map((estudiante, index) => (
                            <React.Fragment key={index}>
                                <div className="data names">
                                    <span className="data-list">{estudiante.nombreCompleto}</span>
                                </div>
                                <div className="data email">
                                    <span className="data-list">{estudiante.email}</span>
                                </div>
                                <div className="data joined">
                                    <span className="data-list">{estudiante.telefono}</span>
                                </div>
                                <div className="data status">
                                    <span className="data-list">{estudiante.facultad}</span>
                                </div>
                                <div className="data status">
                                    <span className="data-list">{estudiante.carrera}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                              
                       
                    </div>
                </div>
            </section>

            </>
    );
};

export default Dashboard;
