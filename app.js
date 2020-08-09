function check(){
var score = 0
var q1 = document.getElementById("q1-3")
var q2 = document.getElementById("q2-1")
var q3 = document.getElementById("q3-4")
var q4 = document.getElementById("q4-2")
var q5 = document.getElementById("q5-4")
{if(q1.checked == true)
{
    score++
}
if(q2.checked == true)
{
    score++
}
if(q3.checked == true)
{
    score++
}
if(q4.checked == true)
{
    score++
}
if(q5.checked == true)
{
    score++
}
}
alert("YOU HAVE SCORED "+score+" MARKS!!")
}
