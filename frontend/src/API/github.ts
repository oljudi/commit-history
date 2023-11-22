const githubAPI = {
    getCommits: async () => {
        const data = await fetch(import.meta.env.VITE_SERVER_URL + '/github/commits', {
            method: 'GET'
        })
        if(data.status === 200) {
            return data.json()
        } 
        return []
    }
}

export default githubAPI