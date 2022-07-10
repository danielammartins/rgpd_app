/*export async function getText() {
  let promise = new Promise(function(myResolve, myReject) {
    const res = getFromApi();
  
    myResolve(res.foo);
    myReject();
  });
  
  promise.then(
    function(value, res) {
      console.log(value);
    },
    function(error) {
      console.log("Erro");
    }
  )
}*/

export async function getText() {
  const response = await fetch('https://localhost:3011/api/text');
  const json = await response.json();

  content.value = JSON.parse(json);
}

export async function updateText() {
  await fetch('https://localhost:3011/api/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: JSON.stringify(content.value)})
  });

  await getText();
}

