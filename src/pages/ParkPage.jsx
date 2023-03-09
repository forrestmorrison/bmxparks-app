import ParkItem from "../components/ParkItem"

const ParkPage = ({item}) => {
  return (
    <div>
        <ParkItem key={item.id} item={item} />
    </div>
  )
}

export default ParkPage