const template = () => `
 <a target='_blanck' class="efectoEnlace" href="https://github.com/primerproyecto/hub-de-games"><i data-feather="github"></i> Hub de games<span aria-hidden="true"><i data-feather="github"></i> Hub de games</span></a>
`;

export const listeners = () => {
  document.querySelector("footer").innerHTML = template();
  feather.replace()
};