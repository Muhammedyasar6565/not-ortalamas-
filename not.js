function hesapla(){

    
    not1=document.getElementById("not1").value
    not2=document.getElementById("not1").value
    per=document.getElementById("perf").value
    let ortalama=(not1*1+not2*1+per*1)/3..toFixed(1)
    
    if (ortalama>=50){
      
      document.getElementById("sonuc").innerHTML=" "+ortalama.toFixed(1)
    }
    else if(ortalama<=49){
     
      document.getElementById("sonuc").innerHTML=""
    }
  }