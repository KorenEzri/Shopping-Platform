import React from 'react';
import { StyledWrapper } from './StyledHeader';
import { getItemsByQuery } from '../../network';
import { useHistory } from 'react-router-dom';

export function Header({ setters }) {
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    const { search } = e.target;
    localStorage.setItem('last_search', search.value);
    setters.setShowSpinner(true);
    const res = await getItemsByQuery(search.value);
    if (!res.descriptions && !res.scraperRes.descriptions[1]) {
      const retry = await getItemsByQuery(search.value + 'stuff');
      if (retry !== 'ERROR') {
        setters.setShowSpinner(false);
        setters.setSearchItems(res);
        return;
      }
    }
    if (res !== 'ERROR') {
      setters.setShowSpinner(false);
      setters.setSearchItems(res);
      return;
    } else {
      setters.setShowSpinner(false);
      setters.setError(
        'Apologies! Our servers are experiencing technical issues.',
      );
      return;
    }
  };
  return (
    <StyledWrapper>
      <header id="container">
        <div id="nav-bar">
          <div id="nav-belt">
            <div className="nav-left">
              <div id="nav-logo">
                <a href="/">KoBay</a>
              </div>
            </div>
            <div className="nav-fill">
              <div id="nav-search">
                <form id="nav-search-bar-form" onSubmit={handleSubmit}>
                  <div className="nav-left">
                    <a href="/">ALL</a>
                  </div>
                  <div className="nav-fill">
                    <input type="text" name="search" />
                  </div>
                  <div className="nav-right">
                    <button type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="nav-right">
              <div id="nav-tools">
                <a href="/">Language</a>
                <a href="/">Log in</a>
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    history.push('/cart')
                  }}
                >
                  Cart
                </a>
                )
              </div>
            </div>
          </div>
          <div id="nav-main">
            {/* <ul>
			<li><a href="/">xxx</a></li>
			<li><a href="#">Two</a>
				<ul className="dropdown">
					<li><a href="#">Sub-1</a></li>
					<li><a href="#">Sub-2</a></li>
					<li><a href="#">Sub-3</a></li>
				</ul>
			</li>
		</ul> */}
          </div>
        </div>
      </header>
    </StyledWrapper>
  );
}
