let filterInput = document.getElementById('search');
search.addEventListener('keyup', filterKey);
function filterKey() {
  let filterValue = document.getElementById('search').value.toLowerCase();
  fetch(`https://newsapi.org/v2/top-headlines?country=id&q= ${filterValue}&apiKey=72e63a10de2a4600b66dd3cd33154c68`)
    .then((Response) => Response.json())
    .then((Response) => {
      const news = Response.articles;
      let cards = '';
      news.forEach((element) => {
        cards += `<div class="col-md-4">
          <div class="card mt-1 list-item">
              <img src="${element.urlToImage}" class="card-img-top" alt="${element.title}" />
              <div class="card-body">
              <h5 class="card-title ">${element.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.publishedAt}</h6>
              <p class="card-text">${element.description}</p>
              <a href="${element.url}"  target="_blank" class="btn btn-primary">Read More</a>
              </div>
          </div>
          </div>`;
        const news = document.querySelector('.news');
        news.innerHTML = cards;
      });
    });
}
fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=72e63a10de2a4600b66dd3cd33154c68')
  .then((Response) => Response.json())
  .then((Response) => {
    const news = Response.articles;
    let cards = '';
    news.forEach((element) => {
      cards += `<div class="col-md-4">
          <div class="card mt-1 list-item">
              <img src="${element.urlToImage}" class="card-img-top" alt="${element.title}" />
              <div class="card-body">
              <h5 class="card-title ">${element.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.publishedAt}</h6>
              <p class="card-text">${element.description}</p>
              <a href="${element.url}"  target="_blank" class="btn btn-primary">Read More</a>
              </div>
          </div>
          </div>`;
      const news = document.querySelector('.news');
      news.innerHTML = cards;
    });
  });

fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=8&apiKey=72e63a10de2a4600b66dd3cd33154c68')
  .then((Response) => Response.json())
  .then((Response) => {
    const news = Response.articles;
    let cards = '';
    news.forEach((element) => {
      cards += `<div class="col-md-4">
          <div class="card mt-1 list-item">
              <img src="${element.urlToImage}" class="card-img-top" alt="${element.title}" />
              <div class="card-body">
              <h5 class="card-title ">${element.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.publishedAt}</h6>
              <p class="card-text">${element.description}</p>
              <a href="${element.url}"  target="_blank" class="btn btn-primary">Read More</a>
              </div>
          </div>
          </div>`;
      const technology = document.querySelector('.technology');
      technology.innerHTML = cards;
    });
  });
