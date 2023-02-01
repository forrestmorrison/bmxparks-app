import { v4 as uuidv4 } from "uuid"
import { createContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([
        {
            id: 1,
            email: "fakeuser1@gmail.com",
            username: "fakeuser1",
            password: "FakePassword1",
            confirmPassword: "FakePassword1"
        },
        {
            id: 2,
            email: "fakeuser2@gmail.com",
            username: "fakeuser2",
            password: "FakePassword2",
            confirmPassword: "FakePassword2"
        },
    ])

    const addUser = (newUser) => {
        newUser.id = uuidv4()
        setUsers([newUser, ...users])
    }

    return <UserContext.Provider value={{
        users,
        addUser
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext