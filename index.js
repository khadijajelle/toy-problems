function studentGrade(){
   let mark =  prompt("enter you mark")
   let grade ;

   if (isNaN(parseFloat(mark))|| mark <0 ||mark>100){
    alert("kindly input a valid number between 0-100")
   }

   else {
    if (parseFloat(mark)>79){
        grade ="A";
    }
    else if (parseFloat(mark)>=60){
        grade = "B"
    }
    else if (parseFloat(mark)>=49){
        grade = "C"
    }
    else if (parseFloat(mark)>=40){
        grade = "D"
    }
    else {
        grade = "E"
    }
    alert(`Grade of student: ${grade}`)
   }
   

}

studentGrade()


