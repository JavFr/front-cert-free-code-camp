import React from 'react'
import { MDBIcon, MDBRow, MDBCol } from 'mdbreact'

const RenderQuote = (props) => {
    return(
        <MDBRow className=''>
            <MDBCol size='1'>
                <MDBIcon icon="quote-left" size='3x'/>
            </MDBCol>
            <MDBCol size='12' md='10'>
            <p className="h2 my-3 text-center px-2" id='text'>{props.quote}</p>
            </MDBCol>
            <MDBCol size='12' md='1' className='d-flex justify-content-end'>
                <MDBIcon icon="quote-right" size='3x' />
            </MDBCol>
            <MDBCol size='12' className='d-flex justify-content-end mt-3'>
                <p className="h4 mr-2" id='author'>{props.author}</p>
            </MDBCol>
        </MDBRow>
    );
}

export default RenderQuote;