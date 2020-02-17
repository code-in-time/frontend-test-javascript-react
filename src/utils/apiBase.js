
  async function api (url = '') {

    let fullUrl = `${process.env.REACT_APP_API_URL}/${url}`

    const response = await fetch(fullUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return await response.json();
  }

export const getAllPeople = () => {
  const result = api('people')
  console.log('result', result)
  return result
}

/*





*/

