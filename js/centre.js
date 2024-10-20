const wrapper = document.querySelector('.pricing-wrapper');
  const cards = document.querySelectorAll('.pricing-card');

  const adjustCentering = () => {
    const itemCount = cards.length;
    const lastRowStartIndex = Math.floor((itemCount - 1) / 4) * 4;
    const lastRowItemCount = itemCount - lastRowStartIndex;

    if (lastRowItemCount < 4 && lastRowItemCount > 0) {
      wrapper.style.justifyContent = 'center';
    } else {
      wrapper.style.justifyContent = 'flex-start';
    }
  };

  adjustCentering();
  window.addEventListener('resize', adjustCentering);