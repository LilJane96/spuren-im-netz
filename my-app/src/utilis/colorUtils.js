export const getSelectedColor = () => {
    return localStorage.getItem('selectedColor') || 'default';
  };