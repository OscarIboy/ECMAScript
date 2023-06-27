function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 26;
    var country = country || 'Guatemala';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'Mexico');

function newAdmin(name = 'Eduardo', age = 32, country = 'Honduras') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ivan', 16, 'Panama');