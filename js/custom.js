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
