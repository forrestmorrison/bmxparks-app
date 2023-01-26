import { createContext, useState } from "react";

const ParkContext = createContext()

export const ParkProvider = ({children}) => {
    const [park, setPark] = useState([
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
        }
    ])

    return <ParkContext.Provider value={{
        park,
    }}>
        {children}
    </ParkContext.Provider>
}

export default ParkContext