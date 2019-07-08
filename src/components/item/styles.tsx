import styled from "styled-components";
import {mixinBoxShadow} from "../../common/css.mixin";
import {cssHeader} from "../../common/css-variables";

export const ItemWrapper = styled.section`
  display: grid;
  grid-row-gap: 20px;
  align-content: space-between;
  justify-items: center;
  padding: 20px 30px;
  ${mixinBoxShadow('1px 2px 3px 0 rgba(0, 0, 0, 0.4)')};

  .title {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 1.1;
    cursor: pointer;
  }

  .img {
    width: auto;
    height: 259px;
    cursor: pointer;
  }

  .no-photo {
    width: 130px;
    height: 250px;
    background: #f3f3f3;
    line-height: 250px;
    text-align: center;
    cursor: pointer;
  }
  
  .more-details {
    font-family: 'Dosis', sans-serif;
    cursor: pointer;
    
    &:hover {
        color: ${cssHeader.backgroundColor};
    }
  }
`;
