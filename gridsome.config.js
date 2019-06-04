module.exports = {
	siteName: 'Gridsome Press',
	siteDescription: "Vuepress based Gridsome ⚡ site for docs",

  plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				index: ['introduction'],
				path: "guide/*.md",
				typeName: 'DocPage'
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				index: ['readme'],
				path: "theme/*.md",
				typeName: 'DocPage'
			}
		}
	]
}
