const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const data = loadData()
  // const duplicates = data.filter((single) => single.title === title)
  const duplicate = data.find((single) => single.title === title)
debugger
  if (!duplicate) {
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

const listNote = () => {
  const data = loadData()
  console.log(chalk.inverse('your notes'))
  data.forEach((single, index) =>
    console.log(`the ${index + 1} title is ${single.title} `)
  )
}

const readNote = (title) => {
  const data = loadData()
  const filterData = data.find((note) => note.title === title)

  if (filterData) {
    console.log(chalk.green.inverse('found'))
    console.log(`the title ${filterData.title} and body is ${filterData.body}`)
  } else {
    console.log(chalk.red.inverse('notfound'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
}
