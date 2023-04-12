const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState==4){
        xhr.status ===200 ? console.log(xhr.responseTest) : console.erron('error');
    }
};

xhr.open('GET','http://youtube.com');
xhr.send();