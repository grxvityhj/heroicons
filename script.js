'use strict';

const generateHeroicons = async function (icon, type, iconName, iconWidth) {
  if (!iconName) return;

  const URL = `https://grxvityhj.github.io/heroicons/icon`;

  const res = await fetch(`${URL}/${type}/${iconName}.svg`);
  const data = await res.text();

  icon.innerHTML = data !== undefined ? data : '';
  
  const svgPath = icon.querySelectorAll('path');

  for (const path of svgPath) {
    path.getAttribute('stroke-width') &&
      path.setAttribute('stroke-width', iconWidth);

    path.getAttribute('stroke') &&
      path.setAttribute('stroke', 'currentColor');

    path.getAttribute('fill') && path.setAttribute('fill', 'currentColor');
  }
};

window.addEventListener('load', () => {
  const heroicons = document.querySelectorAll('.heroicons');

  for (const icon of heroicons) {
    const name = icon.getAttribute('icon').trim();
    const type = icon.getAttribute('type') ? icon.getAttribute('type').trim() : 'linear';
    const iconWidth = icon.getAttribute('stroke-width') ? icon.getAttribute('stroke-width') : '1.5';

    const args = [icon, type, name, iconWidth];

    generateHeroicons(...args);
  }
});