import React from "react";
import "./UserLogger.css";

function HigherOrderComponent(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log(`[HOC LOG]: ${WrappedComponent.name} mounted`);
        }

        render() {
            const Props = {
                appVersion: "1.0.0",
            };

            return <WrappedComponent {...this.props} {...Props} />;
        }
    };
}

function AppVersion(props) {
    return (
        <div className="version-box">
            <p className="version-text">App Version: {props.appVersion}</p>
        </div>
    );
}

export default HigherOrderComponent(AppVersion);
