 // Fetch data from the API
 fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cyberfly-io')
 .then(response => response.json())
 .then(data => {
   // Extract relevant information from the API response
   const posts = data.items.slice(0, 3);

   // Create HTML elements based on the API data
   const postsContainer = document.getElementById('blogs');

   posts.forEach(post => {
     const postElement = document.createElement('div');
     const regexPattern = /https:\/\/cdn-images-1.medium.com\/\w+\/\d+\/.{0,24}\.png/;
     const thumbnail = post.description.match(regexPattern);
     postElement.className = 'col-12 col-lg-4';
     postElement.innerHTML = `
       <div class="post-box">
         <a class="post-link" href="${post.link}" title="${post.title}">
           <div class="post-img-wrapper">
             <img class="parallax-img post-img" loading="lazy" src="${thumbnail[0]}" alt="${post.title}">
             <span class="post-date"><span class="day">${new Date(post.pubDate).getDate()}</span> ${new Date(post.pubDate).toLocaleString('default', { month: 'short' })} ${new Date(post.pubDate).getFullYear()}</span>
           </div>
         </a>
         <div class="post-summary">
           <div class="post-info">
             <a class="info post-cat" href="#blog"> <i class="bi bi-bookmark icon"></i>${post.categories.join(', ')}</a>
             <a class="info post-author" href="#blog"> <i class="bi bi-person icon"></i>${post.author}</a>
           </div>
           <div class="post-text">
             <a class="post-link" href="${post.link}">
               <h2 class="post-title">${post.title}</h2>
             </a>
             <a class="read-more" href="${post.link}" title="${post.title}">read more<i class="bi bi-arrow-right icon"></i></a>
           </div>
         </div>
       </div>
     `;
     postsContainer.appendChild(postElement);
   });
 })
 .catch(error => console.error('Error fetching data:', error));


 (async () => {
  const rawResponse = await fetch('https://api.chainweb.com/chainweb/0.0/mainnet01/chain/2/pact/api/v1/local', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
  "cmd": "{\"signers\":[],\"meta\":{\"creationTime\":1704812213,\"ttl\":20556,\"chainId\":\"2\",\"gasPrice\":2.46754e-6,\"gasLimit\":70000,\"sender\":\"k:8d031ecdfffcf3b06cf6bfc2fd266e81a1c8acf697277f8348dd1f38e0ee7341\"},\"nonce\":\"CW:2024-01-09 14:57:07.649 UTC\",\"networkId\":\"mainnet01\",\"payload\":{\"exec\":{\"code\":\"(free.cyberfly_token.get-balance \\\"k:820b3bc70df57e9dc72636ad15f2530c111ea94d6e969e1342aef0920af8c2e2\\\")\",\"data\":{}}}}",
  "hash": "WgKNQZ8myoOb4V25XS5aUGeEtFQ6JY584jsTiHiUzew",
  "sigs": [

  ]
})
});
  const content = await rawResponse.json();
  console.log(content)
  var csupplyElement = document.getElementById("csupply");
  var csupply = (88965657 - content.result.data) / 1000000
  console.log(csupply)
  csupplyElement.innerHTML = csupply.toFixed(2);
  })();



 (async () => {
  const rawResponse = await fetch('https://api.chainweb.com/chainweb/0.0/mainnet01/chain/2/pact/api/v1/local', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"cmd":"{\"signers\":[{\"scheme\":\"ED25519\",\"pubKey\":\"8d031ecdfffcf3b06cf6bfc2fd266e81a1c8acf697277f8348dd1f38e0ee7341\",\"addr\":\"8d031ecdfffcf3b06cf6bfc2fd266e81a1c8acf697277f8348dd1f38e0ee7341\"}],\"meta\":{\"creationTime\":1705590776,\"ttl\":20556,\"chainId\":\"2\",\"gasPrice\":2.46754e-6,\"gasLimit\":70000,\"sender\":\"k:8d031ecdfffcf3b06cf6bfc2fd266e81a1c8acf697277f8348dd1f38e0ee7341\"},\"nonce\":\"CW:2024-01-18 15:13:10.965 UTC\",\"networkId\":\"mainnet01\",\"payload\":{\"exec\":{\"code\":\"(free.cyberfly_token.get-balance \\\"k:0000000000000000000000000000000000000000000000000000000000000000\\\")\",\"data\":{}}}}","hash":"l0UAQwL89xX5dPSkmT6C3oMQ29yatfW6cLYteN7PSf0","sigs":[{"sig":"7b801fd6a78c95f34f94584650a517539b5ba71fb4a72def882a033c951c0cc7a6fee60b86e4a51a892aa887e816ca695ac66274de068527129dd6ad5bb8990a"}]
  })
});
  const content = await rawResponse.json();
  console.log(content)
  var csupplyElement = document.getElementById("burned");
  var csupply = content.result.data / 1000000
  console.log(csupply)
  csupplyElement.innerHTML = csupply.toFixed(2);
  })();