// define button id as global var
let btnId=''

// select all buttons with the class
const buttons= document.querySelectorAll('.btn');

// for each button with .btn class
buttons.forEach(button => {

    // add event listener for all each button with .btn
    button.addEventListener('click', function () {

        // remove all buttons from active status
        buttons.forEach(button=>button.classList.remove('active'));

        // get clicked button's id
        btnId=button.id
        console.log(btnId);

        // toggle the button with this id into status as active
        this.classList.toggle('active');
    })
})

// get submit button by id
const submitBtn=document.getElementById("submit-btn")

function buttonClicked() {

    // Get first input from user
    let firstElement=document.getElementById('first-input').value
    let firstInput=parseFloat(firstElement)
    console.log(firstInput);

    // Get second input from user
    let secondElement=document.getElementById('second-input').value
    let secondInput=parseFloat(secondElement)
    console.log(secondInput);

        // if 1st,2nd and button id is availble then proceed
        if (firstInput && secondInput && btnId) {

        // if the button id is addtion/subtraction/multiplication/division/modulus/square do the respective operations
        if(btnId==='addition') {
            return(firstInput+secondInput)
        }
        else if(btnId==='subtraction') {
            return(firstInput-secondInput)
        }
        else if(btnId==='multiplication') {
            return(firstInput*secondInput)
        }
        else if(btnId==='division') {
            return(firstInput/secondInput)
        }
        else if(btnId==='modulus') {
            return(firstInput%secondInput)
        }
        else if(btnId==='square') {
            return(firstInput**secondInput)
        }
    }

    // if there's no button id then tell the user to select button id
    if(!firstInput) {
        return("Please enter the first input")
    }

    // if the user input is null then tell the user to input number
    else if(!btnId) {
        return("Please select an operator")
    }
    else if(!secondInput) {
        return("Please enter the second input")
    }
}

// get dialog box by id
const dialogBox=document.getElementById('dialog')

// function to show dialog which says
function showDialog() {

    // call the function calculation from above
    let answer=buttonClicked()
    console.log(answer)

    // if output from the function is present then show it in the dialog box
    if(answer!==null && answer!==undefined) {
        
        document.getElementById("output").innerHTML=answer
        dialogBox.showModal();
        console.log(answer)
    }

    // if there's no answer then show the error message
    else {
        dialogBox.showModal();
        document.getElementById("output").innerHTML="Sorry unable to fetch answer at the moment!"
    }
    
}
submitBtn.addEventListener('click',showDialog)
document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('dialog').close();
})

document.getElementById('closeButton').addEventListener("keypress",function(event) {
    if (event.key==='Enter') {
        document.getElementById('dialog').close()
    }
})

let resetBtn=document.getElementById('reset-btn');
resetBtn.addEventListener('click',function() {
    window.location.reload();
})


