export const validateUsername = (password) =>{
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const validateUsernameMessage = 'Username invalido'