import React, { useState } from 'react';
import { MDBContainer } from 'mdbreact';
import { QUOTES } from '../quotes';
import QuoteBox from './quoteBox';


const QuoteMachine = () => {

    const [quote, changeQuote] = useState(
        QUOTES[Math.floor(QUOTES.length * Math.random())]
    )

    const randomQuote = () => {

        const newQuoteIndex = Math.floor(QUOTES.length * Math.random())

        return QUOTES.indexOf(quote) === newQuoteIndex ? randomQuote() : newQuoteIndex
    }

    return (
        <MDBContainer className='d-flex align-items-center justify-content-center bg-default' >
            <QuoteBox quote={quote.quote} author={quote.author} newQuoteAction={() => changeQuote(QUOTES[randomQuote()])}/>
        </MDBContainer>
    );
}
export default QuoteMachine;