// Quick JavaScript Commit to Keep Commit Streak

function managementGrade (){

    quiz1 = parseInt(prompt('What was your score on Quiz 1? '));
    quiz2 = parseInt(prompt('What was your score on Quiz 2? '));
    quiz3 = parseInt(prompt('What was your score on Quiz 3? '));
    problemSet = parseInt(prompt('What was your score on the Problem Set? '));


    let total = (quiz1 + quiz2 + quiz3 + problemSet);
    if (0 <= total <= 100){
        console.log(`Your raw grade was ${total} points`);
    } else {
        console.log('Sorry your input total does not make sense. Please try again.')
    }


    evaluation = prompt('Did you fill out the extra credit evaluation?')
    if (evaluation === 'yes' || evaluation === 'Yes'){
        total = total + 3;
        console.log('Congratulations you received three extra credit points!')
    } else if (evaluation === 'no' || evaluation === 'No'){
        console.log('Sorry you did not earn three extra credit points!')
    } else {
        evaluation = prompt('What was your score on Quiz 3? ');
    }

    if (90 <= total < 100){
        grade = 'A';
    } else if (80 <= total < 90){
        grade = 'B';
    } else if (70 <= total < 80){
        grade = 'C';
    } else if (total < 70){
        grade = 'Fail';
    } else {
        grade = 'Invalid Grade';
    }


    return (grade);
}
