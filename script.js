const inputFeldEl = document.getElementById("input-feld")
const inputBtnEl = document.getElementById("input-btn")
const lengthResultEl = document.getElementById("length-result")
const volumeResultEl = document.getElementById("volume-result")
const massResultEl = document.getElementById("mass-result")

const METER_TO_FEET = 3.281
const LITER_TO_GALLON = 0.264
const KILO_TO_POUND = 2.204

inputBtnEl.addEventListener("click", function () {
  const inputvalue = Number(inputFeldEl.value)
  inputFeldEl.value = ""

  calculatelength(inputvalue)
  calculatevolume(inputvalue)
  calculatemass(inputvalue)
})

function calculatelength(inputvalue) {
  const feet = (inputvalue * METER_TO_FEET).toFixed(3)
  const meters = (inputvalue / METER_TO_FEET).toFixed(3)

  lengthResultEl.innerHTML = `${inputvalue} meters = ${feet} feet | ${inputvalue} feet = ${meters} meters`
}

function calculatevolume(inputvalue) {
  const liters = (inputvalue / LITER_TO_GALLON).toFixed(3)
  const gallons = (inputvalue * LITER_TO_GALLON).toFixed(3)

  volumeResultEl.innerHTML = `${inputvalue} liters = ${gallons} gallons | ${inputvalue} gallons = ${liters} liters`
}

function calculatemass(inputvalue) {
  const kilos = (inputvalue / KILO_TO_POUND).toFixed(3)
  const pounds = (inputvalue * KILO_TO_POUND).toFixed(3)

  massResultEl.innerHTML = `${inputvalue} kilos = ${pounds} pounds | ${inputvalue} pounds = ${kilos} kilos`
}
