import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import './App.css';
import logo from './logo.svg';
import { State } from 'src/store';


interface OwnProps { }
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = OwnProps & StateProps & DispatchProps;


function mapStateToProps(state: State) {
  return {
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    ...bindActionCreators({}, dispatch)
  }
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
