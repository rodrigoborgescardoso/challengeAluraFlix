const listVideos = () => {
    // return fetch(`http://localhost:3000/videos`)
    return fetch(`https://alura-flix.onrender.com/api/videos`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível listar os vídeos');
    });
};

const addVideo = (title, urlVideo, urlThumbnail, category, description) => {
    // return fetch(`http://localhost:3000/videos`, {
    return fetch(`https://alura-flix.onrender.com/api/videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                title: title,
                urlVideo: urlVideo,
                urlThumbnail: urlThumbnail,
                category: category,
                description: description
            }
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível adicionar o vídeo.');
    });
};

export const videoServices = {
    listVideos,
    addVideo
};