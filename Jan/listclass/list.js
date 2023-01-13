
/**
 *  Create a list class such that it can store list of item
 *  
 *   addItem() -> This should be able to add a item inside list
 *   renderList -> This should be able to render list item on UI
 *   deleteItem -> This should delete item from list
 *   updateItem -> This should update item from list
 */
const inputElement = document.getElementById('item'),
    addBtn = document.getElementById('add')
    listContainer = document.getElementById('list');

class List {
    constructor() {
        this.listItem = [],
        this.parentElement = listContainer;
        this.deleteItem = this.deleteItem.bind(this);
    }

    add(item) {
        this.listItem.push(item);
        return;
    }

    deleteItem(event) {
        const idx = event.target.id;
        this.listItem.splice(idx,1);
        this.renderList();
    }
    
    static createItemElement (task,deleteFn,idx) {
        const div = document.createElement('div');
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.id = idx
        btn.textContent = 'Delete';
        btn.onclick = deleteFn;
        li.textContent = task;

        div.appendChild(li);
        div.appendChild(btn);
        return div;
    }

    renderList() {

        while(this.parentElement.firstChild) {
            this.parentElement.removeChild(this.parentElement.firstChild);
        }

        this.listItem.map((item ,index)=> {
            const liElement = List.createItemElement(item,this.deleteItem,index);
            this.parentElement.appendChild(liElement)
        })
        
    }
}

const listItem = new List();

 document.cookie = "name=ABC;";
 var now = new Date();
 var time = now.getTime();
 var expireTime = time + 5000;
 now.setTime(expireTime);
 document.cookie = "user=Anshu;expires=" + now.toUTCString() + ";path=/";

console.log("Info",listItem,addBtn);
const handleAddBtnClick = ()=> {
    const task = inputElement.value;
    listItem.add(task);
    inputElement.value = '';
    console.log("Items",listItem.listItem);
    listItem.renderList();
   
}


addBtn.addEventListener('click', handleAddBtnClick)

