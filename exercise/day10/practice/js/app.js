let user;
function addUser() {
    user = {
        name: 'a',
        age: 50,
        isAdmin: 'true'
    };
    return user;
}

for(let key in addUser()){
    console.log(`${key} : ${user[key]}`);
}