import Card from '@mui/material/Card'

const ParkItem = ({item}) => {

    return (
        <Card>
            <div className='park-name-display'>{item.name}</div>
            <div className='park-address-display'>{item.address}</div>
        </Card>
    )
}

export default ParkItem