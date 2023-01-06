

const btnNext = document.querySelectorAll('.btn-next');
const inputContainer = document.querySelectorAll('.input-container')
const input = document.querySelectorAll('.input-1')
//sidebar
const span = document.querySelectorAll('.numbers span');
//page-main
const pageMainChild = document.querySelectorAll('.page-main-child');
const page3Box = document.querySelectorAll('.page-3-box');
const page3Icon = document.querySelectorAll('.page-3-box i');

const page4AddOnss = document.querySelectorAll('.page-4-addOns')

let arcade = 9;
let advanced = 12;
let pro = 15;
let servise = 1;
let storage = 2;
let customizable = 2;

let totalMonthly = 0;

function secondStepValue2() {
  if (main2Box[0].classList.contains('box-active')) {
    return arcade;
  } else if (main2Box[1].classList.contains('box-active')) {
    return advanced;
  } else if (main2Box[2].classList.contains('box-active')) {
    return pro; 
  }
}



function totalValue() {
  secondStepValue();
  thirdStepValue();
  
  return totalMonthly;
}

function secondStepValue() {
  if (main2Box[0].classList.contains('box-active')) {
    totalMonthly = arcade;
  } else if (main2Box[1].classList.contains('box-active')) {
    totalMonthly = advanced;
  } else if (main2Box[2].classList.contains('box-active')) {
    totalMonthly = pro; 
  }
}


function check3AddOnsFirst() {
  if (page3Box[0].classList.contains('pg-3-box-active')) {
    return true
  } else {
    return false
  }
}
function check3AddOnsSecond() {
  if (page3Box[1].classList.contains('pg-3-box-active')) {
    return true
  } else {
    return false
  }
}
function check3AddOnsThird() {
  if (page3Box[2].classList.contains('pg-3-box-active')) {
    return true
  } else {
    return false
  }
}


function thirdStepValue() {
  if (page3Box[0].classList.contains('pg-3-box-active')) {
    totalMonthly += servise;
  }
  if (page3Box[1].classList.contains('pg-3-box-active')) {
    totalMonthly += storage;
  }
  if (page3Box[2].classList.contains('pg-3-box-active')) {
    totalMonthly += customizable;
  }
}

// span 0
span[0].addEventListener('click', function() {
  span.forEach((anotherSpa) => {
    anotherSpa.classList.remove('active');
  });
  span[0].classList.add('active')
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[0].classList.add('block')
})


//span 1 
span[1].addEventListener('click', function() {
  if (checkInputField() || inputContainer[1].classList.contains('invalid-email')) {
    return;
  }
  span.forEach((anotherSpa) => {
    anotherSpa.classList.remove('active');
  });
  span[1].classList.add('active')
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[1].classList.add('block')
});

//span 2
span[2].addEventListener('click', function() {
  if (checkInputField() || inputContainer[1].classList.contains('invalid-email')) {
    return;
  }
  
  if (!checkBoxActive()) {
    main2Box[0].classList.add('main-box-error')
    return;
  }
  
  span.forEach((anotherSpa) => {
    anotherSpa.classList.remove('active');
  });
  span[2].classList.add('active')
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[2].classList.add('block')
})

//span 3
span[3].addEventListener('click', function() {
  if (checkInputField() || inputContainer[1].classList.contains('invalid-email')) {
    return;
  }
  
  if (!checkBoxActive()) {
    return;
  }
  toggeChangeContent()
  span.forEach((anotherSpa) => {
    anotherSpa.classList.remove('active');
  });
  span[3].classList.add('active')
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[3].classList.add('block')
})

//next step0
btnNext[0].addEventListener('click', function() {
  if (checkInputField() || inputContainer[1].classList.contains('invalid-email')) {
    return;
  }
  span.forEach(() => {
    span.forEach((anotherSpa) => {
      anotherSpa.classList.remove('active')
    })
    span[1].classList.add('active')
  })
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[1].classList.add('block')
});

//next step1
btnNext[1].addEventListener('click', function() {
  if (!checkBoxActive()) {
    main2Box[0].classList.add('main-box-error')
    return;
  }

  span.forEach(() => {
    span.forEach((anotherSpa) => {
      anotherSpa.classList.remove('active')
    })
    span[2].classList.add('active')
  })
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[2].classList.add('block')
});

//next step2
btnNext[2].addEventListener('click', function() {
  
  toggeChangeContent()
 
  span.forEach(() => {
    span.forEach((anotherSpa) => {
      anotherSpa.classList.remove('active')
    })
    span[3].classList.add('active')
  })
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[3].classList.add('block')
})

//next step3

btnNext[3].addEventListener('click',function() {
  pageMainChild.forEach((child) => {
    child.classList.remove('block')
  })
  pageMainChild[4].classList.add('block')
})


  input.forEach((inpu, index) => {
    inpu.addEventListener('click', function() {
      inputContainer[index].classList.remove('empty-field')
    })
  })
  
  function checkInputField() {
    let emptyFields = 0;
    input.forEach((inpu, index) => {
      if (inpu.value === '') {
        emptyFields++;
        inputContainer[index].classList.add('empty-field')
      }
    });
    return emptyFields > 0;
  }

  
  input[1].addEventListener('blur', function() {
    const emailRegex = /@|\./;
    if (!emailRegex.test(input[1].value)) {
      inputContainer[1].classList.add('invalid-email')
    } if (input[1].value === '' || emailRegex.test(input[1].value) ){
      inputContainer[1].classList.remove('invalid-email')
    }
  });

const btnBack = document.querySelectorAll('.btn-back');

btnBack.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    span.forEach(() => {
      span.forEach((anotherSpa) => {
        anotherSpa.classList.remove('active')
      })
      span[index].classList.add('active')
    })
    pageMainChild.forEach((child) => {
      child.classList.remove('block')
    })
    pageMainChild[index].classList.add('block')
  })
})


//main-page-2

const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelector('.toggle-ball');
const boxHiddenP = document.querySelectorAll('.box-hidden-p');
const boxP = document.querySelectorAll('.box-p');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const page4Change = document.querySelector('.page-4-change')
const infoValue = document.querySelector('.info-value');

page4Change.addEventListener('click', function()  {
  toggleBall.classList.toggle('toggle-ball-yearly');
  toggeChangeContent();
})

toggle.addEventListener('click', function() {
  toggleBall.classList.toggle('toggle-ball-yearly');
  toggeChangeContent();
})
const values = ['$90/yr', '$120/yr', '$150/yr'];
const startingValues = ['$9/mo', '$12/mo', '$15/mo'];

const main2Box = document.querySelectorAll('.main-2-box');

main2Box.forEach((mn2bx,index) => {
  mn2bx.addEventListener('click', function() {
    main2Box.forEach((anotherChild) => {
      anotherChild.classList.remove('box-active');
      if (anotherChild.classList.contains('main-box-error')) {
        anotherChild.classList.remove('main-box-error')
      }
    })
    
    this.classList.add('box-active')
  })
})




function checkBoxActive() {
  let active = false;
  main2Box.forEach((mn2bx) => {
    if(mn2bx.classList.contains('box-active')) {
      active = true;
    }
  });
  return active;
}
const infoSpan = document.querySelector('.info-span')
const totalSpan = document.querySelector('.total-span')
const pg3Money = document.querySelectorAll('.page-3-money');
const totalValueSpan = document.querySelector('.total-value');
const addOnsValue = document.querySelectorAll('.addOns-value');

const pg3MonthlyValue = ['+$1/mo', '+$2/mo', '+$2/mo']
const pg3YearlyValue = ['+$10/yr', '+$20/yr', '+$20/yr']
function toggeChangeContent() {
  boxHiddenP.forEach((boxHidP,index) => {
    if (toggleBall.classList.contains('toggle-ball-yearly')) {
      //update yearly content here
      boxHidP.style.height = '1rem';
      boxP[index].textContent = values[index];
      pg3Money[index].textContent = pg3YearlyValue[index];
      yearly.classList.add('toggle-active');
      monthly.classList.remove('toggle-active');
      infoSpan.textContent = 'Yearly';
      totalSpan.textContent = 'year';
      totalValueSpan.textContent = `$${totalValue() * 10}/yr`;
      infoValue.textContent = `$${secondStepValue2() * 10}/yr`;
      if (check3AddOnsFirst()) {addOnsValue[0].textContent = `+$${10}/yr`}
      if (check3AddOnsSecond()) {addOnsValue[1].textContent = `+$${20}/yr`}
      if (check3AddOnsThird()) {addOnsValue[2].textContent = `+$${20}/yr`}
      
    } else {
      //update monthly content here
      boxHidP.style.height = '0';
      boxP[index].textContent = startingValues[index];
      pg3Money[index].textContent = pg3MonthlyValue[index];
      monthly.classList.add('toggle-active');
      yearly.classList.remove('toggle-active');
      infoSpan.textContent = 'Monthly'
      totalSpan.textContent = 'month';
      totalValueSpan.textContent = `$${totalValue()}/mo`;
      infoValue.textContent = `$${secondStepValue2()}/mo`;
      if (check3AddOnsFirst()) {addOnsValue[0].textContent = `+$${1}/mo`}
      if (check3AddOnsSecond()) {addOnsValue[1].textContent = `+$${2}/mo`}
      if (check3AddOnsThird()) {addOnsValue[2].textContent = `+$${2}/mo`}
    }
  })
}



page3Box.forEach((pg3Box, index) => {
  pg3Box.addEventListener('click', function() {
    page3Icon[index].classList.toggle('icon-active');
    this.classList.toggle('pg-3-box-active')
    page4AddOnss[index].classList.toggle('addOns-active')
  })
})



