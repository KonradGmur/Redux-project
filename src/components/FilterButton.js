import React from "react";
import { connect } from "react-redux";

const FilterButton = ({ onClick, children, active }) => {
  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton);
