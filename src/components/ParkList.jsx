import ParkItem from "./ParkItem"

const ParkList = ({parks}) => {
    if(!parks || parks.length === 0) {
        return <p>no parks yet</p>
    }

    return (
        <div className="park-list">
            {parks.map((item) => (
                <ParkItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ParkList