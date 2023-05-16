const validateTitle = (title) => {
    if(title.length <= 0) {
        return {valid: false, text: 'O Título não pode estar vazio.'}
    } else {
        return {valid: true, text: ''}
    }
};

const validateVideoUrl = (url) => {
    if(url.length <= 0) {
        return {valid: false, text: 'O Link do vídeo não pode estar vazio.'}
    } else {
        return {valid: true, text: ''}
    }
};

const validateCategory = (category) => {
    if(category <= 0) {
        return {valid: false, text: 'Você deve selecionar uma Categoria.'}
    } else {
        return {valid: true, text: ''}
    }
};

export {validateTitle, validateVideoUrl, validateCategory};