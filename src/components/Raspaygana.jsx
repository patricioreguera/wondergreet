import React, { useState } from "react";
import "./styles.css";

function App() {
	const [opacity, setOpacity] = useState(true);

	// Función para manejar el evento de raspar
	const handleScratch = () => {
		setOpacity(!opacity);
	};

	const value1 = "bg-gray-200 ";
	return (
		<div className="flex justify-center p-5">
			<div
				className="bg-white w-[500px] h-[300px] flex justify-end items-end
			border border-slate-300 rounded-md  shadow-md
			hover:shadow-xl
			"
			>
				<div
					onClick={handleScratch}
					className={`${opacity && value1} h-[100px] w-[100px] 
					m-5 cursor-pointer  rounded-md 
				 	flex justify-center items-center text-center p-10 `}
				>
					<h1>{!opacity && "Haz Ganado!"}</h1>
				</div>
			</div>
		</div>
	);
}

/* 		<div className="card">
				<div className="scratch-card">
					<div
						className="scratch-area"
						style={{ backgroundColor: `rgba(128, 128, 128, ${opacity})` }}
						onClick={handleScratch}
					>
						<div>¡Has ganado!</div>
					</div>
				</div>
			</div>
		); */
export default App;
