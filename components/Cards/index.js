// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
// requestOne = axios.get('https://lambda-times-backend.herokuapp.com/articles');
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log(res);
        const cardGetter = res.data.articles;
        const cardDiv = document.createElement('div');
        cardGetter.forEach((card) => {
            cardsMain(cardGetter.author);
            startingPoint.appendChild(card)
        })

        startingPoint.appendChild(cardDiv);
    })
    .catch((err) => {
        console.log(err);
    });






    const startingPoint = document.querySelector('.cards-container');

    function cardsMain (obj) {
        const cardClass = document.createElement('div');
        const headline = document.createElement('div');
        const auth = document.createElement('div');
        const imgContainer = document.createElement('div');
        const imgSource = document.createElement('img')
        const authorN = document.createElement('span');

        cardClass.appendChild(headline);
        cardClass.appendChild(auth);
        auth.appendChild(imgContainer);
        imgContainer.appendChild(imgSource);
        auth.appendChild(authorN);

        cardClass.classList.add('card');
        headline.classList.add('headline');
        auth.classList.add('author');
        imgContainer.classList.add('img-container');

        headline.innerHTML = `${obj.headline}`;
        imgSource.src = `${obj.authorPhoto}`
        authorName.innerHTML = `${obj.authorName}`
        
        return cardsMain
    }

