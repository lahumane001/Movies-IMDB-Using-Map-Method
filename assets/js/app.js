let cl = console.log;
  cl(movieArr)

  const movieContainer = document.getElementById("movieContainer");
  const templating = (arr) =>{
    let result = " ";
    arr.map(movie =>{
    result += `
                <div class="col-lg-3">
                  <div class="card">
                      <figure class="moviecard">
                          <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="${movie.title}">
                          <figcaption class="text-white p-4 bg-dark">
                              <div class="row">
                                  <div class="col-sm-10">
                                      <h3>
                                          ${movie.title}
                                      </h3>
                                  </div>
                                  <div class="col-sm-2">
                                      ${movie.vote_average}
                                  </div>
                              </div>
                          </figcaption>
                          <div class="overview bg-white p-4">
                              <h1>Overview</h1>
                              <p>${movie.overview}</p>
                          </div>
                      </figure>
                  </div>
              </div>
            `
  })
  movieContainer.innerHTML = result;
}
templating(movieArr)