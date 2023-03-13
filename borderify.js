function perform_count() {
  var lines = document.getElementsByClassName("cm-line")

  var startline = -1
  var endline = -1
  var wordcountline = -1

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].innerHTML.includes("%START-COUNT")) {
      startline = i
    } else if (lines[i].innerHTML.includes("%END-COUNT")) {
      endline = i
    } else if (lines[i].innerHTML.includes("%WORD-COUNT")) {
      wordcountline = i
      break
    }
  }

  if (startline == -1 || endline == -1 || wordcountline == -1) {
    console.log("Missing requirements!", startline, endline, wordcountline)
    return;
  }


  var string_builder = ""
  for (var i = startline+1; i < endline; i++) {
    line = lines[i]
    string_builder = string_builder + " " + line.innerText
  }

  console.log(string_builder)

  var splitted = string_builder.split(" ")
  var count = 0

  for (word of splitted) {
    if (word != "") {
      count += 1
    }
  }

  lines[wordcountline+1].innerHTML = "Word count: " + count
}

setInterval(perform_count, 1000)
