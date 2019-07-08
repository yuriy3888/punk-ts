import styled from "styled-components";
import {cssGrid, cssHeader} from "../../common/css-variables";
import {mixinBoxShadow, mixinTransition} from "../../common/css.mixin";

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: ${cssGrid.templateColumns};
  justify-items: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: ${cssHeader.height};
  background-color: ${cssHeader.backgroundColor};
  ${mixinTransition(cssHeader.transition)};
  ${mixinBoxShadow('0 2px 6px 0 rgba(0, 0, 0, 0.3)')};
  cursor: pointer;
  
  &.sticky {
    height: ${cssHeader.heightSticky}
    opacity: .95;
  }
  
 .title {
    font-family: 'Dosis', sans-serif;
    color: #fff;
    grid-column: ${cssGrid.column};
    ${mixinTransition(cssHeader.transition)};
    
    &--sticky {
        font-size: 18px;
        font-weight: normal;
    }
  }
`;
