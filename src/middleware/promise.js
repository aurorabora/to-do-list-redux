export default store => next => action =>{
    //code goes here
    console.log( 'Action in middleware:', action);

    next(action);
}