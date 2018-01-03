
export default function formToJson(formElements) {
  const reqBody = {}
  for (let element of formElements) {
    if (element.tagName === 'BUTTON') {
      continue
    }
    reqBody[element.name] = element.value
  }
  return reqBody
}
