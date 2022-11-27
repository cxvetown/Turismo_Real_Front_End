import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import '../navbar/navbar.css'
import { useContext } from "react";
import clienteContext from "../../Contexts/ClienteContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//creamos la funcion que se cargara
export const Navigation = () => {

  //variable para guardar el tiempo de carga
  let timerInterval

  //variable que trae el Swal Alert
  const MySwal = withReactContent(Swal);

  //pregunta si desea cerrar sesion
  const handleSwal = () => {
    MySwal.fire({
      title: "¿Desea cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        MySwal.fire({
          title: "Cerrando Sesion...",
          timer: "3000",
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
        //llamamos al logout del usecontext que se encarga de cerrar la sesion 
        logout()
      }
    })
  }
  //ocupamos el useContext para obtener la sesion activa
  const { usuario, logout } = useContext(clienteContext);
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
    >
      <Container>
        <b><NavbarBrand style={{color: "#EEEEEE"}} href="/Inicio"> Turismo Real</NavbarBrand></b>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>

            {usuario
              ? <b><NavDropdown
                title={usuario}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item  href="/ListaReserva">Reservas</NavDropdown.Item>
                <NavDropdown.Item onClick={handleSwal}>Cerrar Sesion</NavDropdown.Item>
              </NavDropdown></b>

              : <NavLink className="nav-link" to="/Login">
                Iniciar sesión
              </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};