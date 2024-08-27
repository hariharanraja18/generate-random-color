import { useState } from 'react';

function App() {
	const [typeofColor, setTypeofColor] = useState('hex');
	const [color, setColor] = useState("#000000");

	const generateRandomColor = (type) => {
		if (type === 'hex') {
      	let hashNum = '#';
			for (let i = 0; i < 6; i++) {
				hashNum += Math.floor(Math.random() * 6);
			}
      	setColor(hashNum);
		}
    else{
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      setColor(`rgb(${r},${g},${b})`);
    }
	};
	return (
		<div className="flex flex-col gap-2 m-2 items-center justify-center">
			<div className="border border-black shadow-lg w-full text-center">
				<button
					style={typeofColor === 'hex' ? { backgroundColor: 'lightgray' } : {}}
					className="border font-bold border-black p-2 m-2 cursor-pointer shadow-lg hover:rounded-lg"
					onClick={() => {
						setTypeofColor('hex');
						setColor('#000000');
					}}>
					HEX Color 😕
				</button>
				<button
					style={typeofColor === 'rgb' ? { backgroundColor: 'lightgray' } : {}}
					className="border font-bold border-black p-2 m-2 cursor-pointer shadow-lg hover:rounded-lg"
					onClick={() => {
						setTypeofColor('rgb');
						setColor('rgb(0,0,0)');
					}}>
					RGB Color 😕
				</button>
				<button
					style={{ backgroundColor: color }}
					className="border font-bold text-white border-black p-2 m-2 cursor-pointer shadow-lg hover:rounded-lg"
					onClick={() =>
						typeofColor === 'hex'
							? generateRandomColor('hex')
							: generateRandomColor('rgb')
					}>
					Generate Random colour 😎🚀
				</button>
			</div>
			<div
				style={{ backgroundColor: color }}
				className="w-full h-screen flex items-center justify-center">
				{typeofColor === 'hex' ? (
					<h1 className="text-3xl font-bold text-white">Hex Colour: {color}</h1>
				) : (
					<h1 className="text-3xl font-bold text-white">RGB colour:{color}</h1>
				)}
			</div>
		</div>
	);
}

export default App;
