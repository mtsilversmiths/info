function ActionHtmlWindow(a){var b=this,c=function(a){var b=a.split(";"),c=b[0]||"",d=/^(<iframe|<embed).*(<\/iframe>|<\/embed>)$/.test(c)?c:"";return{oldSrc:c,src:c.replace(/^http:/,window.location.protocol),width:b[1]||600,height:b[2]||340,title:b[3]||"",iStr:d}},d=function(a,b){document.all?a.style.filter="alpha(opacity="+b+")":a.style.opacity=b/100},e=c(a),f=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createElement("iframe"),k=f.style,l=g.style,m=h.style,n=i.style,o=j.style,p=function(a){var b=document.createElement("div");return b.innerHTML=a,b.childNodes[0]},q=document.createElement("div"),r=q.style,s=0;""!=e.title&&" "!=e.title&&(i.appendChild(q),s=30),r.height=s,q.innerHTML=e.title,r.lineHeight=s-1+"px",r.fontSize="16px",r.borderBottom="1px solid #c1c1c1",r.paddingLeft="8px";var t=document.createElement("div"),u=t.style;u.position="relative",u.display="block",u.backgroundColor="#fff",u.lineHeight="0px",u.margin="0",u.width="100%",u.maxWidth=e.width+"px",u.height=e.height+"px",k.position="fixed",k.top="0",k.right="0",k.bottom="0",k.left="0",k.zIndex="1040",k.opacity=.5,k.backgroundColor="#000",d(f,50),l.position="fixed",l.top="0",l.right="0",l.bottom="0",l.left="0",l.zIndex="1040",l.padding="0",l.border="none",l.margin="0",l.overflow="auto",n.position="relative",n.display="block",n.backgroundColor="#fff",n.lineHeight="0px",n.margin="0 auto",n.maxWidth="100%",n.width=e.width+"px",n.height=parseInt(e.height)+s+"px",m.position="fixed",m.width="60px",m.height="60px",m.top="0px",m.right="0px",m.overflow="hidden",m.cursor="pointer",h.title="Close",h.innerHTML="<img src='../../../2019-Signature-Trophy-Buckles-Awards/js/files/extfiles/close_btn.png' style='width:100%;height:100%;'>";var v=new Image;if(v.onload=function(){h.innerHTML="<img src='../../../2019-Signature-Trophy-Buckles-Awards/js/files/extfiles/close_btn.png' style='width:100%;height:100%;'>"},v.onerror=function(){h.innerHTML="<img src='../files/extfiles/close_btn.png' style='width:100%;height:100%;'>"},v.src="files/extfiles/close_btn.png",g.appendChild(i),g.appendChild(h),i.appendChild(t),""==e.iStr){o.position="relative",o.border="none",o.margin="0",o.padding="0",o.left="0px",o.top="0px",j.setAttribute("frameborder",0),j.setAttribute("allowfullscreen",!0),j.width="100%",j.height="100%",j.src=e.src,t.appendChild(j);try{$.ajax({url:e.src,type:"GET",dataType:"jsonp",timeout:3e3,complete:function(a){200==a.status||(j.src=e.oldSrc)}})}catch(e){}}else{var w=p(e.iStr),x=w.style;x.position="relative",x.border="none",x.margin="0",x.padding="0",x.left="0px",x.top="0px",x.width="100%",x.height="100%",t.appendChild(w)}var y=document.getElementsByTagName("body")[0];y.appendChild(f),y.appendChild(g),g.onclick=function(){var a=document.getElementsByTagName("body")[0];a.removeChild(f),a.removeChild(g)},i.onclick=function(a){return a.preventDefault(),!1},h.onclick=function(a){a.stopPropagation(),a.preventDefault();var b=document.getElementsByTagName("body")[0];return b.removeChild(f),b.removeChild(g),window.FlipBookBuilder.onCloseHtml&&window.FlipBookBuilder.onCloseHtml(),!1},setTimeout(function(){b.box=g,b.bg=f},0);var z=function(){var a=window.innerHeight||$(window).height(),b=parseInt(e.height)+s;if(b>=a-20){var c=a-20,d=c-s;n.height=c+"px",u.height=d+"px"}else n.height=b+"px",u.height=e.height+"px";n.marginTop=Math.max(10,(g.clientHeight-(parseInt(e.height)+s))/2)+"px",n.marginBottom=Math.max(10,(g.clientHeight-(parseInt(e.height)+s))/2)+"px"};z(),window.onresize=function(){z()}}ActionHtmlWindow.prototype={constructor:ActionHtmlWindow,destroy:function(){var a=document.getElementsByTagName("body")[0];a.removeChild(this.bg),a.removeChild(this.box),window.FlipBookBuilder.onCloseHtml&&window.FlipBookBuilder.onCloseHtml()}};