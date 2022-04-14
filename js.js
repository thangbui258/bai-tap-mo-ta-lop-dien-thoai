class Mobile {
    constructor(name) {
        this.name = name;
        this.pin = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = '';
        this.status = false;
    }

    writeMessage(text) {
        if (this.status == true) {
            this.message = text;
            this.pin = this.pin - 5;
        } else {
            alert('dien thoai dang tat, vui long bat dthoai')
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    sendMessage(phone) {
        this.outbox.push(this.message);
        phone.inbox.push(this.message);
        this.pin = this.pin - 5;
    }

    changePin() {
        if (this.pin < 10) {
            setTimeout(this.pin = 100, 10000) //pin se xac day 100 sau 10s
        }
    }

}


let samsung = new Mobile("samsung");
let iphone = new Mobile("iphone");
samsung.changePin()
showPin()
samsung.turnOn()
iphone.turnOn()

function showPin() {
    document.getElementById('pinIphone').innerHTML = iphone.pin;
    document.getElementById('pinSamsung').innerHTML = samsung.pin;

}


function soanIp() {
    let noiDung = prompt('nhap noi dung tin nhan')
    iphone.writeMessage(noiDung)
}

function ip_gui() {
    iphone.sendMessage(samsung)
    showPin()
    iphone.changePin()
}


// function ss_gui () {
//     samsung.sendMessage(iphone)
// }
//
// function soanSs() {
//     let noiDung = prompt('nhap noi dung tin nhan')
//     samsung.writeMessage(noiDung)
// }
//
// function hop_thu_den_ip () {
//     for (let i=0; i<iphone.inbox.length; i++) {
//     document.getElementById('hop_thu_den_IP').innerHTML += iphone.inbox[i] + "<br>"
//     }
// }
//
function hop_thu_den_ss() {
    let html_den_ss = `<ul>`;
    for (let i = 0; i < samsung.inbox.length; i++) {
        html_den_ss += `<li>${samsung.inbox[i]}</li>`
    }
    html_den_ss += `</ul>`;
    document.getElementById('hop_thu_den_SS').innerHTML = html_den_ss

}

function hop_thu_di_ip() {
    let html = `<ul>`;
    for (let i = 0; i < iphone.outbox.length; i++) {
        html += `<li>${iphone.outbox[i]}</li>`
    }
    html += `</ul>`;
    document.getElementById('hop_thu_di_IP').innerHTML = html
}

//
// function hop_thu_di_ss () {
//     for (let i=0; i<samsung.outbox.length; i++) {
//         document.getElementById('hop_thu_di_SS').innerHTML += samsung.outbox[i] + "<br>"
//     }
// }
//
//
//
//
//

//
