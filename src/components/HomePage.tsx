import { Carousel } from "./Carousel"
import { ExploreTopBooks } from "./ExploreTopBooks"
import { Heros } from "./Heros"
import { LibraryServices } from "./LibraryServices"

export const Homepage = () => {
    return(
        <div>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </div>
    )
} 