import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const MenuButtom = () => {
    return (
        <Navbar bg="secondary" data-bs-theme="secondary">
            <Container>
                <Navbar.Brand href="">Menu</Navbar.Brand>
                <Nav>
                    <Nav.Link href="exercises">
                        <Button variant="light">View All Exercises</Button>
                    </Nav.Link>
                    <Nav.Link href="account">
                        <Button variant="light">Edit Account Info</Button>
                    </Nav.Link>
                    <Nav.Link href="logout">
                        <Button variant="light">Logout</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MenuButtom;
