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
  handler: function (argv) {
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
  handler: function remove(argv) {
    note.removeNote(argv.title)
  },
})

yargs.parse()

// const yargs = require('yargs')
// const notes = require('./node')

// const command = process.argv

// //cusome
// // yargs.version('1.1.0.4')

// //add re,ove read list
// //Create add command
// yargs.command({
//   command: 'add',
//   describe: 'add a new note',
//   builder: {
//     title: {
//       describe: 'Note title',
//       demandOption: true,
//       type: 'string',
//     },
//     body: {
//       describe: 'Note body',
//       demandOption: true,
//       type: 'string',
//     },
//   },
//   handler: function (argv) {
//     notes.addNode(argv.title, argv.body)
//   },
// })

// //Create remove command
// yargs.command({
//   command: 'remove',
//   describe: 'removed item',
//   handler: function () {
//     console.log('removed')
//   },
// })
// yargs.command({
//   command: 'read',
//   describe: 'reading item',
//   handler: function () {
//     console.log('reading')
//   },
// })

// //Create remove command
// yargs.command({
//   command: 'list',
//   describe: 'listing itrm',
//   handler: function () {
//     console.log('listing')
//   },
// })

// // console.log(process.argv)
// // console.log(yargs.argv)
// yargs.parse()
// // if (command === 'arjun') {
// //   console.log('hello')
// // } else {
// //   console.log('bye')
// // }
