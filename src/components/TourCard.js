import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import image from '.././deadmau5.jpg';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          }
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          }
        }
      ]
    }
  }
})

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} square>
          <img src={image} className={'img'}/>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2" >リヴァプールFCへようこそ</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            paddingX={1}
          >
            <AccessTime sx={{ width: 12.5 }}/>
            <Typography variant='body2' component='p' marginLeft={0.5}>Liverpool</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
            paddingX={1}
          >
              <Rating size={'small'} name="read-only" value={4.5} readOnly precision={0.5}/>
              <Typography variant='body2' component='p' marginLeft={0.5}>4.5</Typography>
              <Typography variant='body3' component='p' marginLeft={1.5}>(655 reviews)</Typography>
          </Box>
          <Box paddingX={1}>
          <Typography variant='h6' component='h3' marginTop={0}>From 38500円</Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
    )
}

export default TourCard;