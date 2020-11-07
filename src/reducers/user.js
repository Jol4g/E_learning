const userReducer = (user={}, action) =>{
    switch(action.type){
        case 'FETCH':
            user = action.payload.data
            console.log(user)
            return user;
        case 'CREATE':
            return user;
        case 'UPDATE':
            return user;
        default: 
            return user;
    }
}

export default userReducer