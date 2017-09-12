(function (){
  const btnGet = document.getElementById('btnget');
  const view = document.getElementById('view');
  
  const btnPost = document.getElementById('btnpost');
  const btnPut = document.getElementById('btnPut');
  const btnDelete = document.getElementById('btndelete');
  
  btnGet.addEventListener('click', () => {
    const userid = document.getElementById('userid').value;
    
    let req = new XMLHttpRequest();
    req.open('GET', `/users/${userid}`);
    req.send(null); 
    req.onreadystatechange = function (e) {
      if (req.readyState === 4){
        if(req.status === 200) {
          const data = JSON.parse(req.responseText);
          //console.log('responseText: ', data);
          view.innerHTML = JSON.stringify(data);
          
        } else {
          console.log("에러에요");
        }
      };
    };
  }); 
 
})();