
# Mythology Hierarchies

A small static web demo that visualizes mythological family hierarchies using D3.js. Choose between Greek, Roman, and Egyptian myth datasets and view an interactive tree showing relationships and short role descriptions.

## Features

- Interactive tree visualization powered by D3.js (v7).
- Three built-in datasets: Greek, Roman, and Egyptian pantheons.
- Hover a node to see the deity's role.
- Responsive, minimal styling and easy to extend with more data.

## Files

- `index.html` — Main HTML file. Loads D3 and `script.js` and contains the buttons/UI.
- `script.js` — Contains the datasets (Greek, Roman, Egyptian) and the D3 code that renders the tree.
- `style.css` — Basic styles for layout, buttons, and tooltip.
- `README.md` — This file.

## How to run (local)

1. Open `index.html` in your browser. Since this is a static site and uses only client-side JS, no server is strictly necessary.

2. Optional: run a simple static server (useful for some browsers that restrict local file imports):

	 - With Python 3.x:

		 ```powershell
		 python -m http.server 8000
		 ```

		 Then open `http://localhost:8000` in your browser.

	 - With Node (http-server):

		 ```powershell
		 npx http-server -p 8000
		 ```

## Extending datasets

The datasets live at the top of `script.js` as a plain JavaScript object named `datasets`. Each dataset follows a tree structure compatible with `d3.hierarchy`:

```
{
	name: "RootName",
	role: "Role description",
	children: [ ... ]
}
```

Add new pantheons or expand existing ones by following the same structure. The visualization will automatically update when you call `loadData('yourDatasetKey')`.

## Accessibility & notes

- Tooltip is implemented with a simple absolute-positioned div. For improved accessibility, consider adding keyboard navigation and ARIA attributes.
- The demo uses an inline SVG tree layout sized for a 900x600 viewport. Adjust the `width` and `height` in `script.js` for different sizes.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repo.
2. Create a feature branch.
3. Submit a PR describing your changes.

Keep changes small and focused (e.g., add a new dataset or improve tooltip accessibility).

## License

This project is provided "as-is". Add a license file if you plan to publish this repository publicly.
