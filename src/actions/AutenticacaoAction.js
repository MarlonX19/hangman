import firebase from 'firebase';


export const modificaEmail = (text) => {
    console.log(text)
    return {
        type: 'modifica_email',
        payload: text
    }
}

export const modificaSenha = (text) => {
    console.log(text)
    return {
        type: 'modifica_senha',
        payload: text
    }
}

export const modificaNome = (text) => {
    console.log(text)
    return {
        type: 'modifica_nome',
        payload: text
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispachar => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(response => {
                cadastraUsuarioSucesso(dispachar)
            })
            .catch(error => {
                cadastraUsuarioErro(dispachar)
            });
    }
}

const cadastraUsuarioSucesso = (dispachar) => {
     dispachar ({ type: 'sucesso' });
}

const cadastraUsuarioErro = (dispachar) => {
     dispachar ({ type: 'erro' });
}