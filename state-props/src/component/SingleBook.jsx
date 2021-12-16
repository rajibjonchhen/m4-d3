
import{Component} from "react"
import{Card, Button, Container, Row, Col} from "react-bootstrap"


class SingleBook extends Component{
    state={
        toggleSelect:false
    }

    toggleClass=(e)=>(
        this.toggleSelect? this.setState({toggleSelect:true}):this.setState({toggleSelect:true})
    )
    render(){
        return(
            (
               <Container>
                   <Row className="d-flex justify-content-center">
                       <Col >
                       <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img onClick={this.toggleClass} variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {this.props.book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary">{this.props.book.price} </Button>
                </Card.Body>
            </Card>
                       </Col>
                   </Row>
               </Container>
            ))
        
    }
}

export default SingleBook