function Calc3(){
  var a1=document.getElementById("da").value;
  var b1=document.getElementById("db").value;
  var c1=document.getElementById("dc").value;
    
 
 if(a1===""){
  a1=Math.sqrt((c1*c1)-(b1*b1));
  
  var S1=(a1*b1)/2;
  var h1=(a1*b1)/c1;
  var R1=c1/2;
  var rk1=(a1)/2+b1/2-c1/2;
  var sina=a1/c1;
  var cosa=b1/c1;
  var tga=a1/b1;
  var ctga=b1/a1;
  document.getElementById("au").innerHTML="Дано: b="+b1+" c="+c1;
  document.getElementById("au1").innerHTML="<br>"+"Було обчислено:"+"<br>";
  document.getElementById("ar").innerHTML="a=&#8730c<sup>2</sup>-&#8730b<sup>2</sup>="+a1+" см"+ "<br>";
  document.getElementById("S1").innerHTML="S=a*b/2="+S1+"см<sup>2</sup>"+" -площа"+"<br>";
  document.getElementById("h1").innerHTML="h=a*b/c="+h1+"см"+" -висота"+"<br>";
  document.getElementById("R1").innerHTML="R=c/2="+R1+"см"+" -радіус описаного навколо трикутника кола"+"<br>";
  document.getElementById("r1").innerHTML="r=a+b-c/2="+rk1+"см"+" -радіус вписаного в трикутник кола"+"<br>";
  document.getElementById("sina").innerHTML="sin a=a/c="+sina+"<br>";
  document.getElementById("cosa").innerHTML="cos a=b/c="+cosa+"<br>";
  document.getElementById("tga").innerHTML="tg a=a/b="+tga+"<br>";
  document.getElementById("ctga").innerHTML="ctg a=b/a="+ctga+"<br>";
 }
 
  if(b1===""){
  b1=Math.sqrt((c1*c1)-(a1*a1))
  
  var S1=(a1*b1)/2;
  var h1=(a1*b1)/c1;
  var R1=c1/2;
  var rk1=(a1)/2+b1/2-c1/2;
  var sina=a1/c1;
  var cosa=b1/c1;
  var tga=a1/b1;
  var ctga=b1/a1;
  document.getElementById("au").innerHTML="Дано: a="+a1+" c="+c1;
  document.getElementById("au1").innerHTML="<br>"+"Було обчислено:"+"<br>";
  document.getElementById("ar").innerHTML="b= &#8730c<sup>2</sup>-&#8730a<sup>2</sup>="+b1+" см"+ "<br>";
  document.getElementById("S1").innerHTML="S=a*b/2="+S1+"см<sup>2</sup>"+" -площа"+"<br>";
  document.getElementById("h1").innerHTML="h=a*b/c="+h1+"см"+" -висота"+"<br>";
  document.getElementById("R1").innerHTML="R=c/2="+R1+"см"+" -радіус описаного навколо трикутника кола"+"<br>";
  document.getElementById("r1").innerHTML="r=a+b-c/2="+rk1+"см"+" -радіус вписаного в трикутник кола"+"<br>";
  document.getElementById("sina").innerHTML="sin a=a/c="+sina+"<br>";
  document.getElementById("cosa").innerHTML="cos a=b/c="+cosa+"<br>";
  document.getElementById("tga").innerHTML="tg a=a/b="+tga+"<br>";
  document.getElementById("ctga").innerHTML="ctg a=b/a="+ctga+"<br>";
 }
 
  if(c1===""){
  c1=Math.sqrt((a1*a1)+(b1*b1))
  
  var S1=(a1*b1)/2;
  var h1=(a1*b1)/c1;
  var R1=c1/2;
  var rk1=(a1)/2+b1/2-c1/2;
  var sina=a1/c1;
  var cosa=b1/c1;
  var tga=a1/b1;
  var ctga=b1/a1;
  
  
  document.getElementById("au").innerHTML="Дано: a="+a1+" b="+b1;
  document.getElementById("au1").innerHTML="<br>"+"Було обчислено:"+"<br>";
  document.getElementById("ar").innerHTML="c=&#8730a<sup>2</sup>+&#8730b<sup>2</sup>="+c1+" см"+ "<br>";
  document.getElementById("S1").innerHTML="S=a*b/2="+S1+"см<sup>2</sup>"+" -площа"+"<br>";
  document.getElementById("h1").innerHTML="h=a*b/c="+h1+"см"+" -висота"+"<br>";
  document.getElementById("R1").innerHTML="R=c/2="+R1+"см"+" -радіус описаного навколо трикутника кола"+"<br>";
  document.getElementById("r1").innerHTML="r=a+b-c/2="+rk1+"см"+" -радіус вписаного в трикутник кола"+"<br>";
  document.getElementById("sina").innerHTML="sin a=a/c="+sina+"<br>";
  document.getElementById("cosa").innerHTML="cos a=b/c="+cosa+"<br>";
  document.getElementById("tga").innerHTML="tg a=a/b="+tga+"<br>";
  document.getElementById("ctga").innerHTML="ctg a=b/a="+ctga+"<br>";
 }
 
}

function Calc4(){
  var D2=document.getElementById("Dk").value;
  var r2=document.getElementById("r").value;
  var S2;
  
  if(D2===""){
   D2=2*r2;
   var Pi=3.14;
   S2=Pi*r2*r2;
   
   document.getElementById("dk2").innerHTML="d=2*r="+D2+"см"+"<br>";
   document.getElementById("rk2").innerHTML="r="+r2+"см"+"<br>";
   document.getElementById("sk2").innerHTML="S=Pi*r<sup>2</sup>="+S2;
  }
   if(r2===""){
    r2=D2/2;
    S2=Pi*r2*r2;
    
    document.getElementById("dk2").innerHTML="d="+D2+"см"+"<br>";
   document.getElementById("rk2").innerHTML="r=d/2="+r2+"см"+"<br>";
   document.getElementById("sk2").innerHTML="S=Pi*r<sup>2</sup>="+S2;
   }
 
}

function Calc5(){
  var ap=document.getElementById("ap").value;
  var bp=document.getElementById("bp").value;
  var dp=document.getElementById("dp").value;
  var sp=document.getElementById("sp").value;
  var Rk3;
  var Pp;
  
  if(ap===""){
   if(sp===""){
   ap=Math.sqrt(dp*dp-bp*bp);
   sp=ap*bp;
   Pp=(2*ap)+(2*bp);
   Rk3=dp/2;
   
    
  document.getElementById("uz31").innerHTML="Дано: "+"<br>";
  document.getElementById("a3").innerHTML="a=&#8730d<sup>2</sup>-&#8730b<sup>2</sup>="+ap+"см"+"<br>";
  document.getElementById("b3").innerHTML="b="+bp+"см"+"<br>";
  document.getElementById("d3").innerHTML="d="+dp+"см"+"<br>";
   document.getElementById("rz31").innerHTML="Знайдено: "+"<br>";
  document.getElementById("S3").innerHTML="S=a*b="+sp+"см<sup>2</sup>"+"<br>";
  document.getElementById("P3").innerHTML="P=2*(a+b)="+Pp+"см"+"<br>";
  document.getElementById("R3").innerHTML="R=d/2="+Rk3+"см"+"<br>";
   }
  
  }

  if (dp==="" & ap===""){
   ap=sp/bp;
    Rk3=Math.sqrt(ap*ap+bp*bp)/2;
   dp=2*Rk3;
  Pp=(2*ap)+(2*bp);
   
   document.getElementById("uz32").innerHTML="Дано: "+"<br>";
   document.getElementById("a3n").innerHTML="a=S/b="+ap+"см"+"<br>";
    document.getElementById("b3n").innerHTML="b="+bp+"см"+"<br>";
    document.getElementById("rz32").innerHTML="Знайдено: "+"<br>";
   document.getElementById("d3n").innerHTML="d=2*R="+dp+"см"+"<br>";
   document.getElementById("S3n").innerHTML="S="+sp+"см<sup>2</sup>"+"<br>";
   document.getElementById("P3n").innerHTML="P=2*(a+b)="+Pp+"см"+"<br>";
   document.getElementById("R3n").innerHTML="R=&#8730a<sup>2</sup>+&#8730b<sup>2</sup>/2="+Rk3+"см"+"<br>";
  }
  
  
  
  
  if(bp===""){
   if(sp===""){
   bp=Math.sqrt(dp*dp-ap*ap);
   sp=ap*bp;
   Pp=(2*ap)+(2*bp);
   Rk3=dp/2;
   
    
  document.getElementById("uz31").innerHTML="Дано: "+"<br>";
  document.getElementById("a3m").innerHTML="a="+ap+"см"+"<br>";
  document.getElementById("b3m").innerHTML="b=&#8730d<sup>2</sup>-&#8730a<sup>2</sup>="+bp+"см"+"<br>";
  document.getElementById("d3").innerHTML="d="+dp+"см"+"<br>";
   document.getElementById("rz31").innerHTML="Знайдено: "+"<br>";
  document.getElementById("S3").innerHTML="S=a*b="+sp+"см<sup>2</sup>"+"<br>";
  document.getElementById("P3").innerHTML="P=2*(a+b)="+Pp+"см"+"<br>";
  document.getElementById("R3").innerHTML="R=d/2="+Rk3+"см"+"<br>";
   }
  
  }

  if (dp==="" & bp===""){
   bp=sp/ap;
    Rk3=Math.sqrt(ap*ap+bp*bp)/2;
   dp=2*Rk3;
  Pp=(2*ap)+(2*bp);
   
   document.getElementById("uz32").innerHTML="Дано: "+"<br>";
   document.getElementById("a3nm").innerHTML="a="+ap+"см"+"<br>";
    document.getElementById("b3nm").innerHTML="b=S/a="+bp+"см"+"<br>";
    document.getElementById("rz32").innerHTML="Знайдено: "+"<br>";
   document.getElementById("d3n").innerHTML="d=2*R="+dp+"см"+"<br>";
   document.getElementById("S3n").innerHTML="S="+sp+"см<sup>2</sup>"+"<br>";
   document.getElementById("P3n").innerHTML="P=2*(a+b)="+Pp+"см"+"<br>";
   document.getElementById("R3n").innerHTML="R=&#8730a<sup>2</sup>+&#8730b<sup>2</sup>/2="+Rk3+"см"+"<br>";
  }
  
}
 

