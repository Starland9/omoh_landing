import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';

// Import images
import autoExtract from '../assets/screenshots/auto_extract.jpg';
import transactionsList from '../assets/screenshots/transactions_list.jpg';
import filtering from '../assets/screenshots/filtering.jpg';
import configs from '../assets/screenshots/configs.jpg';

const features = [
  {
    title: 'Extraction Automatique',
    description: 'Omoh analyse vos SMS pour identifier et enregistrer automatiquement vos transactions.',
    image: autoExtract,
  },
  {
    title: 'Liste de Transactions',
    description: 'Visualisez toutes vos transactions dans une liste claire et organisée.',
    image: transactionsList,
  },
  {
    title: 'Recherche et Filtrage',
    description: 'Recherchez et filtrez vos transactions par opérateur, type ou date.',
    image: filtering,
  },
  {
    title: 'Configuration Personnalisée',
    description: "Ajoutez vos numéros pour améliorer la précision de l'extraction des transactions.",
    image: configs,
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'light'
          ? `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`
          : `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `radial-gradient(circle at 30% 20%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%)`,
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Fonctionnalités Clés
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              mx: 'auto',
              borderRadius: 2,
              mb: 3
            }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Découvrez les outils puissants qui font de Omoh votre assistant financier idéal
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '480px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: alpha(theme.palette.background.paper, 0.9),
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    boxShadow: theme.shadows[4],
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: theme.palette.primary.main,
                      zIndex: 2,
                    },
                    '&:hover': {
                      boxShadow: theme.shadows[12],
                      '& .feature-image': {
                        transform: 'scale(1.1)',
                        filter: 'brightness(1.1)',
                      },
                      '& .feature-overlay': {
                        opacity: 1,
                      },
                      '& .feature-title': {
                        color: theme.palette.primary.main,
                      },
                      '& .feature-line': {
                        width: '100%',
                        opacity: 1,
                      }
                    }
                  }}
                >
                  {/* Image Section */}
                  <Box sx={{ position: 'relative', height: '60%', overflow: 'hidden' }}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="feature-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'all 0.4s ease',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      className="feature-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.2)}, transparent 70%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    />

                  </Box>

                  {/* Content Section */}
                  <Box
                    sx={{
                      height: '40%',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      className="feature-title"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        transition: 'color 0.3s ease',
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        mb: 2
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Animated Line */}
                    <Box
                      className="feature-line"
                      sx={{
                        height: '2px',
                        width: '0%',
                        background: theme.palette.primary.main,
                        borderRadius: 1,
                        transition: 'all 0.4s ease',
                        opacity: 0,
                      }}
                    />
                  </Box>

                  {/* Corner Decoration */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 0,
                      borderLeft: '24px solid transparent',
                      borderBottom: `24px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
