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
    description: 'Kipa analyse vos SMS pour identifier et enregistrer automatiquement vos transactions.',
    image: autoExtract,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Liste de Transactions',
    description: 'Visualisez toutes vos transactions dans une liste claire et organisée.',
    image: transactionsList,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  },
  {
    title: 'Recherche et Filtrage',
    description: 'Recherchez et filtrez vos transactions par opérateur, type ou date.',
    image: filtering,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
  {
    title: 'Configuration Personnalisée',
    description: "Ajoutez vos numéros pour améliorer la précision de l'extraction des transactions.",
    image: configs,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
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
          background: 'radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(120, 198, 121, 0.1) 0%, transparent 50%)',
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
              background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
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
            Découvrez les outils puissants qui font de Kipa votre assistant financier idéal
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
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
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
                      background: feature.gradient,
                      zIndex: 2,
                    },
                    '&:hover': {
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                      '& .feature-image': {
                        transform: 'scale(1.1)',
                        filter: 'brightness(1.1)',
                      },
                      '& .feature-overlay': {
                        opacity: 1,
                      },
                      '& .feature-number': {
                        transform: 'scale(1.1) rotate(10deg)',
                      },
                      '& .feature-title': {
                        color: feature.color,
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
                        transition: 'all 0.4s ease',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      className="feature-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(45deg, ${alpha(feature.color, 0.2)}, transparent 70%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    />

                    {/* Number Badge */}
                    <Box
                      className="feature-number"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Box>
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
                        background: feature.gradient,
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
                      borderBottom: `24px solid ${alpha(feature.color, 0.1)}`,
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