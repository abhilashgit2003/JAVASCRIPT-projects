let todoList=[];
displayItems();

function addItem(){
  let inputElement=document.querySelector('#TODO-input');
  let inputDate=document.querySelector('#todo-date');
  let todoitem=inputElement.value;
  let tododate=inputDate.value;
  todoList.push({
    item:todoitem,
    date:tododate,
  });
  inputElement.value='';
  inputDate.value='';
  displayItems();
}

function displayItems(){
  let containerElements=document.querySelector('.todo-container');
  let html='';
  for(let i=0;i<todoList.length;i++){
    let item=todoList[i].item;
    let date=todoList[i].date;
     html+=`
     <span>${item}</span>
     <span>${date}</span>
     <button class="del" onClick="todoList.splice(${i},1);
     displayItems();">delete</button>
      ` ;
  }  
  containerElements.innerHTML=html;
}
