const note = require('./1-json')
const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'add notes',
  builder: {
    title: {
      describe: 'add title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'add body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    note.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'remove single item',
  builder: {
    title: {
      describe: 'item whih need to remove',
      type: 'string',
      demandOption: true,
    },
  },
  handler(argv) {
    note.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'this will display all the data',
  handler() {
    note.listNote()
  },
})

yargs.command({
  command: 'read',
  describe: 'it will read the notes',
  builder: {
    title: {
      describe: 'enter the title which you want the body of',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    note.readNote(argv.title)
  },
})

yargs.parse()
