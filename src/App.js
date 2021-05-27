import Recat from 'react';
import React {useEffect, useRef} from 'react';
import {Grid} from '@material-ui/core';

import {SpeechState, speechState, useSpeechContext} from '@speechly/react-client';
import {PushToalkButton, PushToalkButtonContainer} from '@speechly/react-client';
import {Details, Main} from './components/Detail/Details';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  const {speechState} = useSpeechContext();
  const main = useRef(null)
  const executecroll = () => main.current.scrollIntoView()

  useEffect(() =>{
if (speechState === SpeechState.Recording) {
  executeScroll ();

}
  },[speechState]);
  return (
    <div>
      <Grid className= {classess.grid} container spacing={0}alignItems="center" justify='center' style ={{height: '100vh'}}>

      <Grid item xs={12} sm={4} className={classess.mobile}>
        <Details title="Income"/>
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main/>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income"/>
            <Main/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last}>
              <Details title="Expenses"/>
              </Grid>
              <PushToalkButtonContainer>
                <PushToalkButton/>
                </PushToalkButtonContainer>
                </Grid>
                </div>
  );
  };
export default App;
