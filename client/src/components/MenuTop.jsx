import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MenuTop = ({first_name, last_name, username}) => {
    return (
        <div>
            <Container fluid>
                <Row className="pb-2 justify-content-between">
                    <Col xs={8}>
                        <span className="p-2 bg-secondary h4">
                            Welcome, {first_name} {last_name}!
                        </span>
                    </Col>
                    <Col xs={2} className="p-2 bg-secondary text-center">{username}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default MenuTop;
