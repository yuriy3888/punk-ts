import * as React from "react";
import {HeaderWrapper} from "./styles";
import {history} from "../../utils/history";

interface Props {
}

interface State {
    scrollDown: boolean;
}

export class HeaderComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            scrollDown: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll() {
        this.setState({
            scrollDown: window.pageYOffset > 90
        });
    };

    goBack() {
        history.push('/');
    }

    render() {
        const {scrollDown} = this.state;
        return (
            <HeaderWrapper className={scrollDown ? 'sticky' : ''} onClick={this.goBack}>
                <h1 className={`title ${scrollDown ? 'title--sticky' : ''}`}>Punk: beers portal</h1>
            </HeaderWrapper>
        );
    }
};
