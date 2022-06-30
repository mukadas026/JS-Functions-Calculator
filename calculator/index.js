
  document.getElementById('textArea').innerText = '';
  let textArea = document.getElementById('textArea');
  // let key = [];
  key = document.getElementsByTagName('td');
  let i;
  
  key[0].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[0].innerText;
  })
  key[1].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[1].innerText;
  })
  key[2].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[2].innerText;
  })
  key[3].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText = textArea.innerText.slice(0, textArea.innerText.length - 1);
  })
  key[4].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[4].innerText;
  })
  key[5].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[5].innerText;
  })
  key[6].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[6].innerText;
  })
  key[7].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText = '';
  })
  key[8].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[8].innerText;
  })
  key[9].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[9].innerText;
  })
  key[10].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[10].innerText;
  })
  key[11].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[11].innerText;
  })
  key[12].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText = eval(textArea.innerText)
  })
  key[13].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[13].innerText;
  })
  key[14].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[14].innerText
  })
  key[15].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[15].innerText;
  })
  key[16].addEventListener('click', (e) => {
    e.preventDefault();
    return textArea.innerText += key[16].innerText;
  })


  
