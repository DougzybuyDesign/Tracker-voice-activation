import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import {useSpeechContext} from '@speechly/react-client';
import {ExpenseTrackerContexy} from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';


const ExpenseTracker =() => {
const classes =useStyles();
const {balance} = useContext(ExpenseTrackerContext);

return(

  <Card className={classes.root}>
    <CardHeader title="Expense Tracker" subheader="Poweredby speechly" />
<CardContent>
  <Typography align= "center" variant='h5'> Total Balance ${balance}</Typography>
<Typography variant= "subtitle1" style={{lineHeight: '1.5em', marginTop:'20px'}}>
<InfoCard/>
</Typography>
<Divider className={classes.divider}/>
<Form/>
</CardContent className= {classes.cardContent}>
  <Grid container spacing={2}>
<Grid items xs= {12}>
<List/>
</Grid>
</Grid>
</CardContent>
</Card>
    );

};

export default ExpenseTracker;



