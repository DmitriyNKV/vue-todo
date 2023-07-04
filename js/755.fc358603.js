"use strict";(self["webpackChunkini"]=self["webpackChunkini"]||[]).push([[755],{2755:function(t,e,o){o.r(e),o.d(e,{default:function(){return A}});var i=function(){var t=this,e=t._self._c;return e("div",[e("router-link",{attrs:{to:"/"}},[t._v("Назад")]),e("hr"),e("div",{},[e("AddTodo",{on:{"add-todo":t.addTodo}})],1),t.todos.length?e("TodoList",{attrs:{todos:t.todos},on:{"remove-value":t.removeItem,"update-todo":t.updateTodo}}):e("h2",[t._v("Нет задач")]),t.todos.length?e("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.removeAllTodos.apply(null,arguments)}}},[t._v(" Сброс ")]):t._e()],1)},d=[],s=(o(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("ul",t._l(t.todos,(function(o,i){return e("TodoValue",{attrs:{itemId:i+1,todo:o},on:{edit:t.editItem,remove:t.removeItem,"update:todo":t.onUpdate}})})),1)])}),l=[],n=function(){var t=this,e=t._self._c;return e("li",[e("span",{class:{done:t.todo.completed}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:[function(e){var o=t.todo.completed,i=e.target,d=!!i.checked;if(Array.isArray(o)){var s=null,l=t._i(o,s);i.checked?l<0&&t.$set(t.todo,"completed",o.concat([s])):l>-1&&t.$set(t.todo,"completed",o.slice(0,l).concat(o.slice(l+1)))}else t.$set(t.todo,"completed",d)},t.updateTodo]}}),e("strong",[t._v(t._s(t.itemId))]),t._v(" "+t._s(t.todo.title)+" "),t.isEditing?[e("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTitle,expression:"editedTitle"}],staticClass:"form-control",class:{"is-invalid":!t.isTitleValid},attrs:{placeholder:"Введите новое название"},domProps:{value:t.editedTitle},on:{input:function(e){e.target.composing||(t.editedTitle=e.target.value)}}})]:t._e()],2),e("div",[t.isEditing?t._e():e("button",{staticClass:"btn btn-primary m-2",on:{click:function(e){return e.preventDefault(),t.editTodo.apply(null,arguments)}}},[e("i",{staticClass:"bi bi-pencil-square"}),t._v(" Изменить ")]),t.isEditing?e("button",{staticClass:"btn btn-success m-2",attrs:{disabled:!t.isTitleValid},on:{click:function(e){return e.preventDefault(),t.saveTodo.apply(null,arguments)}}},[t._v(" Сохранить ")]):t._e(),e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[t._v(" × ")])])])},a=[],r={props:["todo","itemId"],data(){return{isEditing:!1,editedTitle:this.todo.title}},computed:{isTitleValid(){return this.editedTitle.trim().length>0}},methods:{editTodo(){this.isEditing=!0},saveTodo(){this.isTitleValid&&(this.todo.title=this.editedTitle.trim(),this.isEditing=!1,this.$emit("update:todo",this.todo))},updateTodo(){this.$emit("update:todo",this.todo)}}},c=r,u=o(1001),m=(0,u.Z)(c,n,a,!1,null,"4ac77bfe",null),p=m.exports,v={props:["todos"],components:{TodoValue:p},methods:{onUpdate(t){this.$emit("update-todo",t)},editItem(t){this.$emit("edit",t)},removeItem(t){this.$emit("remove-value",t)}}},h=v,f=(0,u.Z)(h,s,l,!1,null,"ef05c6e2",null),T=f.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("button",{staticClass:"btn btn-primary m-2",attrs:{type:"submit"}},[t._v("Добавить")])])])},b=[],_={data(){return{title:""}},methods:{addTodo(){if(this.title.trim()){const t={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",t),this.title=""}}}},y=_,k=(0,u.Z)(y,g,b,!1,null,"ba8b6376",null),C=k.exports,I={name:"App",data(){return{todos:[{id:1,title:"Купить хлеб",completed:!1},{id:2,title:"Купить масло",completed:!1}]}},components:{TodoList:T,AddTodo:C},async mounted(){const t=localStorage.getItem("todos");this.todos=JSON.parse(t)},methods:{saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))},removeItem(t){this.todos=this.todos.filter((e=>e.id!==t)),this.saveToLocalStorage()},addTodo(t){this.todos.push(t),this.saveToLocalStorage()},updateTodo(t){const e=[...this.todos];e.findIndex((e=>e.id===t.id));this.todos=[...e],this.saveToLocalStorage()},removeAllTodos:function(){this.todos=[],this.saveToLocalStorage()}}},x=I,$=(0,u.Z)(x,i,d,!1,null,null,null),A=$.exports}}]);
//# sourceMappingURL=755.fc358603.js.map