const getMyContainer = document.getElementById('container')
const divForAllContent = document.createElement('div')

const pSchoolSenai = document.createElement('p')

pSchoolSenai.textContent = "ESCOLA SENAI"

const pSuicoBrasileira = document.createElement('p')
pSuicoBrasileira.textContent ="SUÍCO BRASILEIRA"

divForAllContent.appendChild(pSchoolSenai)
divForAllContent.appendChild(pSuicoBrasileira)
getMyContainer.appendChild(divForAllContent)
divForAllContent.classList.add('hack')

