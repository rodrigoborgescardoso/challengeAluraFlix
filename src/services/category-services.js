const listCategories = () => {
    // return fetch(`http://localhost:3000/categories`)
    return fetch(`https://alura-flix.onrender.com/api/categories`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível listar as categorias');
    });
};

const addCategory = (title, description, color) => {
    // return fetch(`http://localhost:3000/categories`, {
    return fetch(`https://alura-flix.onrender.com/api/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                title: title,
                description: description,
                color: color
            }
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível adicionar a categoria.');
    });
};

const removeCategory = (id) => {
    // return fetch(`http://localhost:3000/categories/${id}`, {
    return fetch(`https://alura-flix.onrender.com/api/categories/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover a categoria.');
        }
    });
};

const detailsCategory = (id) => {
    // return fetch(`http://localhost:3000/categories/${id}`)
    return fetch(`https://alura-flix.onrender.com/api/categories/${id}`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível detalhar a categoria.');
    });
};

const updateCategory = (id, title, description, color) => {
    // return fetch(`http://localhost:3000/categories/${id}`, {
    return fetch(`https://alura-flix.onrender.com/api/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                title: title,
                description: description,
                color: color
            }
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível atualizar a categoria.');
    });
};

export const categoryServices = {
    listCategories,
    addCategory,
    removeCategory,
    detailsCategory,
    updateCategory
};