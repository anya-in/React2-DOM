// console.dir(document);//Examine the Document Object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textcontent='Hello';
// console.log(document.form);
// console.log(document.links);
// //Get Element By ID//
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent ='Hello';
// //headerTitle.style.borderBottom ='solid 3px #000';
// header.style.borderBottom ='solid 3px #000';
// //GETELEMENTSBYCLASSNAME//
// // var items=document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent='Hello';
// // items[1].style.fontWeight ='bold';
// // items[1].style.backgroundColor ='yellow';
// // for(var i=0;i<items.length;i++){
// //   items[i].style.backgroundColor="#D5DCF7";}


//   //QUERYSELECTOR//
//   //var header = document.querySelector('main-header');
//  // header.style.borderBottom ='solid 4px #ccc';
//   // var input =document.querySelector('input');
//   // input.value='Hello World'
//   // var submit = document.querySelector('input[type="submit"]');
//   // submit.value="SEND"
//   // var item = document.querySelector('.list-group-item');
//   // item.style.color ='red';
//   // var lastItem = document.querySelector('.list-group-item:last-child');
//   // lastItem.style.color='blue';
//   // var secondItem =document.querySelector('.list-group-item:nth-child(2)');
//   // secondItem.style.color='coral';

//   //QUERY SELECTOR ALL//
//   // var titles = document.querySelectorAll('.title');
//   // console.log(titles);
//   //titles[0].textContent='Hello';

//   // var odd =document.querySelectorAll('li:nth-child(odd');
//   // for(var i=0;i<odd.length;i++){
//   //   odd[i].style.backgroundColor = '#f4f4f4';
//   //   even[i].style.backgroundColor='#ccc';
//   // }
//   //TRAVERSING A DOM//
//   var itemList = document.querySelector('#items');
//   //parentNode
//   // console.log(itemList.parentNode);itemList.parentNode.style.backgroundColor='#f4f4f4';
//   // console.log(itemList.parentNode.parentNode);

//   //PARENT ELEMENT//
//   console.log(itemList.parentElement);itemList.parentElement.style.backgroundColor='#f4f4f4';
//   console.log(itemList.parentElement.parentElement);

//   //CHILDNODES//
//   //console.log(itemList.childNodes);
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.background = 'yellow';
// //firstChild//
// // console.log(itemList.firstChild);
// //previousSibling//
// //console.log(itemList.previousSibling);
// //previousElementSibling//
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color='green';
// //CreateElement
// //  //Create a div
// //  var newDiv = document.createElement('div');
// //  //add class
// //  newDiv.className ='hello';
// //  //Add id
// //  newDiv.id='hello1'
// //  //Add attr
// //  newDiv.setAttribute('title','Hello Div');
// //  //Create Text Node
// //  var newDivText = document.createTextNode('Hello World');
// //  //Add text to Div

// //  newDiv.appendChild(newDivText);

// //  var container = document.querySelector('header.container');
// //  var h1 =document.querySelector('header h1');
// //   console.log(newDiv);
// // newDiv.style.fontSize ='30px';
// //   container.insertBefore(newDiv,h1);

// //var button = document.getElementById('button').addEventListener('click',buttonClick);
// // function buttonClick(e){
// //   // document.getElementById('header-title').textContent ='Changed';
// //   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// //   //console.log(e);
// //   // console.log(e.target);
// //   // console.log(e.target.id);
// //   console.log(e.clientX);

// // }
// var box=document.getElementById('box');
// // var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// //var select =document.querySelector('select');
// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);
// // box.addEventListener('mouseover',runEvent);
// // box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);
// //itemInput.addEventListener('keydown',runEvent);
// //itemInput.addEventListener('cut',runEvent);
// // select.addEventListener('change', runEvent);
// // select.addEventListener('input', runEvent);
//form.addEventListener('submit',runEvent);
// // function runEvent(e){
// //   e.preventDefault();
// //   console.log('Event Type:'+e.type);
  
// //}
// function runEvent(e){
//   console.log('Event Type:'+e.type);

//   document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
// }



