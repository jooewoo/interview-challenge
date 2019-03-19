import React, { Component, Fragment } from "react";
import { Card as Base } from "@material-ui/core";
import PropTypes from "prop-types";
import "./list-card.scss";

class ListCard extends Component {
  render() {
    console.log(this.props);
    const item = this.props.items.map(item => {
      return <div>- {item}</div>;
    });

    return (
      <Base>
        <div className={"header"}>{this.props.Header}</div>

        {item}
      </Base>
    );
  }
}

ListCard.propTypes = {
  header: PropTypes.string
};

ListCard.defaultProps = {};

export default ListCard;
