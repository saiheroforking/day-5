import React from "react";

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
    <div>
      <p>App Version: {props.appVersion}</p>
    </div>
  );
}

export default HigherOrderComponent(AppVersion);
