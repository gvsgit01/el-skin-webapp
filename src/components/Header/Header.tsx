import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
 
function Header() {
    const[textoBusca, setTextoBusca] = useState('valor incicial do texto')

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  function onClickSearch(event: React.MouseEvent<SVGSVGElement, MouseEvent>): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <span>AL SKIN</span>
          </div>
 
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"
            onChange={handleOnChange}/>
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} onClick={onClickSearch}/>
            </button>
          </div>
 
          <div className="header-actions">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
 
      <nav className="header-nav">
        <h6>{textoBusca}</h6>
      </nav>
     </header>
  );
}
 
export default Header;