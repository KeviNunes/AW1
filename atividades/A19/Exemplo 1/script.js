function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' é a melhor banda de todas!'
            })
        } else {
            reject({
                    success: false,
                    msg: 'Não teria tanta certeza!'
                }

            )
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('I want to break free by ' + response.bandName)
        } else {
            reject('Recomendo que ouça Queen')
        }
    })
}

// bestRockBand('Queen')
//     .then(response => {
//         console.log('Analisando resposta...')
//         console.log(response)
//     })
//     .then(response => {
//         console.log('Buscando a melhor música...')
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err.msg)
//     })

async function doTheJob(band) {
    try {
        const bestRockBandResponse = await bestRockBand(band)
        console.log(bestRockBandResponse)
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
        console.log(bestRockSongResponse)
    } catch (error) {
        console.log(error.msg)
    }
}

doTheJob();