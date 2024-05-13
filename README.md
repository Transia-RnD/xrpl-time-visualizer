# Xrpl To,e Visualizer

This is a simple web-based tool that allows users to convert datetime strings and timestamps into ripple time and vice versa.

## Public Page

https://transia-rnd.github.io/xrpl-time-visualizer/

## Features

- Supports conversion to Date, Timestamp, and RippleTime Address.
- User-friendly interface with clear instructions.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter a timestamp, date or ripple time into the input field.
3. Click the "Convert From" or "Convert To" button to perform the conversion.
4. View the conversion results displayed under the "Conversion Results" section.

## Technical Details

The tool is implemented using HTML and JavaScript. It includes functions to handle endianness conversion, XFL normalization, and various size checks for different data types.

## Limitations

- The tool assumes that the input hex string is valid and does not perform extensive validation.
- The tool is designed for specific hex string lengths corresponding to the data types it supports.

## Contributing

Contributions to improve the tool or add new features are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Disclaimer

This tool is provided "as is" without warranty of any kind, either express or implied. Use at your own risk.