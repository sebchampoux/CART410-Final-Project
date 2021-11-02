const slugify = require('slugify');

export const tabsContent = [
	{
		coasterName: 'Leviathan',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aachcda"
					alt="Entrance sign and first drop on Leviathan"
				/>
				<p>Canada's Wonderland, introduced in 2012<br />
					Height: 93 m<br />
					Speed: 148 km/h</p>
				<a href="https://rcdb.com/10108.htm" target="_blank" rel="noreferrer">See Leviathan on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'Tatsu',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aaaxkha"
					alt="Pretzel Loop on Tatsu"
				/>
				<p>Six Flags Magic Mountain, introduced in 2006<br />
					Height: 51 m<br />
					Speed: 100 km/h</p>
				<a href="https://rcdb.com/3305.htm" target="_blank" rel="noreferrer">See Tatsu on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'El Toro',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aabluha"
					alt="First drop on El Toro"
				/>
				<p>Six Flags Great Adventure, introduced in 2006<br />
					Height: 55 m<br />
					Speed: 112 km/h</p>
				<a href="https://rcdb.com/3183.htm" target="_blank" rel="noreferrer">See El Toro on RCDB</a>
			</>
		),
	},
	{
		coasterName: 'Maverick',
		tabContent: (
			<>
				<img
					src="https://rcdb.com/aabcsha"
					alt="Swooping turn on Maverick"
				/>
				<p>Cedar Point, introduced in 2007<br />
					Height: 32 m<br />
					Speed: 112 km/h</p>
				<a href="https://rcdb.com/3570.htm" target="_blank" rel="noreferrer">See Maverick on RCDB</a>
			</>
		),
	},
];
export const tabId = tabName => `tab-${slugify(tabName)}`;
export const contentId = tabName => `content-${slugify(tabName)}`;
