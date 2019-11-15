import React from 'react'
import { MDBContainer, MDBBtn, MDBIcon, MDBCard, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdbreact'
import RenderQuote from './renderQuote';

const QuoteBox = (props) => {

    const twitterQuote = '%22'
            .concat(props.quote)
            .concat('.%22 ')
            .concat(props.author)
            .replace(/\s/g, '%20');

    return(
        <MDBCard id='quote-box'>
            <MDBCardBody>
            <MDBCardText>
                <RenderQuote quote={props.quote} author={props.author}/>
            </MDBCardText>
            </MDBCardBody>
            <MDBRow className="text-center justify-items-center">
                <MDBCol>
                    <MDBBtn id='new-quote' color="pink" onClick={props.newQuoteAction}>
                        New Quote
                    </MDBBtn>
                </MDBCol>
                <MDBCol>    
                    <MDBBtn floating tag='a' id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + twitterQuote}>
                        <MDBIcon size='2x' fab icon="twitter" />
                    </MDBBtn>
                </MDBCol>  
            </MDBRow>
      </MDBCard>
    )
}

export default QuoteBox