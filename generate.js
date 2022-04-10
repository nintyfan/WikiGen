 window.addEventListener('load', function() {
 
   var params = document.location.hash.substr(1).split('#');
   var elems = document.querySelectorAll('.template');

   for (var a = 0; a < elems.length; ++a) {
   
     var elem = elems[a];
     if (elem.hasAttribute('data-sl-WikiGen-condition')) {
     
        var att = elem.getAttribute('data-sl-WikiGen-condition').split('#');
        
        for (var b = 0; b < att.length; ++b) {
        
          if (params.indexOf(att[b]) < 0) {
          
            elem.style.display = 'none';
            break;
          }
        }
     }
   }
});
