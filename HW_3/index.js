

const photoContainer = document.getElementById("photo__container");
let page = Math.floor(Math.random() * 100) + 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=Ys1zvoO5KfCyOBFfUEWhTTvfbOZoZgsOj7ZpL_5pTew`
    );

    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos(page) {
  const photos = await fetchPhotos();
  const nameUser = photos[0].user.first_name;
  const photo = photos[0].urls.small;
  let likes = photos[0].likes;

  console.log(photos);

  const contentHtml = `<article>
					  		<div class="">
						  		<h2 class="title">Photo</h2>
						  		<img src="${photo}" alt="photo">
						  		<p class="nameUser">Фотограф: ${nameUser} </p>
						  		<p id="likes">Лайки: ${likes}</p>
							  	<button id="btnLikes">Нравится</button>
							</div>
					  	</article>
	`;
  photoContainer.innerHTML = contentHtml;

  btnLikes.addEventListener("click", () => {
    const likesEl = document.getElementById("likes");
    likes += 1;
    likesEl.textContent = `Лайки: ${likes}`;
  });
}
loadMorePhotos(page);
    
    


  

  
    
    
    
  



