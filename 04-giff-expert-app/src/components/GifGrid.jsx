import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading &&
          <h2>Cargando...</h2>
        }
        {
          images.length > 0 ?
          <div className="card-grid">
            {
              images.map(i => <GifItem key={i.id} {...i}/>)
            }
          </div> :
          <h5>No Images</h5>
        }
    </>
  )
}
