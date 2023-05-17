(()=>{"use strict";var e,t={911:(e,t,n)=>{var r=n(294),o=n(745),l=n(655),a=n(250);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){var e,t,n=(0,a.s0)(),o=(e=(0,l.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,u=[],i=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement("div",null,"Currently Employed:"," ",r.createElement("select",{value:o.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(l){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(f(e)),e}return t=u,(n=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}},{key:"render",value:function(){return r.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",r.createElement("input",{type:"text",name:"name"}),r.createElement("br",null),"Extension: ",r.createElement("input",{type:"text",name:"ext",maxLength:4}),r.createElement("br",null),"Email: ",r.createElement("input",{type:"text",name:"email"}),r.createElement("br",null),"Title: ",r.createElement("input",{type:"text",name:"title"}),r.createElement("br",null),r.createElement("button",null,"Add"))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function O(e){var t=(0,a.TH)().search,n=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(g,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement("table",{className:"bordered-table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Action"),r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,o))}function g(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(l.rU,{to:"/edit/".concat(e.employee._id)},"Edit")),r.createElement("td",null,e.employee.name),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement("button",{onClick:function(){e.deleteEmployee(e.employee._id)}},"DELETE")))}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(l){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(h(e)),e.deleteEmployee=e.deleteEmployee.bind(h(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){console.log("Total count of employees:",t.count),t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Employee Management Application"),r.createElement(i,null),r.createElement("hr",null),r.createElement(O,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}),r.createElement("hr",null),r.createElement(s,{createEmployee:this.createEmployee}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function w(){return r.createElement("div",null,r.createElement("h1",null,"This is a placeholder for the employee report."))}function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,o,l,a=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(l){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={employee:[]},e.handleSubmit=e.handleSubmit.bind(T(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeUpdate;console.log(t);var n=t.id.value,r=t.name.value,o=t.extension.value,l=t.email.value,a=t.title.value,u=t.currentlyEmployed.value,i="/api/employees/".concat(n);fetch(i,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:r,extension:o,email:l,title:a,currentlyEmployed:!!u})}).then((function(e){return e.json()})).then((function(e){document.getElementById("message").innerHTML=e.msg}))}},{key:"render",value:function(){return r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement("h1",null,"Edit ",this.state.employee.name," "),"ID:",r.createElement("br",null),r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}),r.createElement("br",null),"Name:",r.createElement("br",null),r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}),r.createElement("br",null),"Extension:",r.createElement("br",null),r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}),r.createElement("br",null),"Email:",r.createElement("br",null),r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}),r.createElement("br",null),"Title:",r.createElement("br",null),r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}),r.createElement("br",null),"Date Hired:",r.createElement("br",null),r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}),r.createElement("br",null),"Currently Employed?",r.createElement("br",null),r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}),r.createElement("br",null),r.createElement("br",null),r.createElement("input",{type:"submit",value:"Update"}),r.createElement("p",{id:"message"}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function D(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/employees",element:r.createElement(j,null)}),r.createElement(a.AW,{path:"/edit/:id",element:r.createElement(k,null)}),r.createElement(a.AW,{path:"/report",element:r.createElement(w,null)}),r.createElement(a.AW,{path:"/",element:r.createElement(a.Fg,{replace:!0,to:"/employees"})}),r.createElement(a.AW,{path:"*",element:r.createElement(e,null)}))}function A(){var e=function(){return r.createElement("span",null," | ")};return r.createElement("nav",null,r.createElement(l.OL,{end:!0,to:"/"},"Home"),r.createElement(e,null),r.createElement(l.OL,{to:"/employees"},"All Employees"),r.createElement(e,null),r.createElement(l.OL,{to:"/report"},"Reports"))}function R(){return r.createElement("div",null,r.createElement(A,null),r.createElement(D,null))}(0,o.s)(document.getElementById("content")).render(r.createElement(l.VK,null,r.createElement(r.StrictMode,null,r.createElement(R,null))))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,o,l]=e[m],u=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(u=!1,l<a&&(a=l));if(u){e.splice(m--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,o,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={624:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,u,i]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(i)var m=i(r)}for(t&&t(n);c<a.length;c++)l=a[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(m)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(911)));o=r.O(o)})();
//# sourceMappingURL=employees.bundle.js.map