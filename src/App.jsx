import { useState } from 'react'

import './App.css'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaCode,
  FaRobot,
  FaBicycle,
  FaWhatsapp,
  FaEnvelope,
  FaHome,
  FaBirthdayCake,
  FaIdCard,

} from 'react-icons/fa'

import { BiLogoPostgresql, BiLogoMongodb, BiLogoCPlusPlus } from "react-icons/bi";

function App() {

  /* 
  Haremos un CV (curriculum vitae) personal para practicar React
  Será sobre mi, y tendrá 3 secciones:
  - Datos personales
  - Formación
  - Experiencia laboral
  */

  // Datos personales serán un objeto con los siguientes campos:
  // - Nombre
  // - Apellidos
  // - Fecha de nacimiento
  // - Dirección
  // - Teléfono
  // - Email
  // - Linkedin (opcional)
  // - Github (opcional)
  // - Foto
  // - Descripción
  // - Hobbies
  // - Idiomas

  // Formación será un array de objetos con los siguientes campos:
  // - Título
  // - Centro
  // - Fecha de inicio
  // - Fecha de fin
  // - Descripción

  // Experiencia laboral será un array de objetos con los siguientes campos:
  // - Empresa
  // - Puesto
  // - Fecha de inicio
  // - Fecha de fin
  // - Descripción

  // Tendremos un estado para cada sección
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: 'Moisés Nicolás',
    apellidos: 'Leiva Parada',
    fechaNacimiento: '26/04/2002',
    rut: '20791629',
    titulo: 'Ingeniero en Informática',
    direccion: 'Santiago, Chile',
    telefono: '+56968688996',
    email: 'mleiva@utem.cl',
    linkedin: '',
    github: 'moisesnks',
    instagram: 'moisesnks',
    foto: 'perfil.png',
    descripcion: 'Soy Moisés Nicolás Leiva Parada, un estudiante de Ingeniería en Informática con una actitud proactiva y un compromiso con el aprendizaje constante. Mi experiencia en desarrollo web y gestión de proyectos me ha brindado habilidades en la resolución de problemas, el trabajo en equipo y la atención a los detalles. Disfruto asumir nuevos desafíos y estoy motivado para contribuir al éxito en cualquier entorno de trabajo. Soy una persona orientada a la calidad y siempre busco mejorar en lo que hago. Además, mi pasión por la tecnología y la programación se combina con una fuerte ética laboral.',
    hobbies: [
      { nombre: 'Desarrollo Web', icono: <FaCode /> },
      { nombre: 'Robótica', icono: <FaRobot /> },
      { nombre: 'Ciclismo', icono: <FaBicycle /> },
    ],
    idiomas: [
      { nombre: 'Español', nivel: 'Nativo', porcentaje: 100 },
      { nombre: 'Inglés', nivel: 'Intermedio', porcentaje: 80 },
    ],
    skills: [
      {
        nombre: 'HTML',
        logo: <FaHtml5 />,
        porcentaje: 90,
      },
      {
        nombre: 'CSS',
        logo: <FaCss3Alt />,
        porcentaje: 80,
      },
      {
        nombre: 'JavaScript',
        logo: <FaJsSquare />,
        porcentaje: 80,
      },
      {
        nombre: 'React',
        logo: <FaReact />,
        porcentaje: 80,
      },
      {
        nombre: 'NodeJS',
        logo: <FaNodeJs />,
        porcentaje: 70,
      },
      {
        nombre: 'MongoDB',
        logo: <BiLogoMongodb />,
        porcentaje: 70,
      },
      {
        nombre: 'PostgreSQL',
        logo: <BiLogoPostgresql />,
        porcentaje: 70,
      },
      {
        nombre: 'Git',
        logo: <FaGitAlt />,
        porcentaje: 70,
      },
      {
        nombre: 'Python',
        logo: <FaPython />,
        porcentaje: 70,
      },
      {
        nombre: 'C++',
        logo: <BiLogoCPlusPlus />,
        porcentaje: 70,
      },
      {
        nombre: 'Java',
        logo: <FaJava />,
        porcentaje: 50,
      },
    ],
  })
  const [formacion, setFormacion] = useState([
    {
      titulo: 'Ingeniería en Informática',
      centro: 'Universidad Tecnológica Metropolitana',
      fechaInicio: '2019',
      fechaFin: '2024',
      descripcion: 'Estudiando actualmente',
    },
    {
      titulo: 'Licencia de Enseñanza Media',
      centro: 'Liceo Bicentenario Italia',
      fechaInicio: '2016',
      fechaFin: '2019',
      descripcion: 'Electivo de especialidad en Matemáticas y Física',
    },
  ])
  const [experienciaLaboral, setExperienciaLaboral] = useState([
    {
      id: 1,
      empresa: 'Lumonidy DEV',
      puesto: 'Líder de Proyecto',
      fechaInicio: '2023',
      fechaFin: '2023',
      descripcion: 'Dirijo un equipo dedicado al desarrollo de soluciones digitales como sitios web, aplicaciones móviles y videojuegos. Responsable de la planificación y ejecución de proyectos, me aseguro de cumplir con los plazos y estándares de calidad. En el área técnica, desarrollo utilizando React, NodeJS, ExpressJS, MongoDB y PostgreSQL, con un enfoque en la experiencia del usuario y la calidad del código.'
    },
    {
      id: 2,
      empresa: 'Lumonidy DEV',
      subempresa: 'UTEM',
      puesto: 'Desarrollador Web y Líder de Proyecto',
      fechaInicio: '2023',
      fechaFin: '2023',
      descripcion: 'Para Actiarte, una empresa de estampados, desarrollé y lancé un sitio web en WordPress. Fui responsable de implementar características esenciales como el carrito de compras, el catálogo de productos y los formularios de contacto. Además, gestioné la configuración del hosting y la seguridad del sitio, garantizando una operación confiable y un rendimiento óptimo.'
    },
    {
      id: 3,
      empresa: 'MaxiK',
      puesto: 'Vendedor',
      fechaInicio: '2022',
      fechaFin: '2022',
      descripcion: 'Desempeñé el rol de vendedor en un concurrido kiosco ubicado en el Mall Plaza Vespucio, donde manejaba la venta de productos y brindaba atención directa a los clientes, asegurando una experiencia de compra positiva y eficiente.'
    },
    {
      id: 4,
      empresa: 'El sueño de Moisés',
      puesto: 'Vendedor, Bodeguero y Administrador',
      fechaInicio: '2019',
      fechaFin: '2022',
      descripcion: 'Fundé y administré mi emprendimiento, manejando diversas funciones como la venta directa, la gestión de inventario y la administración de redes sociales. Mi enfoque estaba en mantener un flujo de caja saludable y asegurar la disponibilidad de stock para satisfacer la demanda constante de los clientes.'
    }
  ])

  const contacto1 = [
    {
      label: 'GitHub',
      value: datosPersonales.github ? `github.com/${datosPersonales.github}` : null,
      icono: <FaGithub />,
      url: `https://github.com/${datosPersonales.github}`,
    },
    {
      label: 'LinkedIn',
      value: datosPersonales.linkedin ? `linkedin.com/in/${datosPersonales.linkedin}` : null,
      icono: <FaLinkedin />,
      url: `https://linkedin.com/in/${datosPersonales.linkedin}`,
    },
    {
      label: 'Instagram',
      value: datosPersonales.instagram ? `instagram.com/${datosPersonales.instagram}` : null,
      icono: <FaInstagram />,
      url: `https://instagram.com/${datosPersonales.instagram}`,
    },
  ].filter(contacto => contacto.value !== null);


  const contacto2 = [
    {
      label: 'Whatsapp',
      value: datosPersonales.telefono,
      icono: <FaWhatsapp />,
      ref: `https://wa.me/${datosPersonales.telefono}`
    },
    {
      label: 'Email',
      value: datosPersonales.email,
      icono: <FaEnvelope />,
      ref: `mailto:${datosPersonales.email}`
    },
  ].filter(contacto => contacto.value !== null);

  const contacto0 = [
    {
      label: 'Dirección',
      value: datosPersonales.direccion,
      icono: <FaHome />,
    },
    {
      label: 'Fecha de nacimiento',
      value: datosPersonales.fechaNacimiento,
      icono: <FaBirthdayCake />,
    },
    {
      label: 'RUT',
      value: datosPersonales.rut,
      icono: <FaIdCard />,
    }
  ]



  return (
    <div id="page-container">
      <div className="page shadow">
        <header
          className='header'
        >
          <div className="
        d-flex 
        align-items-center
        justify-content-around
        nombrefoto
        "
          >
            <img
              src={datosPersonales.foto}
              alt="Foto de perfil"
              className="img-fluid foto m-4 rounded-circle shadow-lg"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
            <div className="d-flex flex-box">
              <div className="
          d-flex 
          flex-column
          mx-4 
          fs-2
          text-end
          nombretitulo
          border-end
          ">
                <div className="me-4">
                  <div className="nombre fw-lighter d-flex flex-column flex-wrap">
                    <p>{datosPersonales.nombre.toUpperCase()}</p>
                    <p className='fw-bold'>{datosPersonales.apellidos.toUpperCase()}</p>
                  </div>
                  <p className='fs-6'>{datosPersonales.titulo.toUpperCase()}</p>
                </div>

              </div>
              <div className="contacto0 my-auto">
                {contacto0.map((contacto) => (
                  <div key={contacto.label} className="contacto d-flex align-items-center gap-2 my-1">
                    <div className="my-auto">{contacto.icono}</div>
                    <p className="my-auto">{contacto.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="contactos d-flex justify-content-around">
            {contacto1.map((contacto) => (
              <a
                key={contacto.label}
                href={contacto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-redireccionable mx-4"
              >
                <div className="enlace d-flex align-items-center gap-2">
                  <div className="my-auto">{contacto.icono}</div>
                  <p className="my-auto">{contacto.value}</p>
                </div>
              </a>
            ))}
          </div>

        </header >
        <main>
          <div className="border-top">
            {/* Seccion 1 será para la descripción y lenguajes como dividido en 2 columnas */}
            <div className="descripcion d-flex flex-rows">
              <blockquote className="blockquote-cita w-75 my-2">
                {datosPersonales.descripcion}
              </blockquote>
              <div className="vr"></div>
              <div className="lenguajes w-25 px-2 my-2">
                <h3 className="fw-bold">LENGUAJES</h3>
                {datosPersonales.idiomas.map((idioma) => (
                  <div key={idioma.nombre} className="idioma">
                    <label>{`${idioma.nombre} (${idioma.nivel})`}</label>
                    <div className="barra-container">
                      <div
                        className="barra"
                        style={{ width: `${idioma.porcentaje}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-top">
            <div className="d-flex seccion2">
              <div className="educacion">
                <div className="px-2 my-2">
                  <h3 className="fw-bold">EDUCACIÓN</h3>
                  {formacion.map((formacion) => (
                    <div key={formacion.titulo} className="formacion">
                      <ul>
                        <li className='fw-bold'>{formacion.titulo}</li>
                        <li className='list-group'>{formacion.centro}</li>
                        <li className='list-group'>{`${formacion.fechaInicio} - ${formacion.fechaFin}`}</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-bottom"></div>
                <div className="habilidades px-2 my-2">
                  <h3 className='fw-bold'>MIS HABILIDADES</h3>
                  {datosPersonales.skills.map((skill) => (
                    <div key={skill.nombre} className="habilidad">
                      <div className="skill d-flex justify-content-between align-items-center gap-2 my-1">
                        <div className="d-flex gap-1">
                          <span className='d-flex my-auto'>{skill.logo}</span>
                          <span className='fw-bold'>{skill.nombre}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 barrita">
                          <div className="barra-container">
                            <div
                              className="barra"
                              style={{ width: `${skill.porcentaje}%`, backgroundColor: '#238F51' }}
                            ></div>
                          </div>
                          <span className="porcentaje">{skill.porcentaje}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              <div className="border-start"></div>
              <div className="experiencia">
                <div className="px-2 my-2">
                  <h3 className='fw-bold'>EXPERIENCIA LABORAL</h3>
                  <ul className="experiencia-lista">
                    {experienciaLaboral.map((experiencia) => (
                      <li key={experiencia.id} className="experiencia-item">
                        <div className="d-flex gap-1 justify-content-between">
                          <span className='fw-bold'>{experiencia.puesto}</span>
                          <span>{`${experiencia.fechaInicio} - ${experiencia.fechaFin}`}</span>
                        </div>
                        <div className='subtitulo'>{experiencia.empresa}</div>
                        <div>{experiencia.descripcion}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-bottom"></div>
                <div className="hobbies px-2 my-2">
                  <h3 className='fw-bold'>HOBBIES</h3>
                  <div className="hobbies-lista d-flex flex-wrap justify-content-center">
                    {datosPersonales.hobbies.map((hobbie) => (
                      <div key={hobbie.nombre} className="hobbie text-center m-2 ">
                        <div className="hobbie-icono d-flex mx-auto shadow">
                          {hobbie.icono}
                        </div>
                        <span className='fw-bold d-block mt-1'>{hobbie.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main >
        <footer
          className='footer'
        >
          <div className="contactos2 d-flex justify-content-around">
            {contacto2.map((contacto) => (
              <a
                key={contacto.label}
                href={contacto.ref}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-redireccionable blanco mx-4"
              >
                <div className="enlace d-flex align-items-center gap-2">
                  <div className="my-auto">{contacto.icono}</div>
                  <p className="my-auto">{contacto.value}</p>
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div >
  );
}

export default App
