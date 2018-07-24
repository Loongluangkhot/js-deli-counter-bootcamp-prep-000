function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
<<<<<<< HEAD
    return 'There is nobody waiting to be served!'
  } else {
    var nowServingPerson = katzDeliLine.shift()
    return `Currently serving ${nowServingPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var currentLineStr = ''
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLineStr = `${currentLineStr} ${i+1}. ${katzDeliLine[i]},`
    }
    currentLineStr = 'The line is currently:' + currentLineStr.slice(0,currentLineStr.length - 1)
    
    return currentLineStr
=======
    return 'The line is empty.'
  }
  else {
    return katzDeliLine.shift()
>>>>>>> 7e5a43f656c9e79ae91e1284c4e755e31a8ca8e6
  }
}