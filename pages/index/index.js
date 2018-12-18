//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todoList:[
      {
        name:"scmh",
        wan:false
      },
      {
        name: "dfgbfdg",
        wan: false
      },
      {
        name: "lipu",
        wan: false
      }
    ],
    newwork:""
  },
  additem(e){
    if(e.detail.value){
      this.data.newItem = e.detail.value;
      this.data.todoList.push({name:this.data.newItem,wan:false});
      var newArr = this.data.todoList;
      this.setData({
        todoList:newArr,
        newItem:""
      }) 
    }  
  },
  fn(e){
    let index = e.currentTarget.dataset.index;
    this.data.todoList[index].wan = !this.data.todoList[index].wan;
    let tem = this.data.todoList;
    this.setData({
      todoList:tem
    })
  }
})
