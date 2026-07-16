import './style.css';
import './eevee.css';
import eeveeHTML from './eevee.html';

const btn = document.getElementById('toggleBtn');
const container = document.getElementById('eeveeContainer');

container.innerHTML = eeveeHTML;
const wrapper = document.getElementById('eeveeWrapper');

let isActive = false;
let animationInterval = null;

function hardReset() {
  const html = wrapper.innerHTML;
  wrapper.innerHTML = '';
  void wrapper.offsetHeight;
  wrapper.innerHTML = html;
}

btn.addEventListener('click', function() {
  isActive = !isActive;
  
  if (isActive) {
    this.textContent = 'Скрыть Иви';
    wrapper.classList.add('active');
    
    hardReset();
    
    setTimeout(() => {
      const elements = wrapper.querySelectorAll('.eevee *');
      elements.forEach(el => {
        el.style.animationPlayState = 'running';
      });
    }, 100);
    
  } else {
    this.textContent = 'Показать Иви';
    wrapper.classList.remove('active');
    
    const elements = wrapper.querySelectorAll('.eevee *');
    elements.forEach(el => {
      el.style.animationPlayState = 'paused';
    });
  }
});

console.log('Иви готов!');