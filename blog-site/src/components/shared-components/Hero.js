import { Box, makeStyles } from '@material-ui/core';
import heroImg from '../../assets/images/hero.jpg';

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '500px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box></Box>
    </Box>
  );
};

export default Hero;
