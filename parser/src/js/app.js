window.addEventListener('DOMContentLoaded',() => {
    const body = document.querySelector('body');
    let textNodes = []

    function recursy(element) {
        element.childNodes.forEach(node =>{
            if (node.textContent.match(/^\s{1,32}963/) || node.textContent.match(/^19 57/)){
                const obj = {
                    header: node.textContent.trim(),
                    nName: node.nodeName,
                    name: node.outerText
                }
                textNodes.push(obj);
            } else {
                recursy(node);
            }
        })
    }
    recursy(body)
    console.log(textNodes)
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json))
});

