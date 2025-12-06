import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { JSX, useRef } from "react";

export default function RubiksCube() {
    return (
        <div style={{ width: "400px", height: "400px" }}>
            <Canvas camera={{ position: [3.5, 3.5, 3.5], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <Rubik3D />

                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}

function Rubik3D() {
    const ref = useRef<THREE.Group>(null!);

    useFrame(() => {
        ref.current.rotation.y += 0.004;
    });

    return (
        <group ref={ref}>
            {/* base cube */}
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#111" metalness={0.2} roughness={0.4} />
            </mesh>

            <Stickers />
        </group>
    );
}

// ---------------------------
// Create a rounded flat sticker
// ---------------------------
function createRoundedSticker(size: number, radius: number) {
    const shape = new THREE.Shape();
    const w = size;
    const h = size;
    const r = radius;

    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    shape.lineTo(w / 2, h / 2 - r);
    shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

    return new THREE.ShapeGeometry(shape);
}

const stickerGeometry = createRoundedSticker(0.57, 0.12);

const COLORS = {
    top: "#ff4d4d",
    bottom: "#ffffff",
    front: "#ff3300",
    back: "#ffeb3b",
    right: "#00cc44",
    left: "#0066ff",
};

function Sticker({
    position,
    rotation,
    color
}: {
    position: [number, number, number];
    rotation: [number, number, number];
    color: string;
}) {
    return (
        <mesh
            geometry={stickerGeometry}
            position={position}
            rotation={rotation}
        >
            <meshStandardMaterial
                color={color}
                metalness={0.2}
                roughness={0.3}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

function Stickers() {
    const gap = 0.66;
    const offset = 1.01; // **perfect distance**

    const grid = [-gap, 0, gap];
    const stickers: JSX.Element[] = [];

    // TOP
    grid.forEach((x) =>
        grid.forEach((z) =>
            stickers.push(
                <Sticker
                    key={`top-${x}-${z}`}
                    position={[x, offset, z]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    color={COLORS.top}
                />
            )
        )
    );

    // BOTTOM
    grid.forEach((x) =>
        grid.forEach((z) =>
            stickers.push(
                <Sticker
                    key={`bottom-${x}-${z}`}
                    position={[x, -offset, z]}
                    rotation={[Math.PI / 2, 0, 0]}
                    color={COLORS.bottom}
                />
            )
        )
    );

    // FRONT
    grid.forEach((x) =>
        grid.forEach((y) =>
            stickers.push(
                <Sticker
                    key={`front-${x}-${y}`}
                    position={[x, y, offset]}
                    rotation={[0, 0, 0]}
                    color={COLORS.front}
                />
            )
        )
    );

    // BACK
    grid.forEach((x) =>
        grid.forEach((y) =>
            stickers.push(
                <Sticker
                    key={`back-${x}-${y}`}
                    position={[x, y, -offset]}
                    rotation={[0, Math.PI, 0]}
                    color={COLORS.back}
                />
            )
        )
    );

    // LEFT
    grid.forEach((y) =>
        grid.forEach((z) =>
            stickers.push(
                <Sticker
                    key={`left-${y}-${z}`}
                    position={[-offset, y, z]}
                    rotation={[0, Math.PI / 2, 0]}
                    color={COLORS.left}
                />
            )
        )
    );

    // RIGHT
    grid.forEach((y) =>
        grid.forEach((z) =>
            stickers.push(
                <Sticker
                    key={`right-${y}-${z}`}
                    position={[offset, y, z]}
                    rotation={[0, -Math.PI / 2, 0]}
                    color={COLORS.right}
                />
            )
        )
    );

    return <>{stickers}</>;
}
