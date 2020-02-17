
  /**
   * The base API function that all APIs will use
   * @param {string} url 
   */
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


/**
 * Get all the people
 */
export const getAllPeople = () => {
  return api('people')
}

/**
 * Get a person
 * @param {number} id 
 */
export const getPerson = (id = 0) => {
  return api(`people/${id.toString()}`)
}
