import { NavButton } from "./buttons";

export default function Navbar(){
    return(
        <div className="_navbar d-flex flex-column py-40 px-8 bg-tertiary gap-128  text-light ">
            <div className="d-flex flex-column gap-64">
                <NavButton icon='bi bi-house' active={true}/>
                <NavButton icon='bi bi-camera-reels'/>
                <NavButton icon='bi bi-collection-play'/>
            </div>
            <NavButton icon='bi bi-box-arrow-left'/>
        </div>
    )
}