window.onload = function() {
    var fonts = ['"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif'];

    document.getElementById('helloWorldButton').addEventListener('click', function() {
        var newMessage = document.createElement('p');
        newMessage.textContent = 'Hello, World!';
        
        var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        newMessage.style.fontFamily = randomFont;

        document.getElementById('content').appendChild(newMessage);
    });
}
