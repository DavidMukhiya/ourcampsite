import {Row, Col, Container, Button} from 'reactstrap';
import CampsiteDetail from '../features/campsites/campsitesSlice';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsiteDirectoryPage = ()=>{
    const selectedCampsite = selectedCampsite();
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList/>
                </Col>
                <Col>
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CampsiteDirectoryPage;