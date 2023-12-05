export default  async function fetchJSON (apiUrl, requestOption = {}) {
        const headers = {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
            ...requestOption.headers
        }

        requestOption = {headers, ...requestOption};
        const response = await fetch(apiUrl, requestOption);

        if (!response.ok){
            throw new Error('Failed to fetch the data')
        }
        return response.json();
}