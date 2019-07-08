export const cssBody = {
    maxWidth: '1300px',
    minWidth: '320px'
};

export const cssGrid = {
    templateColumns: `1fr minmax(auto, ${cssBody.maxWidth}) 1fr`,
    column: '2',
};

export const cssHeader = {
    height: '90px',
    heightSticky: '55px',
    backgroundColor: '#3f51b5',
    transition: '.5s',
};

export const cssListItems = {
    widthMinmax: '300px, 1fr'
};

export const cssLayout = {
    gapLeft: '15px',
    gapRight: '15px'
};

export const cssDevice = {
    mobile: `(max-width: 767px)`,
    tablet: `(min-width: 768px) and (max-width: 1199px)`,
    desktop: `(min-width: 1200px)`,
    mobileTablet: `(max-width: 1199px)`,
    tabletDesktop: `(min-width: 768px)`
};
