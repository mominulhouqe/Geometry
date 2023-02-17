
/* 
function  calculator(elementId){
    const areaCalculate = document.getElementById(elementId);
    const areaCalculateString = areaCalculate.value;
    const areaCalculateValue = parseFloat(areaCalculateString);

    return areaCalculateValue;
}

function calculateArea(){

    const triangel = calculator('triangel-base-input')
    const rectangel = calculator('rectangular-area-result')

} */



















// Background Color Changer 
function changeBackgroundOnHover(elementId) {
  const element = document.getElementById(elementId);

  element.addEventListener('mouseover', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + randomColor;
  });
}


// blog here 
document.getElementById('blog').addEventListener('click', function(){
  window.location.href = 'blog.html'
})