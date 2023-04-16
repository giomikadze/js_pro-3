
// 1) Написать скрипт, который выводит списки с товарами
// в интерфейс (на основе массива с объектами).Внизу каждого
// списка выводится итоговая сумма товара. А так же в самом 
// конце выводится итоговая сумма и количество всех товаров.

// const array = [
  //   {
    
  //   title: "BMW",
    
  //   price: "40000",
    
  //   count: "15"
    
  //   },
    
  //   {
    
  //   title: "Toyota",
    
  //   price: "20000",
    
  //   count: "13"
    
  //   },
    
  //   {
    
  //   title: "Ford",
    
  //   price: "30000",
    
  //   count: "20"
    
  //   },
    
  //   {
    
  //   title: "Chevrolet",
    
  //   price: "60000",
    
  //   count: "9"
    
  //   },
    
  //   {
    
  //   title: "Volkswagen",
    
  //   price: "30000",
    
  //   count: "13"
    
  //   },
  
    
  //   ]
  
  // const list = document.createElement('ol')
  // const paragraph = document.createElement('p')
  // const paragraph_1= document.createElement('p')
  
  // let sumPrice = 0;
  // let sumCount = 0;
  
  // for(let i = 0;i < array .length;i++){
  
  //   let mult = 0;
  //   mult  = array [i].price * array [i].count;
  
  
  // let elements = document.createElement('li');
  // elements.innerText = ` марка : ${array[i].title} 
  // цена : ${array [i].price} 
  // количество : ${array[i].count} 
  //   сумма = ${mult}`
  
  // sumPrice += mult ;
  // sumCount +=+array[i].count;
  
  // paragraph.innerText = `итоговая сумма всех автомобилей = ${sumPrice} ;
  
  // количество всех автомобилей = ${sumCount};`
  // list.append(elements);
  // }
  
  
  // document.body.append(list)
  // document.body.append(paragraph)
  // document.body.append(paragraph_1)



// / 2)Напишите скрипт, который выводит в интерфейс следующую
// таблицу(html должен быть пустым, все элементы создаются 
// строго с помощью скриптов):


// let arr= [

//     ['No.','Full Name','Position','Salary'],
//     ['1','Bill Gates','Founder Microsoft','$1000'],
//     ['2','Steve Jobs','Founder Apple','$1200'],
//     ['3','Larry Page','founder Google','$1100'],
//     ['4','Mark zukemberg','Founder Fasebook','$1300'],
    
// ];

// let tab = document.createElement('table');
// tab.setAttribute('border','8')
// for(let i = 0;i < arr.length;i++){
// let row = document.createElement('tr');
// // let tdElem = document.createElement('td')

//   row.innerHTML = `
//   <td>${arr[i][0]}</td>
//   <td>${arr[i][1]}</td> 
//   <td>${arr[i][2]}</td>
//   <td>${arr[i][3]}</td>
//   `
// tab.append(row)

// }
// document.body.append(tab);




// 3)Дан массив из объектов, в котором хранятся породы 
// собак и их возраст.Напишите цикл, который создаст для
// каждого объекта параграфы(Пример как должен выглядеть 
// вывод первого объекта:golden retriever's age is 7 ) и 
// добавит в body.


// const arr = [
//   {
//     breed: "golden retriever",
//     age: 7,
//   },
//   {
//     breed: "labrador retriever",
//     age: 4,
//   },
//   {
//     breed: "french bulldog",
//     age: 12,
//   },
//   {
//     breed: "beagle",
//     age: 6,
//   },
//   {
//     breed: "german shepherd dog",
//     age: 2,
//   },
//   {
//     breed: "poodle",
//     age: 3,
//   },
//   {
//     breed: "bulldog",
//     age: 4,
//   },
// ];



// for(let i = 0;i < arr.length;i++){
//   let dogs = document.createElement('p')
// dogs.innerText = `${arr[i].breed}'s age is ${arr[i].age}`
// document.body.append(dogs)
// }



