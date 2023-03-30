import Check from './components/Check';

const mappedIcons = {
	check: <Check />,
};

export default {
	logo: <span>Devon</span>,

	sidebar: {
		titleComponent({ title, frontMatter }) {
			console.log(frontMatter);
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '10rem',
					}}
				>
					{/* {frontMatter.icon !== undefined && mappedIcons[frontMatter.icon]} */}
					{title}

					<Check />
				</div>
			);
		},
	},
};
