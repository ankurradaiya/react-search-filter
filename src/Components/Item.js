import React from 'react'
import { Card } from 'react-bootstrap';


const Item = props => {

    const createMarkup = html => {
        return { __html: html }
    }

    return (
        <Card style={{ margin: '0.5rem 0', padding: '1px' }}>
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={createMarkup(props.id)}></Card.Title>
                <Card.Subtitle className="mb-2 text-muted" dangerouslySetInnerHTML={createMarkup(props.name)} ></Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={createMarkup(props.product)}>
                </Card.Text>
                <Card.Text dangerouslySetInnerHTML={createMarkup(props.address)}>
                </Card.Text>
                <Card.Text dangerouslySetInnerHTML={createMarkup(props.pincode)}>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item
