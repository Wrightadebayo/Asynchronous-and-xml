// console.log('hello world')
// const array = ['friend','friend2','friend3','friend4']
// const [first,second,third,fourth] = array
// console.log(fourth)



// const wallHeight = 80

// function calculate(value){
//   console.log('hello '  + value * 2.54 + 'cm' )
//   return 'hello class'
// }

// const width = calculate(100)
// const height = calculate(wallHeight)
// const dimension = [width,height]
// console.log(dimension)

const value = false
if(value ){
  console.log('hello world')
}

const num1 = 5
const num2 = "3"

const num = num1 + num2
console.log(num)


const numbers = [0,1,2,3,4]
for(let i = 0;i < numbers.length;i++){
  console.log(numbers[i])
}

const people = [
 { name:'gbenga',age:23,position:'ui/ux'},
 { name:'gbenga',age:24,position:'designer'},
 { name:'gbenga',age:22,position:'developer'}
]

const name = people.find(function(person){
  return person.position === 'designer'
  
})
// document.body.innerHTML = name.join( ' ')
console.log(name)
// function showPerson(person){
// console.log(person)
// }
// people.forEach(showPerson)

people.forEach(function(item){
  console.log(item.position.toUpperCase())
})


// const element = document.getElementById('title')
// element.style.color = 'red'

// const result = document.getElementById('result')
// const values = result.firstChild.nodeValue
// const itemss = result.textContent
// console.log(itemss)
// console.log(values)

// const first = document.querySelector('.first')
// const second = first.textContent
// console.log(second)

// const result = document.querySelector('.result')
// const bodyDiv = document.createElement('h1')
// const text = document.createTextNode('hello i love coding')
// bodyDiv.appendChild(text)
// bodyDiv.style.color = 'red'
// document.body.appendChild(bodyDiv)

// const world = document.querySelector('.result')
// const result = document.querySelector('.btn')
// result.addEventListener('click',function(){
  
//   // console.log('hey u clicked me')
// });

// function createPerson(firstname,lastname){
//   return{
// firstName:firstname,
//   lastName:lastname,
//   showThis:function(){
//     console.log(`hello world this is ${this.firstName} and ${this.lastName}`)
//   }
//   }
  
// }
// const bob = createPerson('bola','kike')
// bob.showThis()
// const dre = createPerson('banji','gbenga')
// dre.showThis()

// const names = 'dream';

// const person = `this is a ${names}`
// console.log(person)
// console.log(person.name)

// function hello(value,value2){
//   return `${value}  ${value2}`
// }
// hello('hello','bisi')

// let value = 20

function hello(value, value2) {
  return value * value * 20;
}
console.log(hello(20,40))

const sayHi = (sum,sum2)=> {
const num = sum + sum2
return num
}
console.log(sayHi(20,20))


const numberss = [1,2,3,4,5,6]
// const arrow = numberss.map(function(number){
// return number > 2
// })

const arrow = numberss.filter((number,index) => {
  console.log(index)
  return number > 2
})

console.log(arrow)


// const fruits = ['apple','guava','cashew','mango'] 
// const longName = 'john anna Abel'
// const shortName = ''
// for(const letter of longName){
//   if(letter === ' '){
//     continue
//   } else{
// shortName += letter
//   }
// }
// console.log(shortName)


const person = {
  name:'Lami',
  job: 'developer'
}

const peoples = {...person}
console.log(peoples)

const udemy = 'udemy';
const demy = [...udemy]
console.log(demy)

// const water1 =20
// const water2 =20

// function boilwater(){
//   console.log(`${water1 + water2}`)
// // return water1 + water2
// }
// boilwater()
// console.log(namee)
// var namee = 'random'

// const someFunc = async ()=>{
//   await 
// }
const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
getData()

})

const getData = ()=>{
const xhr = new XMLHttpRequest()
console.log(xhr)
xhr.open('GET','./api/sample.txt')
xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status === 200){
const text = document.createElement('p')
text.textContent = xhr.responseText
document.body.appendChild(text)
}
else{
  console.log({
    status:xhr.status,
    text:xhr.statusTexttext
  })
}
}
xhr.send()
}

