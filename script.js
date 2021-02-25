document.getElementById('button').addEventListener('click', report)
document.getElementById('bg')
  .style.backgroundColor = 'purple'

function report () {
  alert(document.getElementById('input').value)
}
