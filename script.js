const question = [{
  id: 0,
  q: "What is capital of India?",
  a: [{ text: "Gandhinagar", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "Mumbai", isCorrect: false }
  ],
 af: 3

},
{
  id: 1,
  q: "Which of the following is a leap year?",
  a: [{ text: "2002", isCorrect: false, isSelected: false },
      { text: "2003", isCorrect: false },
      { text: "2001", isCorrect: false },
      { text: "2004", isCorrect: true }
  ],
  af: 4

},
{
  id: 2,
  q: "How many days a week have?",
  a: [{ text: "6", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false }
  ],
  af: 3

}

]

var id=-1;
var score=0;
function f() {
document.getElementById("opt1").addEventListener("click", val1);
document.getElementById("opt2").addEventListener("click", val2);
document.getElementById("opt3").addEventListener("click", val3);
document.getElementById("opt4").addEventListener("click", val4);
}


function val1()
{
 if(question[id].af==1)
  score++;
  else
  score--;

}
function val2()
{
  if(question[id].af==2)
  score++;
  else
  score--;

}

function val3()
{
  if(question[id].af==3)
  score++;
  else
  score--;

}

function val4()
{
  if(question[id].af==4)
  score++;
  else
  score--;

}


function next()
{

if(id<2)
id=id+1;
if(id<3&&id>-2)
fun();

}

function prev()
{  
if(id<0)
{ document.getElementById("a").href="start.html";}
if(id>0)
{id=id-1;
fun();
}
}


function fun()
{ 
if(id>=0&&id<2)
{
document.getElementById("prev").value="prev";
}
if(id==2){
document.getElementById("prev").value="prev";
}

const ques=document.getElementById("ques");
const opt1=document.getElementById("opt1");
const opt2=document.getElementById("opt2");
const opt3=document.getElementById("opt3");
const opt4=document.getElementById("opt4");
ques.innerHTML=question[id].q+" "+score;
opt1.innerHTML=question[id].a[0].text
opt2.innerHTML=question[id].a[1].text
opt3.innerHTML=question[id].a[2].text
opt4.innerHTML=question[id].a[3].text

document.getElementById("opt1").style.cursor="pointer";
document.getElementById("opt2").style.cursor="pointer";
document.getElementById("opt3").style.cursor="pointer";
document.getElementById("opt4").style.cursor="pointer";
f();
}
function scores()
{
  alert("score is : "+score);
}