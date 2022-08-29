"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[59,17],{8017:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,a,i,s,c=t(5861),l=t(885),d=t(4687),u=t.n(d),p=t(2791),f=t(5048),x=t(6871),h=t(4554),g=t(1134),m=t(4373),b=t(6856),Z=t(6355),j=t(6881),v=t(168),w=t(7691),k=w.ZP.form(r||(r=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),y=w.ZP.button(o||(o=(0,v.Z)(["\n  background-color: #f5f5f5;\n  border: none;\n"]))),F=w.ZP.input(a||(a=(0,v.Z)(["\n  width: 334px;\n  height: 24px;\n  display: block;\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.2px;\n  outline: none;\n\n  border-left-style: none;\n  border-top-style: none;\n  border-right-style: none;\n  border-bottom-color: #202124;\n\n  &:focus {\n    border-bottom-color: #0088cc;\n  }\n"]))),C=w.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n"]))),P=w.ZP.button(s||(s=(0,v.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: #0088cc;\n  background-color: #ffffff;\n\n  border: none;\n"]))),z=t(4509),A=t(184),S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,height:400,bgcolor:"#FFFFFF",boxShadow:24,p:4},L={fill:"#8C8C8C",display:"block",marginLeft:"auto",marginRight:"auto"},N={bgcolor:"#FFFFFF"},_=function(n){var e=n.contactId,t=(0,f.v9)((function(n){return n.contacts.items})),r=(0,x.s0)(),o=(0,p.useState)(""),a=(0,l.Z)(o,2),i=a[0],s=a[1],d=(0,p.useState)(""),v=(0,l.Z)(d,2),w=v[0],_=v[1],I=(0,p.useState)(!1),q=(0,l.Z)(I,2),B=q[0],K=q[1],M=(0,z.s$)(),Y=(0,l.Z)(M,1)[0],$=t?t.find((function(n){return n.id===e})):{},D=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":s(r);break;case"number":_(r.toLowerCase());break;default:return}},G=function(){K(!1),r("/contacts")},H=function(){var n=(0,c.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,Y({name:i,number:w});case 4:K(!1),r("/contacts"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:t&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y,{onClick:function(){K(!0),r("/contacts/".concat(e))},sx:N,children:(0,A.jsx)(b.mM_,{size:25})}),(0,A.jsx)(g.Z,{open:B,onClose:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,A.jsxs)(h.Z,{sx:S,children:[(0,A.jsx)(P,{onClick:G,children:(0,A.jsx)(m.j7p,{size:"26"})}),(0,A.jsxs)(k,{onSubmit:H,children:[(0,A.jsx)(m.KQH,{size:"200",style:L}),(0,A.jsxs)(C,{children:[(0,A.jsx)(Z.BKo,{size:"20"}),(0,A.jsx)("label",{children:(0,A.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:$.name,onChange:D,placeholder:"Name"})})]}),(0,A.jsxs)(C,{children:[(0,A.jsx)(b.PnA,{size:"20"}),(0,A.jsx)("label",{children:(0,A.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:$.number,onChange:D,placeholder:"Number"})})]}),(0,A.jsx)(j.Z,{title:"Save"})]})]})})]})})}},4059:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,a=t(168),i=t(7691),s=i.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  padding-left: 10px;\n  padding-right: 10px;\n"]))),c=(i.ZP.button(o||(o=(0,a.Z)(["\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: rgb(113, 113, 238);\n  color: #fff;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: blue;\n  }\n"]))),t(885)),l=t(5048),d=t(7425),u=t(5264),p=t(1413),f=t(1909),x=t(3767),h=t(184);function g(n){var e,t=0;for(e=0;e<n.length;e+=1)t=n.charCodeAt(e)+((t<<5)-t);var r="#";for(e=0;e<3;e+=1){r+="00".concat((t>>8*e&255).toString(16)).slice(-2)}return r}function m(n){return{sx:{bgcolor:g(n),position:"static",marginLeft:2}}}function b(n){var e=n.name;return(0,h.jsx)(x.Z,{direction:"row",spacing:2,children:(0,h.jsx)(f.Z,(0,p.Z)({},m("".concat(e))))})}var Z,j,v,w,k,y,F=t(4509),C=t(8017),P=t(3504),z=i.ZP.div(Z||(Z=(0,a.Z)(["\n  display: flex;\n"]))),A=i.ZP.li(j||(j=(0,a.Z)(["\n  display: flex;\n  width: 100%;\n  height: 56px;\n\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),S=(0,i.ZP)(P.rU)(v||(v=(0,a.Z)(["\n  align-items: center;\n\n  display: flex;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  color: black;\n  cursor: pointer;\n"]))),L=i.ZP.p(w||(w=(0,a.Z)(["\n  text-align: start;\n  width: 200px;\n  margin-left: 16px;\n"]))),N=i.ZP.p(k||(k=(0,a.Z)(["\n  text-align: start;\n  width: 600px;\n  margin-left: 300px;\n"]))),_=i.ZP.button(y||(y=(0,a.Z)(["\n  margin-right: 10px;\n  border: none;\n  background-color: #f5f5f5;\n"]))),I=function(){var n=(0,l.v9)((function(n){return n.contacts.items})),e=(0,F.Nt)(),t=(0,c.Z)(e,1)[0],r=(0,l.v9)((function(n){return n.filter.value})).trim().toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)})).map((function(n){var e=n.name,r=n.id,o=n.number;return(0,h.jsx)(z,{children:(0,h.jsxs)(A,{children:[(0,h.jsxs)(S,{to:"/contacts/".concat(r,"/personInfo"),children:[(0,h.jsx)(b,{name:e}),(0,h.jsx)(L,{children:e}),(0,h.jsx)(N,{children:o})]}),(0,h.jsx)(_,{type:"button",onClick:function(){t(r),u.Notify.success("\u0421ontact deleted")},children:(0,h.jsx)(d.GnT,{size:25})}),(0,h.jsx)(C.default,{contactId:r})]},r)},r)}))},q=t(21),B=function(){var n=(0,F.wY)(),e=n.data,t=n.isFetching;return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(q.Z,{}),e&&(0,h.jsx)(s,{children:(0,h.jsx)(I,{})})]})},K=function(){return(0,F.wY)(),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(B,{})})}}}]);
//# sourceMappingURL=59.edba439d.chunk.js.map