export const createToken = (user) => {
    return {
        id : user.id,
        email : user.email,
    }
}