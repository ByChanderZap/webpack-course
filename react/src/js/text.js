function text() {
    document.body.innerHTML = '<p>asdasd mundo desde Webpack! 100</p>'
}

if (module.hot) {
    module.hot.accept('./text.js', function(){
        console.log('He recargado en caliente');
        text();
    });
}

export default text;