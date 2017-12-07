import React from 'react';
import './MyBooks.css';
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle';

/**
 * Module Mes livres
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const myBooks = props => {
    // On récupère la liste des livres
    let books = [...props.books];
    // On récupère le 1er livre
    const firstBook = books.splice(0, 1)[0];
    // On génère les tags pour les autres livres
    const booksTags = books.map((book, index) => <img key={index} src={book.srcLink} alt={book.altText} />);
    return (
        <div className="modules myBooks">
            <ModuleTitle title="Mes livres" />
            <img className="first" alt={firstBook.altText} src={firstBook.srcLink} />
            <div className="others">
                {booksTags}
            </div>
        </div>
    );
}

export default myBooks;
