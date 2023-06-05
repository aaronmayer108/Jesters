window.onload = function() {
    document.getElementById('helloWorldButton').addEventListener('click', function() {
        var newMessage = document.createElement('p');
        newMessage.textContent = 'Hello, World!';
        document.getElementById('content').appendChild(newMessage);
    });
}
