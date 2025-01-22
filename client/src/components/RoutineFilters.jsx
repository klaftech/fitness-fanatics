import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ActionButton from './ActionButton.jsx';

const RoutineFilters = ({handleSortSelected, handleFilterSelected}) => {    
    return (
        <Container fluid>
            <Row className="pb-2 justify-content-between">
                <Col xs={4}>
                    My Exercise Routine:
                </Col>
                
                <Col xs={1}></Col>

                <Col xs={1}> 
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Filter By Day
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>handleFilterSelected("all")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(1)}>Monday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(2)}>Tuesday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(3)}>Wednesday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(4)}>Thursday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(5)}>Friday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(6)}>Saturday</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterSelected(7)}>Sunday</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                
                <Col xs={2}></Col>

                <Col xs={1}>Sort By:</Col>
                <Col xs={1}>
                    <ActionButton variant="secondary" title="Priority" onClick={() => handleSortSelected('priority')} />
                </Col>
                <Col xs={2}>
                    <ActionButton variant="secondary" title="Exercise Name" onClick={() => handleSortSelected('name','exercise')} />
                </Col>
            </Row>
        </Container>
    );
}

export default RoutineFilters;
