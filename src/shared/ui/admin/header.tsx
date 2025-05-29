
interface Props{
	title: string
	description: string
}

export default function HeaderAdmin({title, description}: Props) {
	return (
	<div>
		<h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
		<h3 className='text-muted-foreground'>
			{description}
		</h3>
	</div>
	);
}