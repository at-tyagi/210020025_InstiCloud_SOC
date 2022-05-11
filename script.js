const question = [{
        id: 0,
        q: "What is capital of India?",
        a: [{ text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "Mumbai", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "What is the capital of Thailand?",
        a: [{ text: "Lampang", isCorrect: false, isSelected: false },
            { text: "Phuket", isCorrect: false },
            { text: "Ayutthaya", isCorrect: false },
            { text: "Bangkok", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "What is the capital of Gujarat",
        a: [{ text: "Surat", isCorrect: false },
            { text: "Vadodara", isCorrect: false },
            { text: "Gandhinagar", isCorrect: true },
            { text: "Rajkot", isCorrect: false }
        ]
  
    }
  
]

var id=-1;
function next()
{
  
  if(id<2)
  id=id+1;
  if(id<3&&id>-2)
  {fun();
  var ele = document.getElementsByName("opt");
  for(var i=0;i<ele.length;i++)
   ele[i].checked = false;}
   
   else
   {}

  


}
function prev()
{  
  if(id<0)
  { document.getElementById("a").href="start.html";}
    if(id>0)
  {id=id-1;
  fun();}
}


function fun()
{ 
      if(id>=0&&id<2)
    {
      document.getElementById("start").value="next";
      document.getElementById("prev").value="prev";
    }
    if(id==2){
      document.getElementById("start").value="save and submit";
      document.getElementById("prev").value="prev";
    }

  const ques=document.getElementById("ques");
  const opt1=document.getElementById("opt1");
  const opt2=document.getElementById("opt2");
  const opt3=document.getElementById("opt3");
  const opt4=document.getElementById("opt4");
  ques.innerHTML=question[id].q;
  opt1.innerHTML=question[id].a[0].text
  opt2.innerHTML=question[id].a[1].text
  opt3.innerHTML=question[id].a[2].text
  opt4.innerHTML=question[id].a[3].text


  

}
