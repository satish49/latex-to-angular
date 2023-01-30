
function update(code_input, outputRenderTag) {
  alert("why you called me? update()");
  const output = document.getElementById(outputRenderTag);
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

