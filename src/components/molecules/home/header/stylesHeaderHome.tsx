import { makeStyles ,createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: any) => createStyles({
  header: {
    height: "8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 4%",
    backgroundImage: "url(/images/home/background-metal.png)"
  },
  linksContainer: {
    display: "flex",
    width: "60%",
    justifyContent:"flex-end",
    alignItems:"center"
  }
}))


