import Card from 'react-bootstrap/Card'



export default function PostalDetails(props: { postalData: any; }) {
    const { postalData } = props;
    if (!postalData) {
      return null;
    }
    return (
    <div>
        <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-2">
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Country</Card.Header>
                        <Card.Body>
                        <Card.Title>{postalData.country}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-2">
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Region</Card.Header>
                        <Card.Body>
                        <Card.Title>{postalData.region}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-2">
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Area</Card.Header>
                        <Card.Body>
                        <Card.Title>{postalData.area}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-2">
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Admin District</Card.Header>
                        <Card.Body>
                        <Card.Title>{postalData.codes.admin_district}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-2">
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Parliamentary Constituency</Card.Header>
                        <Card.Body>
                        <Card.Title>{postalData.codes.parliamentary_constituency}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-1">
                </div>
        </div>
    </div>
    
    )
  }