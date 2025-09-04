import { Box, Container, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Kipa
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{mt: 1}}>
          <Link href="#" color="inherit" sx={{mx: 1}}>
            Politique de confidentialité
          </Link>
          |
          <Link href="#" color="inherit" sx={{mx: 1}}>
            Conditions d'utilisation
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;