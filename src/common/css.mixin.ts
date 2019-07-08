/*
Transitions
Usage:
@include transition(color .3s ease);
*/
export const mixinTransition = (arg: string) => (`
    -webkit-transition: ${arg};
    -moz-transition: ${arg};
    -ms-transition: ${arg};
    -o-transition: ${arg};
    transition: ${arg};
`);

/*
Usage:
mixinBoxShadow('0 2px 6px 0 rgba(0, 0, 0, 0.3'))
*/
export const mixinBoxShadow = (arg: string) => (`
    -webkit-box-shadow: ${arg};
    -moz-box-shadow: ${arg};
    box-shadow: ${arg}
`);

/*
Usage:
@include border-radius(100%);
*/
export const mixinBorderRadius = (arg: string) => (`
    -webkit-border-radius: ${arg};
    -moz-border-radius: ${arg};
    border-radius: ${arg};
`);

/*
Usage:
@include transform(rotate(0deg));
*/
export const mixinTransform = (arg: string) => (`
   -webkit-transform: ${arg};
    -ms-transform: ${arg};
    -o-transform: ${arg};
    transform: ${arg};
`);
