const billAmount=document.querySelector("#bill-amount")
let cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#Check-but");
const message=document.querySelector("#error-msg");
const noOfNotes=document.querySelectorAll(".no-of-notes");

 const availNotes=[2000,500,100,20,10,5,1]



checkButton.addEventListener("click",function ValidateBill() {
    hidemesg()
    if (billAmount.value > 0){
        if(cashGiven.value>=billAmount.value){
            const amounttoBereturned = cashGiven.value-billAmount.value;
            Calculatechange(amounttoBereturned);
        }
        else{
            showMessage("The cash provided should be atleast equal to the bill amount");
        }
        
    }
    
    else{
        showMessage("Invalid Bill Amount");
    }
    
});


function Calculatechange(amounttoBereturned){
    for(let i=0; i<availNotes.length; i++){
        const numberofNotes=Math.trunc(amounttoBereturned/availNotes[i]);
        amounttoBereturned %= availNotes[i];
        // amounttoBereturned=amounttoBereturned % availNotes[i];
        noOfNotes[i].textContentxt = numberofNotes;
    }
  

}
function showMessage(msg){
    message.style.display = "block"; 
    message.innerHTML=msg;
}
function hidemesg(){
    message.style.display="none";
    // return;
}