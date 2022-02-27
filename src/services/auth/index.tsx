export const AuthServices = {
    get: {
        user: (id: number): number => {
            return id
        }
    },
    post: {
        login: (data: string): boolean =>  {
            
            return !data
        }
    }
}