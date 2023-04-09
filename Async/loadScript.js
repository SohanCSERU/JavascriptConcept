function loadScript(src){
    let script=document.createElement('script');
    script.src=src;
    document.head.appendChild(script);
}

loadScript('./app.js');