import { DropDown } from "./DropDown";
import { Icon, IconData } from "./Icon/Icon";


export default function Header() {
return (
    <div className="h-24 w-full bg-white lg:relative">
      <div className="container mx-auto flex h-full justify-between lg:gap-10">
        
        <figure className="flex items-center justify-center p-12 lg:flex-none">
            <a href="https://airzonecontrol/ib/es/" target="_self">
                  <img src="https://res.cloudinary.com/airzone/image/upload/v1707306077/images/airzone.svg" alt="Airzone logo" width={200} height={50} />
            </a>
        </figure>

        <DropDown
            trigger={
              <div className="text-primary-900 border-primary-900 flex shrink-0 items-center rounded-lg border p-2 mt-8">
                  <Icon name={IconData.profileSolid} size={28} />
                  <span className="pl-2">Hola, Homer</span>
                  <></>
              </div>
            }
            align="left"
          >
          </DropDown>
      </div>
    </div>
  )
}