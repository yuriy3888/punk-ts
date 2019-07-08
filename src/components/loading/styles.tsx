import styled from "styled-components";
import {cssHeader} from "../../common/css-variables";

export const LoadableWrapper = styled.div`
    display: grid;
    place-items: center center;
    place-content: center center;
    width: 1fr;
    height: calc(100vh - ${cssHeader.height});

.lds-hourglass {
  position: relative;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #b2b0b0;
    border-color: #b2b0b0 transparent #b2b0b0 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
}

@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
  }
}
`
