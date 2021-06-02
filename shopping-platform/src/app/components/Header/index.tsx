import React from 'react';
import { StyledWrapper } from './StyledHeader';

export function Header() {
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
                <form id="nav-search-bar-form">
                  <div className="nav-left">
                    <a href="/">ALL</a>
                  </div>
                  <div className="nav-fill">
                    <input type="text" />
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
                <a href="/">Cart</a>
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
