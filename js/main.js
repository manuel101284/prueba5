window.onload =() =>{
  'user strict',
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
  }
}
