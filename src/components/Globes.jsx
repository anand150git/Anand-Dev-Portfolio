import Globe from 'react-globe.gl';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globes = () => {

    const globeEl = useRef();

    useEffect(() => {
        const globe = globeEl.current;

        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;

        // Add clouds sphere
        const CLOUDS_IMG_URL = './assets/clouds.png'; // from https://github.com/turban/webgl-earth
        const CLOUDS_ALT = 0.004;
        const CLOUDS_ROTATION_SPEED = -0.017; // deg/frame

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
            const clouds = new THREE.Mesh(
                new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
                new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
            );
            globe.scene().add(clouds);

            (function rotateClouds() {
                clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
                requestAnimationFrame(rotateClouds);
            })();
        });
    }, []);
    return (
        <Globe
            height={480}
            width={480}
            backgroundColor="rgba(0,0,0,0)"
            ref={globeEl}
            animateIn={false}
            globeImageUrl="/assets/earth-blue-marble.jpg"
            bumpImageUrl="/assets/earth-topology.png"
            labelsData={[{
                lat: 25.039051,
                lng: 85.421846,
                text: "I'm here!",
                size: 50,
                
            }]}
        />
    )
}

export default Globes