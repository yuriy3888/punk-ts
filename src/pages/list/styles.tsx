import styled from "styled-components";
import {cssBody, cssDevice, cssGrid, cssHeader, cssLayout, cssListItems} from "../../common/css-variables";
import {mixinBorderRadius, mixinBoxShadow} from "../../common/css.mixin";

export const ListWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${cssListItems.widthMinmax}));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  position: relative;
  margin: 25px auto 40px;
  max-width: ${cssBody.maxWidth};
  min-width: ${cssBody.minWidth};
  width: 100%;
  
  padding: 45px ${cssLayout.gapLeft} 0 ${cssLayout.gapRight};
    
  .list-title {
    position: absolute; // Absolute position the title. Don't break the grid layout.
    top: 0;
    left: ${cssLayout.gapLeft};
    right: 0;
    font-family: 'Dosis', sans-serif;
    font-size: 22px;
    text-align: center;
    @media ${cssDevice.mobile} {
       text-align: left;
    }
  }
  
  .list-filter {
    position: absolute;
    right: ${cssLayout.gapRight};
    top: 0;
    width: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    &__title {
        font-family: 'Lato', sans-serif;
    }
    
    &__select {
        padding: 10px;
    }
  }

  .list-items {
    grid-column: ${cssGrid.column};
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  
  .pagination {
    display: grid;
    grid-column: 1 / -1;
    grid-auto-flow: column;
    align-center: center;
    justify-self: center;
    grid-column-gap: 10px;
    margin-top: 20px;
    padding: 0 ${cssLayout.gapLeft} 0 ${cssLayout.gapRight};
    
    li {
        list-style: none;
        ${mixinBorderRadius('20px')};
        
      &.active {
      ${mixinBoxShadow('0 3px 4px 0 rgba(0, 0, 0, 0.3)')};
        background: ${cssHeader.backgroundColor};
        color: #fff;
      }
      
      &:not(.active):hover {
        background: ${cssHeader.backgroundColor};
        opacity: .5;
        color: #fff;
      }
      
       a  {
        display: block;
        min-width: 40px;
        padding: 0 5px;
        font-family: 'Raleway', sans-serif;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
      }
    }
    
      .previous,
      .next {
       text-transform: uppercase;
             ${mixinBoxShadow('0 3px 4px 0 rgba(0, 0, 0, 0.3)')};
      }
  }
`;
