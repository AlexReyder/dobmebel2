import {
	Airplay,
	IconNode,
	Store,
	User
} from 'lucide-react'

export type Icon = React.ComponentType<IconNode>;

export const Icons = {
	order: <Store/>,
	user: <User/>,
	content: <Airplay/>
};