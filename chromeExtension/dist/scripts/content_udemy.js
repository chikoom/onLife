console.log('content udemy')

$(document).ready( function(){
    setTimeout( function() {

      $("[class^=progress--progress-container]").click()
      console.log($("[class^=progress-popover-content--progress-text]").text())
      $("[class^=popover--close-]").click()

      $('input').on('click', function(){
        console.log('input clicked')
      })

      $('body').on('click', "[class^=next-and-previous--button]", function(){
        console.log('clicked')
        if($(this).data().purpose === 'go-to-next'){
          $("[class^=progress--progress-container]").click()
          let progress = $("[class^=progress-popover-content--progress-text]").text()
          $("[class^=popover--close-]").click()
          let myRegexp = /(\d+)/g;
          let match = myRegexp.exec(progress);
          console.log(match);
          progress.split(' ')
          console.log(match[0])
          console.log(match[1])
          let lessonsLeft = parseInt(match[1])-parseInt(match[0])
          if(  lessonsLeft === 1){
            console.log('One Left')
          }
          if(  lessonsLeft === 0){
            console.log('finished')
          }
        }
      })
  }, 3000 )
})



// window.addEventListener('load', function(){
//   setTimeout( function() {
//     let progressArray = Array.prototype.slice.call( document.getElementsByClassName('ellipsis') )
//     for (var i = 0; i < progressArray.length; i++) {
//       console.log(progressArray[i])
//     }
//   }, 3000 )
  
// })






