const cheerTypeList = [
  "cheer", 
  "biblethump", 
  "cheerwhal", 
  "corgo", 
  "uni", 
  "showlove", 
  "party", 
  "seemsgood", 
  "pride", 
  "kappa", 
  "frankerz", 
  "heyguys", 
  "dansgame", 
  "elegiggle", 
  "trihard", 
  "kreygasm", 
  "4head", 
  "swiftrage", 
  "notlikethis", 
  "failfish", 
  "vohiyo", 
  "pjsalt", 
  "mrdestructoid", 
  "bday", 
  "ripcheer", 
  "shamrock"
]

const CheckIfCheer = (messagePart) => {
  for (let i = 0; i < cheerTypeList.length; ++i) {
    let cheerType = cheerTypeList[0]
    if (messagePart.length < cheerType.length + 1) continue
    if (messagePart.substr(0, cheerType.length) !== cheerType) continue
    
    var countString = messagePart.substr(cheerType.length, messagePart.length - cheerType.length)
    if (messagePart.toLowerCase() == cheerType.toLowerCase() + parseInt(countString).toString()) return true
  }

  return false
}