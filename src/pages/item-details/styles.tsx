import styled from "styled-components";
import {cssBody, cssHeader, cssLayout} from "../../common/css-variables";
import {mixinBorderRadius, mixinBoxShadow} from "../../common/css.mixin";

export const ItemDetailsWrapper = styled.section`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  position: relative;
  margin: 15px auto;
  max-width: ${cssBody.maxWidth};
  min-width: ${cssBody.minWidth};
  width: 100%;
  padding: 0 ${cssLayout.gapLeft} 0 ${cssLayout.gapLeft};
  font-family: 'Dosis', sans-serif;

  .back-btn {
    position: fixed; 
    bottom: 50px;
    right: ${cssLayout.gapRight}
    padding: 5px 10px;
    ${mixinBoxShadow('0 3px 4px 0 rgba(0, 0, 0, 0.3)')};
    ${mixinBorderRadius('20px')};
    background-color: #f3f3f3;
    opacity: .8;
    cursor: pointer;
    
    &:hover {
        opacity: 1;
        background-color: ${cssHeader.backgroundColor};
        color: #fff;
   }
  }  

  .title {
    font-size: 22px;
    text-align: center;
  }

  .name {
    font-family: 'Raleway', sans-serif;
  }

  .img {
    width: 130px;
    justify-self: center;
  }
  
  .no-photo {
    justify-self: center;
    width: 130px;
    height: 250px;
    background: #f3f3f3;
    line-height: 250px;
    text-align: center;
    cursor: pointer;
  }
  
  .empty-content {
    height: calc(100vh - ${cssHeader.height});
    display: grid;
    place-content: center center;
    place-items: center center;
    font-size: 24px;
    font-weight: 500;
  }
`;
