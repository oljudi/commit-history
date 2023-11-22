const githubAPI = {
    getCommits: async () => {
        const data = await fetch('http://localhost:3000/github/commits/backend', {
            method: 'GET'
        })
        if(data.status === 200) {
            return data.json()
        } 
        return []
    }
}

export default githubAPI