import React from 'react';
import { SpinnerDiv } from './SpinnerComponent/StyledSpinner';
import { SpinnerComponent } from './SpinnerComponent';
import { StyledError, PositionedSpinnerDiv } from './StyledSpinner';
export function Spinner({ children, VisualComponent, show, error }) {
  if (show) {
    return (
      <PositionedSpinnerDiv>
        <SpinnerDiv className="container">
          {VisualComponent ? <VisualComponent /> : <SpinnerComponent />}
        </SpinnerDiv>
      </PositionedSpinnerDiv>
    );
  } else if (error) {
    console.log(error);
    return (
      <StyledError>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Error: Internal server error. Please try again later.</p>
        )}
      </StyledError>
    );
  } else {
    return children;
  }
}
