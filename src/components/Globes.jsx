import Globe from 'react-globe.gl';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

const Globes = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const globeEl = useRef();

    useEffect(() => {
        const globe = globeEl.current;

        // Disable OrbitControls interactions
        const controls = globe.controls();
        controls.enabled = isMobile ? false : true; // Completely disable controls
        // Alternatively, disable specific interactions:
        //  controls.enableZoom = isMobile ? false : true;
        // controls.enableRotate = false;
        //  controls.enablePan = isMobile ? false : true;
        //  controls.minPolarAngle = false;
        //  controls.maxPolarAngle = false;

        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.4;
        

        // Set initial rotation
        globe.scene().children.forEach((child) => {
            if (child.geometry?.type === 'SphereGeometry') {
                child.rotation.set(0, 0, 10); // Apply the rotation [x, y, z]
            }
        });


        // Add clouds sphere
        const CLOUDS_IMG_URL = './assets/clouds.png'; // from https://github.com/turban/webgl-earth
        const CLOUDS_ALT = 0.004;
        const CLOUDS_ROTATION_SPEED = -0.013; // deg/frame

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