import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  components: {
    // Konfiguracja dla przycisku
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Wyłączenie efektu ripple w całej aplikacji
      },
    },
    // Konfiguracja dla TextField
    MuiTextField: {
      defaultProps: {
        // Domyślne właściwości TextField
        variant: "outlined", // Możesz ustawić domyślny wariant, np. outlined, filled, lub standard
      },
      styleOverrides: {
        // Nadpisanie domyślnych stylów TextField
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8, // Dodaj zaokrąglenia
            // backgroundColor: '#f0f0f0', // Domyślne tło dla wariantu outlined
            '&:hover fieldset': {
              borderColor: 'blue', // Kolor obramowania podczas najechania
              
            },
            '&.Mui-focused fieldset': {
              // borderColor: 'green', // Kolor obramowania podczas focusu
            },
          },
        },
      },
    },
  },
});

export default customTheme;
