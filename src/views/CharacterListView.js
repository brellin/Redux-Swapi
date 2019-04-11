import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch } from '../actions'

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    console.log('CharListView', this.props)
    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching !== false ?
          'Fetching' :
          <CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.charsReducer.isFetching,
    characters: state.charsReducer.characters
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { fetch })(CharacterListView);
