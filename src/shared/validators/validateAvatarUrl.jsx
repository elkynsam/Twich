export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(uel);

}


export const avatarUrlValidationMessage = 'esta url no es correcta'