
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
                <CardText>My Name Khan</CardText>
            </CardImgOverlay>
        </Card>
    );
}

export default CampsiteCard;