// 	// var a= prompt("enter number");
//     //   	alert(a);			


// // function display()
// // {

// //   console.log("hello world");

// // }


// // display();


// var display= function(a,b)    // anonymous function
// {
// 	var c=a+b;
// 	return c;
// }

// var arr=[1,2,3,4];
// console.log(arr);
// // push method

// arr.push(5);  // insert element at last
// console.log(arr);

// // pop   delete last element from array

// arr.pop();

// console.log(arr);

// console.log(display(2,3));

// // objects in javascript


// var student ={
// 	name:"Ravi",
// 	class:7,
// 	all_rounder:true,
// 	siblings:["ram", "shyam"]
// }

// console.log(student.name);

// // addd elements in student object
// student.age=12;

// // making objects in array

// var lis=[

// {
// 	name:"ram",
// 	roll:1
// },

// {
// 	name:"teena",
// 	roll:2
// }
// 	];

// console.log(student);
// console.log(lis[0].name);




// // while loop

// var arri=[1,2,3,4,5];
// ari.forEach(function(i)){
// 	console.log(i);
// }

let countEl= document.getElementById("count-el")
 let saveEl=document.getElementById("save-el");
let count=0;

function increment() {

	count+=1;
    countEl.textContent=count;
}


function saved() {

let countStr=count + " - "
 
 saveEl.textContent+= " "+countStr
countEl.textContent=0;
count=0;

}

// increment();