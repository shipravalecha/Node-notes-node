//app.js
console.log('Starting app.js!!!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log('process: ', process.argv);
// console.log('yargs: ', yargs.argv);

var title =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  }

var body = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
}

var argv = yargs
.command('add', 'add a new note', {
  title: title,
  body: body
})
.command('list', 'list all notes')
.command('read', 'read a note', {
  title: title
})
.command('remove', 'remove a note', {
  title: title
})
.help()
.argv;

var command  = argv._[0];
//console.log('command: ', command);

if (command === 'add') {
var note = notes.addNote(argv.title, argv.body);
if (note) {
   console.log('note added');
notes.logNote(note);
}
else {
  console.log('duplicate found');
}
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note)
  });
} else if (command === 'read') {
var note = notes.getNote(argv.title);
if(note) {
  console.log('note found');
  notes.logNote(note);
} else {
    console.log('note not found');
}
} else if (command === 'remove') {
  var removedNotes = notes.removeNote(argv.title);
  console.log((removedNotes === true) ? 'note is removed' : 'not removed');
} else {
  console.log('command not recognized');
}
