function startQuiz() {
    const checkBox = document.getElementById('myCheckbox')
if(checkBox.checked){
window.location.href = "./question.html"
}else{
alert('bocciato')
}

}