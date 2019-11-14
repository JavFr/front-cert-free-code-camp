import React from 'react'

const RenderQuote = (props) => {
    return(
        <div className='text-center'>
            <p id='text'>{props.quote}</p>
            <p id='author'>{props.author}</p>
        </div>
    );
}

export default RenderQuote;