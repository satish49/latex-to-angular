var firstTime = true;

function update(code_input, outputRenderTag) {
  const output = document.getElementById(outputRenderTag);
  if(firstTime){
    firstTime = false
    return
  }else{
    const s = document.createElement('script');
    s.setAttribute('type','text/tikz');
    s.textContent = `
  \\begin{tikzpicture}
  ${code_input}
  \\end{tikzpicture}
    `;
    output.innerHTML = '';
    output.appendChild(s);
    process_tikz(s);
  }
}

let debounce_update = null;
let debounce_do = false;


function renderMe(){
  const code_input = document.getElementById('code');
  const output = document.getElementById('output');
  if(firstTime){
    firstTime = false
    return
  }else{
    alert("render clicked");
    if(debounce_update) {
      debounce_do = true;
      return;
    }
    update();
    debounce_update = setTimeout(function() {
      debounce_update = null;
      if(debounce_do) {
        update();
      }
      debounce_do = false;
    },5000); 
  }
  
}



update();