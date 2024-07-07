import ImageCard from "./ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({ images, onImageClick}) {
   if (images.length === 0) {
        return <p>No results were found for your query</p>;
    }
    return (
        <ul className={css.imageGallery}>{images.map((image) => (
                <li key={image.id} className={css.imageItem}>
            <ImageCard image={image} onImageClick={ onImageClick} />
                </li>
            ))}</ul>
    )
}
