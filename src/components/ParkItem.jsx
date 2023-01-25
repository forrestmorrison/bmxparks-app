import Card from '@mui/material/Card'

const ParkItem = () => {
  return (
    <Card>
        <div className='park-name-display'>
            Rockstar Energy Bike Park
        </div>
        <div className='park-address-display'>
            12257 Kuykendahl Rd, Houston, TX 77067
        </div>
    </Card>
  )
}

export default ParkItem