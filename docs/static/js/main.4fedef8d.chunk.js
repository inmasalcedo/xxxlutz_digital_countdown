(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={Countdown:"Cuenta atr\xe1s",Days:"D\xedas",Hours:"Horas",Minutes:"Minutos",Seconds:"Segundos"}},25:function(e){e.exports={Countdown:"Countdown",Days:"Days",Hours:"Hours",Minutes:"Minutes",Seconds:"Seconds"}},26:function(e,t,n){e.exports=n(60)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(19),r=n.n(s),c=(n(32),n(12)),i=n(13),u=n(15),m=n(14),l=n(16),d=(n(33),n(34),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.days,n=e.textdays,a=e.hours,s=e.texthours,r=e.minutes,c=e.textminutes,i=e.seconds,u=e.textseconds;return o.a.createElement("div",{className:"dateBox--container"},o.a.createElement("h2",{className:"dateBox--number"},t,a,r,i),o.a.createElement("h2",{className:"dateBox--text"},n,s,c,u))}}]),t}(a.Component)),h=n(11),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currentTime:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date("December 25, 2019 12:00:00").getTime();setInterval(function(){var n=(new Date).getTime(),a=t-n;if(a>=0){var o=Math.floor(a/31104e6),s=Math.floor(a/2592e6),r=Math.floor(a/864e5),c=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),u=Math.floor(a%6e4/1e3);return e.setState({currentTime:n,years:o,months:s,days:r,hours:c,minutes:i,seconds:u}),{days:r,hours:c,minutes:i,seconds:u}}})}},{key:"render",value:function(){var e=this.state,t=e.days,n=e.hours,a=e.minutes,s=e.seconds,r=this.props.t;return o.a.createElement("div",{className:"app"},o.a.createElement("header",{className:"header--container"},o.a.createElement("h1",null,r("Countdown"))),o.a.createElement("main",{className:"main--container"},o.a.createElement(d,{days:t,textdays:r("Days")}),o.a.createElement(d,{hours:n,texthours:r("Hours")}),o.a.createElement(d,{minutes:a,textminutes:r("Minutes")}),o.a.createElement(d,{seconds:s,textseconds:r("Seconds")})))}}]),t}(a.Component),p=Object(h.c)("common")(f),y=n(17),v=n(22),b=n.n(v),w=n(23),x=n.n(w);y.a.use(b.a).use(x.a).use(h.b).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});var E=y.a;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(24),j=n(25);E.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:j},es:{common:M}}}),r.a.render(o.a.createElement(h.a,{i18n:E},o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.4fedef8d.chunk.js.map