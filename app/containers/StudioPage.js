import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Studio from '../components/Studio';
import * as StudioActions from '../actions/studioActions';

function mapStateToProps(state) {
  return {
    frames: state.studio.get('data')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(StudioActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
