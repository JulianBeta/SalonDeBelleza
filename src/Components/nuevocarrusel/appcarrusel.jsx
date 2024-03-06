import Nuevocarrusel from './nuevoslide';
import img1 from './../../assets/image/1.jpg';
import img2 from './../../assets/image/2.jpg';
import img3 from './../../assets/image/3.jpg';
import img4 from './../../assets/image/4.jpg';


function Appcarrusel() {
	const mockImagenes = [
		<img src={img1} alt=""/>,
        <img src={img2} alt=""/>,
        <img src={img3} alt=""/>,
        <img src={img4} alt=""/>,
	];

	return <Nuevocarrusel imagenes={mockImagenes} />;
}

export default Appcarrusel;