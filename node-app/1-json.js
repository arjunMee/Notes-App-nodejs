const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const data = loadData()
  const duplicate = data.filter((single) => {
    return single.title === title
  })

  if (duplicate.length === 0) {
    data.push({
      title: title,
      body: body,
    })
    console.log(chalk.green.inverse('no dupilcate found'))
  } else {
    console.log(chalk.red.inverse('no notes taken dupicate found'))
  }

  saveData(data)
}

const saveData = (data) => {
  const jsonFile = JSON.stringify(data)
  fs.writeFileSync('note.json', jsonFile)
}

const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync('note.json')
    const JsonData = dataBuffer.toString()
    return JSON.parse(JsonData)
  } catch (e) {
    return []
  }
}

const removeNote = (note) => {
  const data = loadData()
  const updatedData = data.filter((data) => data.title !== note)

  if (data.length > updatedData.length) {
    console.log(chalk.green.inverse('removed'))
  } else {
    console.log(chalk.red.inverse('no note found'))
  }
  saveData(updatedData)
}

module.exports = { addNote: addNote, removeNote: removeNote }

// const fs = require('fs')
// // const book = {
// //   title: 'Ego is Emney',
// //   author: 'arjun meena',
// //   age: 32,
// // }

// // const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// // fs.writeFileSync('1-json.json', bookJSON)

// // const dataBuffer = fs.readFileSync('1-json.json')
// // console.log(JSON.parse(dataBuffer))

// const mainFile = fs.readFileSync('1-json.json')
// const stringFormate = mainFile.toString()
// const mainData = JSON.parse(stringFormate)
// mainData.name = 'arjun'
// mainData.age = 34

// const updatefile = JSON.stringify(mainData)

// fs.writeFileSync('1-json.json', updatefile)
