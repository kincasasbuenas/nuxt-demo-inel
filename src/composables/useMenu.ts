export const useMenu = () => {
  const isMenuOpen = useState("isMenuOpen", () => false);

  const pages = [
    {
      name: 'Inicio',
      link: '/'
    },
    {
      name: 'Conócenos',
      link: '/'
    },
    {
      name: 'Estudia',
      link: '/'
    },
    {
      name: 'Para empresas',
      link: '/'
    },
    {
      name: 'Trabaja en INEL',
      link: '/'
    },
  ]

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return { isMenuOpen, toggleMenu, pages };
};
