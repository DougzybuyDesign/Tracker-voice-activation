import react from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../UseTransactions';

const DetailCard = ({title, subeader}) => {
const {total, chartData} = useTransactions (title);
const classes = useStyles();

return (
  <Card className={ title === 'Income' ?classes.income : classes.expense}>
<Card className={title} subheader={subheader}/>
<CardContent>
<Typography variant= "h5"> ${total}</Typography><Doughnut data={chartData}/>
</CardContent>
</Card>

);
};
export default DetailsCard;