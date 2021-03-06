import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container:{
    background: theme.palette.background.paper,
    //padding: theme.spacing(8, 0, 6)
  },
  card :{
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia : {
    paddingTop: '56.25%'
},
  cardGrid:{
    padding: '20px 0'
},
  cardContent : {
    flexGrow: 1,
}

  }));
  export default useStyles;