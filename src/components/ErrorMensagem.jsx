import React from 'react';

function ErrorMensagem({message}) {
    return (
        <p className='error-message'> <span>!</span>{message}</p>
    );
}

export default ErrorMensagem;