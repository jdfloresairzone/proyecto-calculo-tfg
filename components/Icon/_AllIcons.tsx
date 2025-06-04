import { Icon, IconData } from "./Icon"

export const _AllIcons: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-8 p-0">
      {Object.values(IconData).map((icon) => {
        return (
          <li key={icon} className="flex w-28 flex-col items-center justify-center">
            <Icon name={icon} size={36} />
            {icon}
          </li>
        )
      })}
    </ul>
  )
}
