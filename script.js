const show = document.getElementById('show');
let pw = document.querySelector('#pw')
let flag = true;
show.addEventListener('click', () => {
    console.dir(pw);
    if (flag == true) {
        pw.attributes[0].value = 'text';
        flag = false;
    }
    else {
        pw.attributes[0].value = 'password';
        flag = true;
    }
})