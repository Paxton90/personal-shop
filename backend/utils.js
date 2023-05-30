import jwt from 'jsonwebtoken'


export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d'
        }
    )
}

export const decodeToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded
    } catch (err) {
        console.error(err);
        return null
    }
}

export const userDataFilter = (user) => {
    const { __v, password, ...userData } = user.toObject()
    return userData
}