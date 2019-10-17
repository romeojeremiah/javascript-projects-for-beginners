// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})();
