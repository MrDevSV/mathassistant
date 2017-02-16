function ChoosePart(){

  alert("Hello");
 
 
}

function Calc(){
    var fn=document.getElementById("firstn").value;
    var sn=document.getElementById("secondn").value;
    var pr=100;
    var eq=sn*pr;
    var x=eq/fn;
    
    document.getElementById("frn").innerHTML=fn;
     document.getElementById("tr").innerHTML="--";
      document.getElementById("v").innerHTML="100%";
      

    document.getElementById("scn").innerHTML=sn;
     document.getElementById("tr2").innerHTML="--";
      document.getElementById("x").innerHTML="x";
      
      document.getElementById("frn1").innerHTML=fn;
      document.getElementById("ml").innerHTML="*";
      document.getElementById("x1").innerHTML="x";
      document.getElementById("eq").innerHTML="=";
      document.getElementById("ct").innerHTML="100";
       document.getElementById("ml1").innerHTML="*";
      document.getElementById("3ct").innerHTML=sn;
      
      document.getElementById("frn2").innerHTML=fn;
      document.getElementById("x2").innerHTML="x";
      document.getElementById("eq1").innerHTML="=";
      document.getElementById("res").innerHTML=eq;
      
       document.getElementById("x3").innerHTML="x";
      document.getElementById("eq2").innerHTML="=";
      document.getElementById("res1").innerHTML=eq;
      document.getElementById("dv").innerHTML="/";
      document.getElementById("frn3").innerHTML=fn;
      
      document.getElementById("x4").innerHTML="x";
      document.getElementById("eq3").innerHTML="=";
      document.getElementById("res2").innerHTML=x;
      document.getElementById("vd").innerHTML="Відповідь:"
      document.getElementById("v1").innerHTML="%";
       


}

function Calc1(){
  var a=document.getElementById("A").value;
  var b=document.getElementById("B").value;
  var c=document.getElementById("C").value;
  var D= b*b-4*a*c;
  
  
  
  if(D<0){
   document.getElementById("rvn").innerHTML="Рівняння:";
    document.getElementById("ax").innerHTML=a;
     document.getElementById("x1").innerHTML="x<sup>2</sup>";
     if(b<0){
       document.getElementById("zn").innerHTML="";
     }
     else{
       document.getElementById("zn").innerHTML="+";
     }
      document.getElementById("bx").innerHTML=b;
       document.getElementById("x2").innerHTML="x";
       
        if(c<0){
       document.getElementById("zn1").innerHTML="";
     }
     else{
       document.getElementById("zn1").innerHTML="+";
     }
      document.getElementById("cx").innerHTML=c;
       document.getElementById("zn2").innerHTML="=";
        document.getElementById("nl").innerHTML="0";
      
   document.getElementById("ds").innerHTML="D=";
   document.getElementById("dsr").innerHTML=b+"<sup>2</sup>"+"-"+"4"+"*"+a+"*"+c;
   document.getElementById("d").innerHTML="="+D;
    document.getElementById("msg").innerHTML="Оскільки D<0,то рівняння немає коренів!";
   
  }
   if(D===0){
    document.getElementById("rvn").innerHTML="Рівняння:";
    document.getElementById("ax").innerHTML=a;
     document.getElementById("x1").innerHTML="x<sup>2</sup>";
     if(b<0){
       document.getElementById("zn").innerHTML="";
     }
     else{
       document.getElementById("zn").innerHTML="+";
     }
      document.getElementById("bx").innerHTML=b;
       document.getElementById("x2").innerHTML="x";
       
        if(c<0){
       document.getElementById("zn1").innerHTML="";
     }
     else{
       document.getElementById("zn1").innerHTML="+";
     }
      document.getElementById("cx").innerHTML=c;
       document.getElementById("zn2").innerHTML="=";
        document.getElementById("nl").innerHTML="0";
        
        document.getElementById("ds").innerHTML="D=";
   document.getElementById("dsr").innerHTML=b+"<sup>2</sup>"+"-"+"4"+"*"+a+"*"+c;
   document.getElementById("d").innerHTML="="+D;
   
   var x1=-b/(2*a);
   
   document.getElementById("xres").innerHTML="x1"+"="+"x2"+"="+-b+"/"+"2*"+a+"="+x1;
         document.getElementById("resx1").innerHTML="x1"+"="+"x2"+"="+x1;
         
    document.getElementById("msg").innerHTML="Оскільки D=0,то рівняння має 1 корінь!";
   }
   
   if(D>0){
    document.getElementById("rvn").innerHTML="Рівняння:";
    document.getElementById("ax").innerHTML=a;
     document.getElementById("x1").innerHTML="x<sup>2</sup>";
     if(b<0){
       document.getElementById("zn").innerHTML="";
     }
     else{
       document.getElementById("zn").innerHTML="+";
     }
      document.getElementById("bx").innerHTML=b;
       document.getElementById("x2").innerHTML="x";
       
        if(c<0){
       document.getElementById("zn1").innerHTML="";
     }
     else{
       document.getElementById("zn1").innerHTML="+";
     }
      document.getElementById("cx").innerHTML=c;
       document.getElementById("zn2").innerHTML="=";
        document.getElementById("nl").innerHTML="0";
        
        document.getElementById("ds").innerHTML="D=";
   document.getElementById("dsr").innerHTML=b+"<sup>2</sup>"+"-"+"4"+"*"+a+"*"+c;
   document.getElementById("d").innerHTML="="+D;
   
   var x1= (-b+Math.sqrt(D))/(2*a);
  var x2= (-b-Math.sqrt(D))/(2*a);
  
  document.getElementById("kD").innerHTML="D<sup>1/2</sup>"+"="+Math.sqrt(D);
  document.getElementById("rx1").innerHTML="x1"+"="+"-"+b+"+"+Math.sqrt(D)+"/"+"2"+"*"+a+"="+x1;
  document.getElementById("rx2").innerHTML="x2"+"="+"-"+b+"-"+Math.sqrt(D)+"/"+"2"+"*"+a+"="+x2;
    
    document.getElementById("msg").innerHTML="Рівняння має 2 корені!"
    document.getElementById("x1rs").innerHTML="x1"+"="+x1+";";
    document.getElementById("x2rs").innerHTML="x2"+"="+x2;
   }
  
 
}

function Calc2(){
 
  var a1=document.getElementById("A1").value;
  var an=document.getElementById("An").value;
  var n=document.getElementById("n").value;
  var df=document.getElementById("d").value;
  var Sn;
  var an2;
  
  if(a1===""){
   a1=an-(n-1)*df;
   Sn=(a1/2+an/2)*n;
   
   
   document.getElementById("uz2").innerHTML="Дано:"+"<br>";
   document.getElementById("anr").innerHTML="a<sub>n</sub>="+an+"<br>";
   document.getElementById("nr").innerHTML="n="+n+"<br>";
   document.getElementById("dr").innerHTML="d="+df+"<br>";
   document.getElementById("uz2r").innerHTML="Знайдено:"+"<br>";
   document.getElementById("a1r").innerHTML="a<sub>1</sub>=a<sub>n</sub>-(n-1)*d="+a1+"<br>";
   document.getElementById("Snr").innerHTML="S<sub>n</sub>=a<sub>1</sub>+a<sub>n</sub>/2*n="+Sn+"<br>";
   
   
  }
  
  if(an===""){
   an=(n-1)*df/1 + a1/1;
   Sn=(a1/2+an/2)*n;
   
   
   document.getElementById("uz2").innerHTML="Дано:"+"<br>";
   document.getElementById("anr").innerHTML="a<sub>1</sub>="+a1+"<br>";
   document.getElementById("nr").innerHTML="n="+n+"<br>";
   document.getElementById("dr").innerHTML="d="+df+"<br>";
   document.getElementById("uz2r").innerHTML="Знайдено:"+"<br>";
   document.getElementById("a1r").innerHTML="a<sub>n</sub>=a<sub>1</sub>+(n-1)*d="+an+"<br>";
   document.getElementById("Snr").innerHTML="S<sub>n</sub>=((a<sub>1</sub>+a<sub>n</sub>)/2)*n="+Sn+"<br>";
   
  }
 if(df===""){
  df=-(a1-an)/(n-1);
  Sn=(a1/2+an/2)*n;
  
    document.getElementById("uz2").innerHTML="Дано:"+"<br>";
   document.getElementById("anr").innerHTML="a<sub>1</sub>="+a1+"<br>";
   document.getElementById("nr").innerHTML="n="+n+"<br>";
   document.getElementById("dr").innerHTML="a<sub>n</sub>="+an+"<br>";
   document.getElementById("uz2r").innerHTML="Знайдено:"+"<br>";
   document.getElementById("a1r").innerHTML="d=-(a<sub>1</sub>-a<sub>n</sub>)/-(n-1)="+df+"<br>";
   document.getElementById("Snr").innerHTML="S<sub>n</sub>=((a<sub>1</sub>+a<sub>n</sub>)/2)*n="+Sn+"<br>";
  
 }
}
 
