const light = document.querySelector('#bulb');

light.addEventListener('click', function(e){

    e.target.classList.toggle('bulb-on');

})