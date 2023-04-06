const taskList = [];
let verifyCheck = false;

$('form').on('submit', function(e) {
    e.preventDefault();
    newLine();
})

function newLine() {
    const newTask = $('#input-task');
    const newLine = `<li><span>${newTask.val()}</span></li>`;
    
    if (taskList.includes(newTask.val())) {
        $('p').css("display","block" );
    } else {
        $(newLine).appendTo('ul');
        $(newLine).fadeIn('1000);
        taskList.push(newTask.val());
    }
    
    
    $('#input-task').val('');
}

$('ul').on('click', 'li', function() {
    
    if (verifyCheck) {
        $(this).find('span').removeClass('check');
        verifyCheck = false
    } else {
        $(this).find('span').addClass('check');
        verifyCheck = true
    }
});



