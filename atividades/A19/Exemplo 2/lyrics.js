function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#lyrics_form')
form.addEventListener('submit', letras => {
    letras.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics_le = document.querySelector('#lyrics')
    const artist = document.querySelector('#artist')
    const song = document.querySelector('#song')

    lyrics_le.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>'
        // then
        // findLyrics(artist.value, song.value)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.lyrics) {
        //             lyrics_le.innerHTML = data.lyrics
        //         } else {
        //             lyrics_le.innerHTML = data.error
        //         }
        //     })
        //     .catch(error => {
        //         lyrics_le.innerHTML = 'Deu ruim ' + error
        //     })

    //async e await
    try {
        const letrasResponse = await findLyrics(artist.value, song.value)
        const data = await letrasResponse.json()

        if (data.lyrics) {
            lyrics_le.innerHTML = data.lyrics
        } else {
            lyrics_le.innerHTML = data.error
        }
    } catch (error) {
        console.log(error)
    }
}