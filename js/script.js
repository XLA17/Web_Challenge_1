document.addEventListener('DOMContentLoaded', function() {

    const inputNotes = document.querySelectorAll('.inputNote');
    const notes = document.querySelectorAll('.note');
    const submitButton = document.getElementById('submitButton');
    const ratingState = document.getElementById('ratingState');
    const thankYouState = document.getElementById('thankYouState');
    const noteChoisi = document.getElementById('noteChoisi');

    inputNotes.forEach((inputNote, i) => {
        inputNote.addEventListener('change', function() {
            if (this.checked) {
                notes.forEach((note) => {
                    note.classList.remove('inputNoteChecked');
                    note.classList.add('inputNoteNotChecked');
                    noteChoisi.innerHTML = this.value;
                });
                notes[i].classList.add('inputNoteChecked');
                notes[i].classList.remove('inputNoteNotChecked');
            }
        })
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        inputNotes.forEach((inputNote, i) => {
            if (inputNote.checked) {
                ratingState.classList.add('invisible');
                thankYouState.classList.remove('invisible');
            }
        });
    });
    
  });