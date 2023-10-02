/* Comment on top of my file */

// test gulp
function test() {
    console.log('test gulp');
}
test();

// code pour récupération et affichage des données des articles
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(response => {
        results = response.products
        console.log(results/* [0] */)
        resultsDiv = "";
        for (i = 0; i < results.length; i++) {
            console.log(results[i])

            // changement du fond en fonction du prix de l'article
            let backgroundColor = "";
            if (results[i].price <= 100) {
                backgroundColor = "bg-dark text-light"
            } else {
                backgroundColor = "bg-light"
            }

            // code de la section article répété pour chaque article
            resultsDiv +=
                `<div class="col mb-5">
                <div class="card h-100 ${backgroundColor}">
                    <!-- Product image-->
                    <img class="card-img-top" 
                    src="${results[i].images[0]}"
                    alt="...">
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product brand-->
                            <h5 class="fw-bolder">${results[i].brand}</h5>
                            <!-- Product name-->
                            <h5 class="fw-bolder">${results[i].title}</h5>
                            <!-- Product price-->
                            ${results[i].price} €
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div
                        class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a
                            class="btn btn-outline-dark mt-auto"
                            href="#">View options</a></div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.getElementById('productList').innerHTML = resultsDiv;
    })
    .catch(console.error);
    


// récupération de l'image d'un produit directement par son url, et l'afficher dans la card
/*const myImage = document.querySelector("#myImage");

fetch("https://i.dummyjson.com/data/products/1/1.jpg")
    .then(function (response) {
        return response.blob();
    })
    .then(function (myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });*/



// code pour récupération et affichage des données des posts
fetch('https://dummyjson.com/posts?limit=4')
    .then(response => response.json())
    .then(response => {
        posts = response.posts
        console.log(posts)
        postsDiv = "";
        for (j = 0; j < posts.length; j++) {
            console.log(posts[j])

            // code de la section article répété pour chaque post
            postsDiv +=
                `<div class="card mb-4">
                    <a href="#!"><img class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."></a>
                    <div class="card-body">
                        <div class="small text-muted">Reactions : ${posts[j].reactions}</div>
                        <h2 class="card-title h4">${posts[j].title}</h2>
                        <p class="card-text">${posts[j].body}</p>
                        <a class="btn btn-primary" href="#!">Read
                            more →</a>
                    </div>
                </div>`
        }
        document.getElementById('ProductPosts').innerHTML = postsDiv;
    })
    .catch(console.error);

/* Another comment */
/* Last comment before the end of the world! */