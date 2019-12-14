// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        console.log(res);
        const tabGetter = res.data.topics
        tabGetter.forEach((tab) => {
            const newTab = tabCreator(tab)
            tabSetter.appendChild(newTab);
        })
        
    })
    .catch((err) => {
        console.log(err);
    });

    const tabSetter = document.querySelector('.topics');

    function tabCreator (array) {
        const singleTab = document.createElement('div');
        
        singleTab.textContent = `${array.topics}`;
        singleTab.classList.add = 'tab';

        return singleTab;
    }

    // axios
    // .get('https://lambda-times-backend.herokuapp.com/topics')
    // .then((res) => {
    //     console.log(res);
    //     const tabGetter = res.data.topics
    //     actualTab.textContent = `${res.data.topics}`
    //     tabGetter.forEach((tab) => {
    //         const newTab = tabCreator(tab)
    //         tabSetter.appendChild(newTab);
    //     })
        
    // })
    // .catch((err) => {
    //     console.log('err');
    // });