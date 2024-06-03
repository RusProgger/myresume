// const items = document.querySelectorAll('.circle a');

// for(var i = 0, l = items.length; i < l; i++) {
//   items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

//   items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
// }

// document.querySelector('.menu-button').onclick = function(e) {
//     e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
// }


const items = document.querySelectorAll('.circle a');

for (let i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    // Добавляем обработчик события для закрытия меню при клике на ссылку
    items[i].addEventListener('click', () => {
        document.querySelector('.circle').classList.remove('open');
    });
}

document.querySelector('.menu-button').onclick = function(e) {
    e.preventDefault(); 
    document.querySelector('.circle').classList.toggle('open');
};