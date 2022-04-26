/*
    Copyright 2022 Drew Banyai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

const LoadDunkBackDisplay = () => {
  var siteContent = document.getElementById('SiteContent')
  CreateBackgroundArea(siteContent)
  CreateTitleCard(siteContent)
  CreateRuleBlock(siteContent)
}

const CreateBackgroundArea = (container) => {
  var cameraFrame = Container.create({
    id: "CameraFrame",
    style: {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "390px",
      height: "718px",
      border: "1px solid rgb(184, 115, 51)"
    }
  })
  container.appendChild(cameraFrame)

  var topBackgroundColor = Container.create({
    id: "TopBackgroundColor",
    style: {
      position: "absolute",
      left: "392px",
      top: "0px",
      width: "888px",
      height: "220px",
      backgroundColor: "rgb(184, 115, 51)"
    }
  })
  container.appendChild(topBackgroundColor)

  var gameFrame = Container.create({
    id: "GameFrame",
    style: {
      position: "absolute",
      left: "392px",
      top: "220px",
      width: "886px",
      height: "498px",
      border: "1px solid rgb(184, 115, 51)"
    }
  })
  container.appendChild(gameFrame);
}

const CreateTitleCard = (container) => {
  var titleCard = Container.create({
    id: "TitleCard",
    style: {
      position: "absolute",
      width: "870px",
      height: "72px",
      top: "0px",
      left: "394px",
      display: "inline-block",
      textAlign: "center"
    }
  })
  container.appendChild(titleCard)

  var drewTheBearsLabel = Container.create({
    id: "DrewTheBearsLabel",
    style: {
      fontFamily: "Grandstander",
      fontWeight: "bold",
      fontSize: "48px",
      display: "inline-block"
    },
  })
  drewTheBearsLabel.innerHTML = "DrewTheBear's"
  titleCard.appendChild(drewTheBearsLabel)

  var dunkathonLabel = Container.create({
    id: "DunkathonLabel",
    style: {
      fontFamily: "Bungee Inline",
      fontWeight: "400",
      fontSize: "64px",
      display: "inline-block",
      marginLeft: "30px",
      lineHeight: "64px"
    },
  })
  dunkathonLabel.innerHTML = "DUNKATHON"
  titleCard.appendChild(dunkathonLabel)
}

const CreateRuleBlock = (container) => {
  var ruleBlock = Container.create({
    id: "RuleBlock",
    style: {
      width: "870px",
      height: "144px",
      position: "absolute",
      top: "72px",
      left: "394px",
      display: "inline-block",
      textAlign: "center",
      textAlign: "left"
    }
  })
  container.appendChild(ruleBlock)

  var oneDunkEveryLabel = Container.create({
    id: "OneDunkEveryLabel",
    style: {
      fontFamily: "Jua",
      fontWeight: "400",
      fontSize: "22px",
      display: "block",
      marginLeft: "44px",
      lineHeight: "32px"
    },
  })
  oneDunkEveryLabel.innerHTML = "Dunk Costs:"
  ruleBlock.appendChild(oneDunkEveryLabel)

  const addDunkRequirement = (container, requirementString) => {
    var newRequirement = Container.create({
      id: "DunkRequirement",
      style: {
        fontFamily: "Jua",
        fontWeight: "400",
        fontSize: "18px",
        display: "block",
        marginLeft: "74px",
        lineHeight: "26px"
      }
    })
    newRequirement.innerHTML = requirementString
    container.appendChild(newRequirement)
  }

  addDunkRequirement(ruleBlock, "1 dunk for every 100 Bits/Cheers (collectively)")
  addDunkRequirement(ruleBlock, "2 dunks for every 1 Subscription (includes resubs and gift subs)")
  addDunkRequirement(ruleBlock, "1 dunk for every 1 Raid (of at least 3 people or more)")

  var helpCommandLabel = Container.create({
    id: "HelpCommandLabel",
    style: {
      fontFamily: "Jua",
      fontWeight: "400",
      fontSize: "18px",
      display: "block",
      marginLeft: "44px",
      marginTop: "10px",
      lineHeight: "32px"
    },
  })
  helpCommandLabel.innerHTML = "!dunkathon for more info"
  ruleBlock.appendChild(helpCommandLabel)
}