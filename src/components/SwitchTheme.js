export const SwitchTheme = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    document.documentElement.style.setProperty('--hue', h + 'deg');
    document.documentElement.style.setProperty('--saturation', s+ '%');
  };