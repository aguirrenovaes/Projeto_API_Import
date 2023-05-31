document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  //Em jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });