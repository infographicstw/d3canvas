var fs,d3,jsdom,circle,svg2png,size,doc,x$,svg,data,i$,i;for(fs=require("fs"),d3=require("d3"),jsdom=require("jsdom"),circle=require("./share/circle"),svg2png=require("svg2png"),size=2e4,doc=jsdom.jsdom(),x$=svg=doc.createElement("svg"),x$.setAttribute("width","800"),x$.setAttribute("height","600"),x$.setAttribute("xmlns","http://www.w3.org/2000/svg"),data=[],i$=0;size>i$;++i$)i=i$,data.push(i);circle(d3,svg,data,!0),fs.writeFileSync("static-many.svg",svg.outerHTML),svg2png("static-many.svg","static-many.png",function(){});