import { v4 as uuidv4 } from "uuid"
import { createContext, useState } from "react"

const ParkContext = createContext()

export const ParkProvider = ({children}) => {
    const [parks, setParks] = useState([
        {
            id: 1,
            name: "Rockstar Energy Bike Park",
            address: "12257 Kuykendahl Rd, Houston, TX 77067",
            type: {
                dirt: true,
                race: true,
                street: true
            },
            access: "free"
        },
        {
            id: 2,
            name: "9th Street BMX Park",
            address: "900 9th St, Austin, TX 77067",
            type: {
                dirt: true,
                race: false,
                street: false
            },
            access: "free"
        }
    ])

    const addPark = (newPark) => {
        newPark.id = uuidv4()
        setParks([newPark, ...parks])
    }

    return <ParkContext.Provider value={{
        parks,
        addPark
    }}>
        {children}
    </ParkContext.Provider>
}

export default ParkContext