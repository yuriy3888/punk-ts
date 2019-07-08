import * as React from "react";
import {LoadableWrapper} from "./styles";

export interface LoadingModel<T = any> {
    loading: boolean;
    error: string;
}

interface Props {
    loading: LoadingModel<any>;
}

interface State {

}

export default class Loading extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <LoadableWrapper>
                {this.props.loading && this.props.loading.error && this.props.loading.error.length > 0 ?
                    <div>{this.props.loading.error}</div>
                    :
                    <div className="loadable-content">
                        <div className="loadable-content__loader lds-hourglass"></div>
                    </div>
                }
            </LoadableWrapper>
        )
    }

}
