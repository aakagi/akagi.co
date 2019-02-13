/* tslint:disable no-any */

export const formToJson = (formElements: any) => {
  const reqBody: any = {};
  for (let element of formElements) {
    if (element.tagName === 'BUTTON') {
      continue;
    }
    reqBody[element.name] = element.value;
  }
  return reqBody;
};
