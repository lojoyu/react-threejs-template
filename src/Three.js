import { useEffect, useRef, useState } from 'react';
import {canvas, resizeCanvas} from './Threecanvas';
import './Three.css';

const Three = () => {
    const canvasRef = useRef(null);
    const [size, setSize] = useState({ w: 0, h: 0});

    const resized = () => {
        setSize({ w: canvasRef.current.clientWidth, h: canvasRef.current.clientHeight });
    };
    useEffect(resized, []);
    useEffect(() => {
        window.addEventListener('resize', resized);
        return () => window.removeEventListener('resize', resized);
    });
    useEffect(() => {
        resizeCanvas(size);
    });
    useEffect(() => {
        let renderer = canvas();        
        canvasRef.current.appendChild(renderer.domElement);
        return () => canvasRef.current.removeChild( renderer.domElement);
    }, []);

    return (
        <div className='threejs' ref={canvasRef}>
        </div>
    );
}

export default Three;