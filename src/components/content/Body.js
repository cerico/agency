import React, { Component } from 'react';

import styles from '../layout/layout.css';

class BodyColor extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    document.body.classList = this.props.bodyColour
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList = nextProps.bodyColour
  }

  render() {
    return (
      <div>{this.props.children}</div>
     )
  }
}

BodyColor.propTypes = {
  bodyColour: React.PropTypes.string
}
BodyColor.defaultProps = {
  bodyColour: styles.noscroll
}

export default BodyColor;