(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),l=(n(12),n(13),n(3)),o=n(4),m=n(6),s=n(5),d=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).click=function(){var t=e.props,n=t.letter,a=t.name,r=document.getElementById(n);r.currentTime=0,r.play(),document.getElementById("text").textContent=a},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.letter;document.addEventListener("keydown",function(n){"".concat(n.key).toUpperCase()===t&&e.click()})}},{key:"render",value:function(){var e=this,t=this.props.letter;return r.a.createElement("div",{id:t+"-pad",className:"drum-pad btn btn-primary col p-2 m-2 justify-content-center",onClick:function(){return e.click()},style:{width:"10rem",height:"10rem"}},r.a.createElement("h1",{style:{display:"flex"},verticalAlign:"middle",className:"align-items-center h-100 text-center justify-content-center"},t),r.a.createElement("audio",{src:"./audio/"+t+".mp3",id:t,className:"clip"}))}}]),n}(a.Component);var u=function(){return r.a.createElement("div",{id:"drum-machine",className:"row container-fluid justify-content-center",style:{height:"90vh"}},r.a.createElement("div",{id:"display",className:"card w-50 h-100 align-self-center m-3"},r.a.createElement("h5",{className:"card-header text-center",id:"text"},"..."),r.a.createElement("div",{className:"card-body container-fluid h-100"},r.a.createElement("div",{className:"row"},r.a.createElement(d,{letter:"Q",name:"Synthesized piano note 11"}),r.a.createElement(d,{letter:"W",name:"Synthesized piano note 12"}),r.a.createElement(d,{letter:"E",name:"Synthesized piano note 13"})),r.a.createElement("div",{className:"row"},r.a.createElement(d,{letter:"A",name:"Synthesized piano note 14"}),r.a.createElement(d,{letter:"S",name:"Synthesized piano note 15"}),r.a.createElement(d,{letter:"D",name:"Synthesized piano note 16"})),r.a.createElement("div",{className:"row"},r.a.createElement(d,{letter:"Z",name:"Synthesized piano note 17"}),r.a.createElement(d,{letter:"X",name:"Synthesized piano note 18"}),r.a.createElement(d,{letter:"C",name:"Synthesized piano note 19"})))))};i.a.render(r.a.createElement(u,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.813f6728.chunk.js.map