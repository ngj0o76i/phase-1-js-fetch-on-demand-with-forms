const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const input = document.querySelector('input#searchByID')
        // console.log(input.value);
        // targets children the same as above code 
        // event.target.children

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(resp => resp.json())
            .then(json => {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')
                title.innerText = json.title
                summary.innerText = json.summary
            })

    })
}

document.addEventListener('DOMContentLoaded', init);