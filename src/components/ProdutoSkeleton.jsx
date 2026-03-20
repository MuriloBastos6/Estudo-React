import React from 'react';

function ProdutoSkeleton(props) {
    return (
    <article>
        <h2>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
        </h2>
        <p>
            <div className="skeleton skeleton-text"></div>
        </p>
        <div className='descricao'>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
        </div>
    </article>
    );
}

export default ProdutoSkeleton;