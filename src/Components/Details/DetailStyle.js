import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container:{
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardMedia : {
    paddingTop: '56.25%'
},
cardContent : {
  flexGrow: 1,
},
  }));
  export default useStyles;