import styled from 'styled-components';

export const SpinnerDiv = styled.div`
  display: inline-block;
  margin-left: 50%;
  margin-top: 20px;
`;
export const StyledSpinner = styled.div`
  height: 600px;
  .container {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .circle {
    position: absolute;
    border-radius: 50%;
    animation: spin 3s linear infinite;
    display: flex;
  }

  .circle-red {
    border: 20px solid rgba(252, 33, 33, 0.2);
    border-right: 20px solid rgb(252, 33, 33);
    animation-delay: 0.5s;
    width: 150px;
    height: 150px;
  }

  .circle-green {
    border: 20px solid rgba(198, 200, 99, 0.2);
    border-right: 20px solid rgb(198, 200, 99);
    animation-delay: 1s;
    width: 100px;
    height: 100px;
  }

  .circle-blue {
    border: 20px solid rgba(18, 198, 255, 0.2);
    border-right: 20px solid rgb(18, 198, 255);
    width: 200px;
    height: 200px;
  }

  @keyframes spin {
    100% {
      transform: rotate3D(1, 0.5, 0.75, 720deg) rotateZ(720deg);
    }
  }
`;
