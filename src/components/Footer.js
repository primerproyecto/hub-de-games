

const template = () => `
 <a href="correo@correo.es">correo@correo.es</a>
`;

export const listeners = () => {
  document.querySelector("footer").innerHTML = template();
};