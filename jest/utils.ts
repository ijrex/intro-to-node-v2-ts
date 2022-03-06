const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const users = [{ email: 'goku@test.com', id: 1, name: 'Goku', verified: false }]

export const getNewUser = async (id: number) => {
    await delay(100)
    const user = users.find((u) => u.id === id)

    if (!user) throw new Error('User does not exist')
    return user
}

export const mapObjectToArray = (
    o: Record<string, unknown>,
    cb: (arg0: string, arg1: unknown, arg2?: typeof o) => any
) => {
    const results = []

    for (const [k, v] of Object.entries(o)) {
        results.push(cb(k, v, o))
    }

    return results
}

export default { getNewUser, mapObjectToArray }
