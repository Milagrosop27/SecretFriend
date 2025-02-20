let friends = [];

document.getElementById('friend').addEventListener('input', function(event) {
    let value = event.target.value;
    event.target.value = value.replace(/[^a-zA-Z\s]/g, ''); 
});

document.getElementById('add').addEventListener('click', function() {
    let friend = document.getElementById('friend').value;
    if (friend) {
        friends.push(friend);
        document.getElementById('friend').value = ''; 
        render();
    } else {
        alert('Please enter a friend name');
    }
});

function render() {
    const friendList = document.getElementById('friendlist'); 
    friendList.innerHTML = ''; 

    for (let i = 0; i < friends.length; i++) { 
        const li = document.createElement('li'); 
        li.textContent = friends[i];
        friendList.appendChild(li); 
    }
}

function friendDraw() {
    if (friends.length === 0) {
        alert('No friends available for the draw. Please add some friends first.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    friends.splice(randomIndex, 1);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Your secret friend is: ${selectedFriend}`;
    render();
}

function gameReset() {
    friends = []; 
    document.getElementById('friendlist').innerHTML = ''; 
    document.getElementById('resultado').innerHTML = ''; 
}