const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    // read the actual value from the date input
    const birthdayValue = birthdayEl.value;

    // validate supplied value
    if (!birthdayValue) {
        alert("Please enter your birthday");
        return;
    } else {
        const age = getAge(birthdayValue);

        if (age < 0 || Number.isNaN(age)) {
            // date parsing failed or birthday in the future
            resultEl.innerText = "Please enter a valid date (not in the future).";
            return;
        }

        resultEl.innerText = `Your age is ${age} ${age === 1 ? "year" : "years"} old`;
    }
}


function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    // if birthday is today, this will correctly return 0
    return age;
}

btnEl.addEventListener("click", calculateAge);
