(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{80:function(a,e,n){},81:function(a,e,n){},87:function(a,e,n){"use strict";n.r(e);var t=n(0),s=n.n(t),r=n(10),i=n.n(r),c=(n(80),n(81),n(40)),j=n(11),o=n(12),u=n(14),l=n(13),h=n(129),b=n(134),d=n(67),O=n.n(d),p=n(124),x=n(130);function m(a){for(var e,n,t=[],s=0;s<a.length;s++)for(var r=s;r<a.length;r++)s!==r&&(e=a[s][1],n=a[r][1],1===function(a,e){for(var n=0;0!==e;)n=a%e,a=e,e=n;return a}(e,n)?t.push([a[s][1],a[r][1],!0]):t.push([a[s][1],a[r][1],!1]));return t}function f(a,e){for(var n=0;n<e;n++)if(a*n%e===1)return n;return-1}function y(a){var e=1;return a.forEach((function(a){e*=a[1]})),e}function k(a){var e=y(a),n=[];return a.forEach((function(a){n.push(e/a[1])})),n}function g(a){for(var e=0,n=y(a),t=k(a),s=function(a){for(var e=k(a),n=[],t=0;t<a.length;t++)n.push(f(e[t],a[t][1]));return n}(a),r=0;r<a.length;r++)e+=a[r][0]*t[r]*s[r];return[n,t,s,e,e%n]}var v=n(1),q=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=this.props.equations,e=[],n=0;n<a.length;n++)e.push(Object(v.jsxs)(p.a,{children:[" ","x \u2261 ",a[n].a," mod ",a[n].m]}));return e}}]),n}(s.a.Component),E=n(135),C=n(136),S=n(128),B=n(20),M=n.n(B),P=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=this.props.arrayOfEquation.length,e=this.props.solutions[0],n=this.props.solutions[1],t=this.props.arrayOfEquation,s=[],r=0;r<a;r++)s.push(Object(v.jsxs)(p.a,{children:["M",Object(v.jsx)("sub",{children:r+1})," = m/m",Object(v.jsx)("sub",{children:r+1})," = ",e,"/",t[r][1]," = ",n[r]]}));return s}}]),n}(s.a.Component),I=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=this.props.solutions[2],e=this.props.solutions[1],n=this.props.arrayOfEquation,t=[],s=0;s<a.length;s++)t.push(Object(v.jsxs)(p.a,{children:["y",Object(v.jsx)("sub",{children:s+1})," = ",a[s],", karena ",e[s],"*",a[s]," \u2261 1 (mod ",n[s][1],")"]}));return t}}]),n}(s.a.Component),L=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var a=this.props.arrayOfEquation.length,e=this.props.arrayOfEquation,n=[];n.push("m = ");for(var t=0;t<a;t++){var s=[];s.push("m"),s.push(Object(v.jsx)("sub",{children:t+1})),t!==a-1&&s.push(" * "),n.push(s)}n.push(" = ");for(var r=0;r<a;r++){var i=[];i.push("".concat(e[r][1])),r!==a-1&&i.push(" * "),n.push(i)}return n.push(" = ".concat(this.props.solutions[0])),n}}]),n}(s.a.Component),R=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=this.props.arrayOfEquation,e=[],n=0;n<a.length;n++)e.push(Object(v.jsxs)(p.a,{children:[" ","x \u2261 ",a[n][0]," mod ",a[n][1]]}));return e}}]),n}(s.a.Component),T=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=this.props.arrayOfEquation,e=[],n=0;n<a.length;n++)e.push(Object(v.jsxs)(p.a,{children:["a",Object(v.jsx)("sub",{children:n+1})," = ",a[n][0],", m",Object(v.jsx)("sub",{children:n+1})," ="," ",a[n][1]]}));return e}}]),n}(s.a.Component),F=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var a=m(this.props.arrayOfEquation),e=[],n=0;n<a.length;n++)a[n][2]?e.push(Object(v.jsxs)(p.a,{children:["PBB(",a[n][0],",",a[n][1],") = 1"]})):e.push(Object(v.jsxs)(p.a,{children:["PBB(",a[n][0],",",a[n][1],") \u2260 1"]}));return e}}]),n}(s.a.Component),A=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var a=this.props.arrayOfEquation.length,e=this.props.arrayOfEquation,n=this.props.solutions[1],t=this.props.solutions[2],s=[];s.push("Sum = ");for(var r=0;r<a;r++){var i=[];i.push("a"),i.push(Object(v.jsx)("sub",{children:r+1})),i.push("M"),i.push(Object(v.jsx)("sub",{children:r+1})),i.push("y"),i.push(Object(v.jsx)("sub",{children:r+1})),r!==a-1&&i.push(" + "),s.push(i)}s.push(" = ");for(var c=0;c<a;c++){var j=[];c===a-1?j.push("".concat(e[c][0],"*").concat(n[c],"*").concat(t[c])):j.push("".concat(e[c][0],"*").concat(n[c],"*").concat(t[c]," + ")),s.push(j)}return s.push(" = ".concat(this.props.solutions[3])),s}}]),n}(s.a.Component),w=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return function(a){for(var e=m(a),n=!0,t=0;t<e.length;t++)!1===e[t][2]&&(n=!1);return n}(this.props.arrayOfEquation)?Object(v.jsxs)("div",{className:"container-sm",children:[Object(v.jsx)("br",{}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel0a-content",id:"panel0a-header",children:Object(v.jsx)(p.a,{children:"Chinese Remainder Theorem"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(p.a,{children:["Misalkan m",Object(v.jsx)("sub",{children:"1"}),", m",Object(v.jsx)("sub",{children:"1"}),", ..., m",Object(v.jsx)("sub",{children:"n"})," ","adalah bilangan bulat positif sedemikian sehingga PBB(m",Object(v.jsx)("sub",{children:"i"}),",m",Object(v.jsx)("sub",{children:"j"}),") = 1 untuk i \u2260 j."]}),Object(v.jsx)(p.a,{children:"Maka, sistem kekongruenan linier: "}),Object(v.jsxs)(p.a,{children:["x \u2261 a",Object(v.jsx)("sub",{children:"1"})," (mod m",Object(v.jsx)("sub",{children:"1"}),")"]}),Object(v.jsxs)(p.a,{children:["x \u2261 a",Object(v.jsx)("sub",{children:"2"})," (mod m",Object(v.jsx)("sub",{children:"2"}),")"]}),Object(v.jsxs)(p.a,{children:["x \u2261 a",Object(v.jsx)("sub",{children:"n"})," (mod m",Object(v.jsx)("sub",{children:"n"}),")"]}),Object(v.jsxs)(p.a,{children:["mempunyai sebuah solusi unik dalam modulus m = m",Object(v.jsx)("sub",{children:"1*"}),"m",Object(v.jsx)("sub",{children:"2*"}),"...*m",Object(v.jsx)("sub",{children:"n"}),"."]}),Object(v.jsx)(p.a,{children:"(yaitu, terdapat solusi x dengan 0 \u2264 x < m dan semua solusi lain yang kongruen dalam modulus m dengan solusi ini)"}),Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{children:"Secara umum, solusi sistem kekongruenan linier adalah berbentuk"}),Object(v.jsxs)(p.a,{children:["x = a",Object(v.jsx)("sub",{children:"1"}),"M",Object(v.jsx)("sub",{children:"1"}),"y",Object(v.jsx)("sub",{children:"1"})," + a",Object(v.jsx)("sub",{children:"2"}),"M",Object(v.jsx)("sub",{children:"2"}),"y",Object(v.jsx)("sub",{children:"2"})," + ... + a",Object(v.jsx)("sub",{children:"n"}),"M",Object(v.jsx)("sub",{children:"n"}),"y",Object(v.jsx)("sub",{children:"n"})]}),Object(v.jsx)(p.a,{children:"yang dalam hal ini,"}),Object(v.jsxs)(p.a,{children:[" ","M",Object(v.jsx)("sub",{children:"k"})," adalah perkalian semua modulus kecuali m",Object(v.jsx)("sub",{children:"k"})]}),Object(v.jsxs)(p.a,{children:["y",Object(v.jsx)("sub",{children:"k"})," adalah balikan M",Object(v.jsx)("sub",{children:"k"})," dalam modulus m",Object(v.jsx)("sub",{children:"k"})]})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(v.jsx)(p.a,{children:"Langkah 2"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Dari persamaan modulo di atas, diketahui:"}),Object(v.jsx)(T,{arrayOfEquation:this.props.arrayOfEquation})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:Object(v.jsx)(p.a,{children:"Langkah 3"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Cek PBB: "}),Object(v.jsx)(F,{arrayOfEquation:this.props.arrayOfEquation}),Object(v.jsx)(p.a,{children:"Karena semuanya coprime (PBB-nya = 1), maka persamaan di atas dapat diselesaikan menggunakan rumus Chinese Reminder Theorem."})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel4a-content",id:"panel4a-header",children:Object(v.jsx)(p.a,{children:"Langkah 4"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Hitung:"}),Object(v.jsx)(L,{arrayOfEquation:this.props.arrayOfEquation,solutions:this.props.solutions}),Object(v.jsx)(P,{arrayOfEquation:this.props.arrayOfEquation,solutions:this.props.solutions}),Object(v.jsx)(I,{arrayOfEquation:this.props.arrayOfEquation,solutions:this.props.solutions})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel5a-content",id:"panel5a-header",children:Object(v.jsx)(p.a,{children:"Langkah 5"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Maka, solusi dari sistem kekongruenan tersebut adalah"}),Object(v.jsx)(A,{arrayOfEquation:this.props.arrayOfEquation,solutions:this.props.solutions}),Object(v.jsxs)(p.a,{children:["x = sum (mod M) = ",this.props.solutions[3]," (mod"," ",this.props.solutions[0],") = ",this.props.solutions[4]]})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel6a-content",id:"panel6a-header",children:Object(v.jsx)(p.a,{children:"Solusi"})}),Object(v.jsx)(S.a,{children:Object(v.jsx)(p.a,{children:Object(v.jsxs)(p.a,{children:["Jadi, berdasarkan Chinese Reminder Theorem, bilangan bulat positif terkecil yang memenuhi adalah"," ",this.props.solutions[4],"."]})})})]}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",href:"/",children:"Back"}),Object(v.jsx)("br",{})]}):Object(v.jsxs)("div",{className:"container-sm bg-info",children:[Object(v.jsx)("br",{}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(v.jsx)(p.a,{children:"Langkah 1"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Tinjau persamaan modulo:"}),Object(v.jsx)(R,{arrayOfEquation:this.props.arrayOfEquation})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(v.jsx)(p.a,{children:"Langkah 2"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Dari persamaan modulo di atas, diketahui:"}),Object(v.jsx)(T,{arrayOfEquation:this.props.arrayOfEquation})]})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(C.a,{expandIcon:Object(v.jsx)(M.a,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:Object(v.jsx)(p.a,{children:"Langkah 3"})}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Cek PBB:"}),Object(v.jsx)(F,{arrayOfEquation:this.props.arrayOfEquation}),Object(v.jsx)(p.a,{children:"Karena tidak semua coprime (PBB-nya = 1), maka persamaan di atas tidak dapat diselesaikan menggunakan Chinese Reminder Theorem."})]})})]}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",href:"/",children:"Back"}),Object(v.jsx)("br",{})]})}}]),n}(s.a.Component),N=function(a){Object(u.a)(n,a);var e=Object(l.a)(n);function n(){var a;return Object(j.a)(this,n),(a=e.call(this)).handleEquationAChange=function(e){return function(n){var t=a.state.equations.map((function(a,t){return e!==t?a:Object(c.a)(Object(c.a)({},a),{},{a:n.target.value})}));a.setState({equations:t})}},a.handleEquationMChange=function(e){return function(n){var t=a.state.equations.map((function(a,t){return e!==t?a:Object(c.a)(Object(c.a)({},a),{},{m:n.target.value})}));a.setState({equations:t})}},a.handleSubmit=function(e){for(var n=a.state.equations,t=0,s=!1;t<n.length;)(a.state.equations[t].a<=0||a.state.equations[t].m<=0)&&(s=!0),t++;if(s)alert("Bilangan yang dimasukkan tidak valid");else if(n.length<2)alert("Masukkan minimal dua equation");else{for(var r=0;r<n.length;r++)a.state.arrayOfEquation.push([parseInt(a.state.equations[r].a),parseInt(a.state.equations[r].m)]);var i=g(a.state.arrayOfEquation);a.setState({solutions:i}),a.setState({display:!0})}},a.handleAddEquation=function(){a.setState({equations:a.state.equations.concat([{a:0,m:0}])})},a.handleRemoveEquation=function(e){return function(){a.state.equations.splice(e,1),a.setState({equations:a.state.equations})}},a.handleReset=function(){a.setState({display:!a.state.display,equations:[{a:0,m:0}],arrayOfEquation:[],solutions:[]})},a.state={display:!1,equations:[{a:0,m:0}],arrayOfEquation:[],solutions:[]},a}return Object(o.a)(n,[{key:"displayForm",value:function(){var a=this;return Object(v.jsxs)("div",{className:"container-sm",children:[Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{variant:"h6",children:"Apa itu Chinese Remainder Problem?"}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a,{children:"Pada abad pertama Masehi, seorang matematikawan China yang bernama Sun Tse mengajukan pertanyaan sebagai berikut:"}),Object(v.jsx)(p.a,{children:"Tentukan sebuah bilangan bulat yang jika dibagi 5 menyisakan 3, bila dibagi 7 menyisakan 5, dan bila dibagi 11 menyisakan 7."}),Object(v.jsxs)(p.a,{children:["Misalkan bilangan bulat tersebut adalah x. Persoalan tersebut dapat diformulasikan ke dalam sistem kekongruenan linier:"," "]}),Object(v.jsx)(p.a,{children:"x \u2261 3 (mod 5)"}),Object(v.jsx)(p.a,{children:"x \u2261 5 (mod 7)"}),Object(v.jsx)(p.a,{children:"x \u2261 7 (mod 11)"}),Object(v.jsx)(p.a,{children:"Persoalan di atas disebut Chinese Remainder Problem."})]}),Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{variant:"h6",children:"Masukkan persamaan"}),Object(v.jsxs)(p.a,{children:["Format: x \u2261 a",Object(v.jsx)("sub",{children:"i"})," mod m",Object(v.jsx)("sub",{children:"i"})]}),Object(v.jsx)("br",{}),this.state.equations.map((function(e,n){return Object(v.jsxs)(x.a,{container:!0,item:!0,xs:12,direction:"row",alignItems:"center",justify:"center",spacing:3,style:{padding:5},children:[Object(v.jsx)(x.a,{item:!0,children:Object(v.jsx)(b.a,{label:"a".concat(n+1),placeholder:"a".concat(n+1),type:"number",InputLabelProps:{shrink:!0},onChange:a.handleEquationAChange(n),value:e.a,color:"primary",size:"small",variant:"outlined"})}),Object(v.jsx)(x.a,{item:!0,children:Object(v.jsx)(b.a,{label:"m".concat(n+1),placeholder:"m".concat(n+1),type:"number",InputLabelProps:{shrink:!0},onChange:a.handleEquationMChange(n),value:e.m,color:"primary",size:"small",variant:"outlined"})}),Object(v.jsx)(x.a,{item:!0,children:Object(v.jsx)(h.a,{variant:"contained",color:"secondary",startIcon:Object(v.jsx)(O.a,{}),onClick:a.handleRemoveEquation(n),children:"Hapus"})}),Object(v.jsx)("br",{})]})})),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){a.handleAddEquation()},children:"Tambah Persamaan"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{variant:"h6",children:"Tinjau Persamaan"}),Object(v.jsx)(q,{equations:this.state.equations}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){a.handleSubmit()},children:"Selesaikan dengan CRT Solver"})]})," "]})}},{key:"render",value:function(){return this.state.display?Object(v.jsx)(w,{arrayOfEquation:this.state.arrayOfEquation,solutions:this.state.solutions}):this.displayForm()}}]),n}(s.a.Component),W=n(132),z=n(133),D=n(131),J=n(70),H=n(68),K=n.n(H),G=n(69),Q=n.n(G),U=Object(J.a)({palette:{primary:{main:K.a[300]},secondary:{main:Q.a[300]}},status:{danger:"orange"},typography:{fontFamily:"Poppins",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700}});var V=function(){return Object(v.jsx)(D.a,{theme:U,children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(W.a,{position:"sticky",children:Object(v.jsx)(z.a,{children:Object(v.jsx)(p.a,{variant:"h5",children:"Chinese Remainder Solver"})})}),Object(v.jsxs)("body",{children:[Object(v.jsx)("br",{}),Object(v.jsx)(N,{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})]})})},X=function(a){a&&a instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(e){var n=e.getCLS,t=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(a),t(a),s(a),r(a),i(a)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),X()}},[[87,1,2]]]);
//# sourceMappingURL=main.0bca3e0e.chunk.js.map