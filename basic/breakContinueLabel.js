loopA:
for (let index = 0; index < 10; index++) {
  loopB:
  for (let indexB = 0; indexB < 10; indexB++) {
    console.log(index + '-' + indexB)
    if(indexB > 10) {
      continue loopA
    }
  }
  
}