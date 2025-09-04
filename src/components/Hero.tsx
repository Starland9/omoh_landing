import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import mockup from '../assets/mockup.jpg';
import icon from '../assets/icon.png'; // Import the new icon

const Hero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ color: 'text.primary', py: 10, position: 'relative', overflow: 'hidden' }}>
      {/* Abstract shapes */}
      <Box sx={{ position: 'absolute', top: -50, left: -150, width: 400, height: 400, background: `rgba(${theme.palette.primary.main}, 0.1)`, borderRadius: '50%', filter: 'blur(100px)' }} />
      <Box sx={{ position: 'absolute', bottom: -100, right: -100, width: 300, height: 300, background: `rgba(${theme.palette.secondary.main}, 0.1)`, borderRadius: '50%', filter: 'blur(100px)' }} />
      <Box sx={{ position: 'absolute', top: '10%', right: '5%', width: 200, height: 200, background: `rgba(${theme.palette.success.main}, 0.1)`, borderRadius: '50%', filter: 'blur(80px)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                Pour avoir une vue Globale de vos Transactions financières
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Replaced Logo Placeholder with actual icon */}
                <Box
                  component="img"
                  src={icon}
                  alt="Omoh Icon"
                  sx={{ width: 60, height: 60, mr: 2, borderRadius: '12px' }} // Removed bgcolor
                />
                <Typography variant="h4" component="span" sx={{ fontWeight: 700 }}>
                  Omoh
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 10 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                component="img"
                src={mockup}
                alt="Omoh App Mockup"
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: `0 30px 60px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                  transform: 'rotate3d(1, -1, 0, 15deg)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;