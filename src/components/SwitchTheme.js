export const SwitchTheme = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    const l50 = Math.floor(Math.random() * 50);
    const l10 = Math.floor(Math.random() * 10);

    document.documentElement.style.setProperty('--hue', h + 'deg');
    document.documentElement.style.setProperty('--saturation', s+ '%');
    document.documentElement.style.setProperty('--lightenes', l+ '%');
    document.documentElement.style.setProperty('--lightenes-10', l10+ '%');
    document.documentElement.style.setProperty('--lightenes-50', l50+ '%');
  };