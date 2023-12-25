const requestUrl = ('https://jsonplaceholder.typicode.com/users');
// Задание №1

let But = document.querySelector('.but');
function num() {
const url1 = 'https://randomuser.me/api/';
fetch(url1)
.then(data => data.json())
.then(data => {
console.log(data.results[0]);
});
}
But.onclick = num;

// Задание №2 не решена

let But1 = document.querySelector('.but1');
function num1() {

    // let ren = document.getElementById('ren');
    async function getPosts(id){
    const [userType, userId] = id.split('-');
    const response = await fetch(`https://604781a0efa572c1.mokky.dev/items/${userId}`);
    return await response.json();
}

getPosts('user-5')
.then(user => console.log(user))
.then(ren => 
    document.getElementById('ren').innerHTML = JSON.stringify(ren))
// .then(userId => ren == userId)
.catch(err => console.log(err));
      }
      But1.onclick = num1;


// Задание №3

let But2 = document.querySelector('.but2');
function num2() {
    fetch ('https://604781a0efa572c1.mokky.dev/items')
.then(response => response.json())
.then(data => 
    document.querySelector('.di').innerHTML = JSON.stringify(data)
    )
    .catch(console.error);

      }
      But2.onclick = num2;

// Задание №4

let But3 = document.querySelector('.but3');
function num3() {

function request(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve('Привет! Как дела?')
            }, 1000);
    })
    }
    request()
        .then((response) => {
            console.log(response);
            return "Привет! Все отлично!";
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            console.error('операция выполнена с ошибкой и завершена')
        });

}
But3.onclick = num3;

// Задание №5

let But4 = document.querySelector('.but4');
function num4() {

setInterval(function() {
fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}, 5000);

}
But4.onclick = num4;