import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SmsIcon from '@mui/icons-material/Sms';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import VisibilityIcon from '@mui/icons-material/Visibility';

const steps = [
  {
    icon: <SmsIcon />,
    title: '1. Recevez vos SMS',
    description: 'Les SMS de transactions de vos opérateurs mobiles sont reçus sur votre téléphone.',
  },
  {
    icon: <FindInPageIcon />,
    title: '2. Kipa les analyse',
    description: 'L\'application analyse automatiquement le contenu pour extraire les détails pertinents.',
  },
  {
    icon: <VisibilityIcon />,
    title: '3. Visualisez vos dépenses',
    description: 'Consultez vos transactions de manière claire et organisée.',
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Comment ça marche ?
        </Typography>
        <Grid container spacing={5} sx={{ mt: 5 }} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', width: 56, height: 56, color: 'primary.contrastText' }}>
                    {step.icon}
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;