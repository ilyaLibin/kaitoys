import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import { connect } from 'react-redux';
import * as ProjectActions from '../actions/projectActions';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    router: state.router
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

