window.addEventListener('load', onLoad);

window.addEventListener('hashchange', processHash);


function processHash() {

   var params = document.location.hash.substr(1).split('#');
   var elems = document.querySelectorAll('.template');

   for (var a = 0; a < elems.length; ++a) {

     var elem = elems[a];

     if (elem.data_sl_WikiGen_display) {
        elem.style.display = elem.data_sl_WikiGen_display;
     }

     elem.data_sl_WikiGen_display = window.getComputedStyle(elem).getPropertyValue('display');

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
}


function showConfig() {

  var el = document.querySelector('#sl-WikiGen-config-form');
  
  el.style.display = 'block';
  
  el = document.querySelectorAll('#sl-WikiGen-configure-options-inside input[type="checkbox"]');
  
  var params = document.location.hash.substr(1).split('#');
  for (var i = 0; i < el.length; ++i) {
  
    if (-1 < params.indexOf(el[i].name) ) {
    
      el[i].checked = true; 
    }
    else {
      
      el[i].checked = false;
    }
  }
}

function hideConfig() {

  var el = document.querySelector('#sl-WikiGen-config-form');
  
  el.style.display = 'none';
}

function AcceptChanges() {

  var el = document.querySelectorAll('#sl-WikiGen-configure-options-inside input[type="checkbox"]');
  var hash = '';
  console.log(el);
  for (var i = 0; i < el.length; ++i) {
    
    if (el[i].checked) {
    
      hash += '#' + el[i].name;
    }
  }
  
  document.location.hash = hash;
}

function onLoad() {
  processHash();
  
  var el = document.querySelector('#sl-WikiGen-menu');
  
  if (! el) return;
  
  el.innerHTML = '<section id="sl-WikiGen-config-form" style="display: none"><h1>Configure</h1><div id="sl-WikiGen-configure-options-inside"></div><h2>Options</h2><button onclick="hideConfig()">Hide</button><button onclick="AcceptChanges()">Accept</buton></section><button onclick="showConfig()">Configure</button>';
  
  el = document.querySelector('#sl-WikiGen-configure-options-inside');
  
  el.innerHTML = document.querySelector('#sl-WikiGen-configure-options').innerHTML;
  
  document.querySelector('#sl-WikiGen-configure-options').parentNode.removeChild(document.querySelector('#sl-WikiGen-configure-options'));
}
