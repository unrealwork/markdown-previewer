(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(2)),l=n(3),s=n(5),d=n(4),m=n(6),u=n(1),h=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={markdown:""},n.markdownChanged=n.markdownChanged.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"markdownChanged",value:function(e){this.setState({markdown:e.target.value}),this.props.onMarkdownChange(e.target.value)}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("p",{className:"subtitle"},"Editor"),a.createElement("textarea",{className:"textarea",type:"text",id:"editor",placeholder:"Markdown",onChange:this.markdownChanged}))}}]),t}(a.Component)),w=n(9),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={content:e.content},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.content&&e.content!==this.props.content&&this.setState({content:e.content})}},{key:"render",value:function(){return a.createElement("div",{className:"previewHolder"},a.createElement("p",{className:"subtitle"},"Preview"),a.createElement("div",{id:"preview",className:"content",dangerouslySetInnerHTML:{__html:w(this.state.content)}}))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={markdown:""},n.handleMarkdown=n.handleMarkdown.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleMarkdown",value:function(e){this.setState({markdown:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container is-fluid"},r.a.createElement("nav",null,r.a.createElement("h2",{className:"title is-2"},"Markdown Preview")),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement("div",{className:"columns is-narrow"},r.a.createElement("div",{className:"column"},r.a.createElement(h,{onMarkdownChange:this.handleMarkdown})),r.a.createElement("div",{className:"column"},r.a.createElement(v,{content:this.state.markdown}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.3edea8f3.chunk.js.map