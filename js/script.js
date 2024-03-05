function countSame() {
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");
    let option5 = document.getElementById("option5");

    let name = document.getElementById("name").value;

    let count = 0;
    if(option1.checked) {
        count += 1;
    }
    if(option2.checked) {
        count += 1;
    }
    if(option3.checked) {
        count += 1;
    }
    if(option4.checked) {
        count += 1;
    }
    if(option5.checked) {
        count += 1;
    }

    alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);
}
