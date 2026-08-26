'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Box, Layers, Eye, RefreshCw, Sun, Shield, Camera, ArrowRight, Sparkles } from 'lucide-react';

interface ThreeDShowcaseProps {
  onOpenConsultation?: () => void;
  onScrollToSection?: (id: string) => void;
}

export const ThreeDShowcase: React.FC<ThreeDShowcaseProps> = ({
  onOpenConsultation,
  onScrollToSection
}) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [selectedAsset, setSelectedAsset] = useState<'falcon' | 'cube' | 'token' | 'rings'>('falcon');
  const [materialTheme, setMaterialTheme] = useState<'gold24k' | 'cyberPetrol' | 'holoTitanium' | 'emeraldGlass'>('gold24k');
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotationSpeed] = useState(1.2);
  const [lightingMode, setLightingMode] = useState<'studio' | 'sunset' | 'cyber'>('studio');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const currentMeshGroupRef = useRef<THREE.Group | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDown: false, prevX: 0, prevY: 0 });

  // 1. Initial 3D Scene Setup
  useEffect(() => {
    if (!canvasContainerRef.current) return;
    const container = canvasContainerRef.current;
    const width = container.clientWidth || 700;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x041618, 0.03);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1, 8.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0d383d, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5db, 3.2);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.PointLight(0xf5c518, 2.5, 30);
    fillLight.position.set(-6, 3, 6);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    const rimLight = new THREE.PointLight(0x14b8a6, 2.0, 30);
    rimLight.position.set(4, -4, -4);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // Floating Stardust Particles
    const pCount = 300;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pCols = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount; i++) {
      const idx = i * 3;
      pPos[idx] = (Math.random() - 0.5) * 26;
      pPos[idx + 1] = (Math.random() - 0.5) * 16;
      pPos[idx + 2] = (Math.random() - 0.5) * 16 - 2;

      if (Math.random() > 0.4) {
        pCols[idx] = 0.96; pCols[idx + 1] = 0.77; pCols[idx + 2] = 0.1;
      } else {
        pCols[idx] = 0.08; pCols[idx + 1] = 0.72; pCols[idx + 2] = 0.65;
      }
    }

    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeom.setAttribute('color', new THREE.BufferAttribute(pCols, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);
    particlesRef.current = particles;

    const meshGroup = new THREE.Group();
    currentMeshGroupRef.current = meshGroup;
    scene.add(meshGroup);

    // Mouse Controls
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 1.2;
      mouseRef.current.targetY = y * 1.0;

      if (mouseRef.current.isDown && currentMeshGroupRef.current) {
        const deltaX = e.clientX - mouseRef.current.prevX;
        const deltaY = e.clientY - mouseRef.current.prevY;
        currentMeshGroupRef.current.rotation.y += deltaX * 0.01;
        currentMeshGroupRef.current.rotation.x += deltaY * 0.01;
      }
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW && newH && rendererRef.current && cameraRef.current) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      if (currentMeshGroupRef.current) {
        const group = currentMeshGroupRef.current;
        group.position.y = Math.sin(elapsed * 1.8) * 0.18;
        if (autoRotate && !mouseRef.current.isDown) {
          group.rotation.y += 0.008 * rotationSpeed;
          group.rotation.x = Math.sin(elapsed * 0.9) * 0.12 + mouseRef.current.y * 0.2;
          group.rotation.z = Math.cos(elapsed * 1.2) * 0.08 + mouseRef.current.x * 0.15;
        }
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.04;
      }

      if (cameraRef.current) {
        cameraRef.current.position.x = mouseRef.current.x * 0.6;
        cameraRef.current.position.y = 1 + mouseRef.current.y * 0.4;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  // 2. Build Selected 3D Model
  useEffect(() => {
    if (!currentMeshGroupRef.current) return;
    const group = currentMeshGroupRef.current;

    while (group.children.length > 0) {
      const child = group.children[0] as THREE.Mesh;
      if (child.geometry) child.geometry.dispose();
      group.remove(child);
    }

    let baseColor = 0xf5c518;
    let emissive = 0x3d2e04;
    let metalness = 0.92;
    let roughness = 0.18;

    if (materialTheme === 'cyberPetrol') {
      baseColor = 0x14b8a6;
      emissive = 0x032b28;
      metalness = 0.85;
      roughness = 0.22;
    } else if (materialTheme === 'holoTitanium') {
      baseColor = 0xfef08a;
      emissive = 0x0f766e;
      metalness = 0.98;
      roughness = 0.08;
    } else if (materialTheme === 'emeraldGlass') {
      baseColor = 0x10b981;
      emissive = 0x022c22;
      metalness = 0.7;
      roughness = 0.12;
    }

    const mainMat = new THREE.MeshStandardMaterial({
      color: baseColor,
      emissive: emissive,
      emissiveIntensity: 0.35,
      metalness: metalness,
      roughness: roughness,
      wireframe: isWireframe,
      side: THREE.DoubleSide
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: materialTheme === 'cyberPetrol' ? 0x0d9488 : 0xdf9b08,
      metalness: 0.95,
      roughness: 0.28,
      wireframe: isWireframe,
      side: THREE.DoubleSide
    });

    if (selectedAsset === 'falcon') {
      const falconGroup = new THREE.Group();
      const wingGeom = new THREE.BufferGeometry();
      const wingVerts = new Float32Array([
        0, 0.2, 2.2, -3.2, 0.8, -1.8, 0, 0.5, -1.0,
        0, 0.2, 2.2, 0, 0.5, -1.0, 3.2, 0.8, -1.8,
        0, 0.2, 2.2, 0, -0.6, -0.8, -3.2, 0.8, -1.8,
        0, 0.2, 2.2, 3.2, 0.8, -1.8, 0, -0.6, -0.8,
        0, 0.5, -1.0, -0.8, 0.2, -2.4, 0.8, 0.2, -2.4
      ]);
      wingGeom.setAttribute('position', new THREE.BufferAttribute(wingVerts, 3));
      wingGeom.computeVertexNormals();
      falconGroup.add(new THREE.Mesh(wingGeom, mainMat));

      const beakGeom = new THREE.ConeGeometry(0.35, 1.2, 4);
      beakGeom.rotateX(Math.PI / 2);
      const beakMesh = new THREE.Mesh(beakGeom, accentMat);
      beakMesh.position.set(0, 0.1, 2.4);
      falconGroup.add(beakMesh);

      const haloGeom = new THREE.TorusGeometry(3.6, 0.04, 16, 64);
      haloGeom.rotateX(Math.PI / 2.5);
      falconGroup.add(new THREE.Mesh(haloGeom, accentMat));
      falconGroup.scale.set(0.9, 0.9, 0.9);
      group.add(falconGroup);
    } else if (selectedAsset === 'cube') {
      const cubeGroup = new THREE.Group();
      cubeGroup.add(new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 2.4), mainMat));
      const coreGeom = new THREE.OctahedronGeometry(1.0, 0);
      const coreMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: baseColor, emissiveIntensity: 0.8, wireframe: true });
      cubeGroup.add(new THREE.Mesh(coreGeom, coreMat));
      group.add(cubeGroup);
    } else if (selectedAsset === 'token') {
      const tokenGroup = new THREE.Group();
      const tokenGeom = new THREE.CylinderGeometry(2.2, 2.2, 0.4, 32);
      tokenGeom.rotateX(Math.PI / 3);
      tokenGroup.add(new THREE.Mesh(tokenGeom, mainMat));
      const starGeom = new THREE.OctahedronGeometry(0.9, 0);
      const starMesh = new THREE.Mesh(starGeom, accentMat);
      starMesh.position.set(0, 0, 0.4);
      tokenGroup.add(starMesh);
      group.add(tokenGroup);
    } else if (selectedAsset === 'rings') {
      const ringsGroup = new THREE.Group();
      ringsGroup.add(new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.08, 16, 64), mainMat));
      const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.07, 16, 64), accentMat);
      r2.rotation.x = Math.PI / 3;
      ringsGroup.add(r2);
      ringsGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 32), mainMat));
      group.add(ringsGroup);
    }
  }, [selectedAsset, materialTheme, isWireframe]);

  // 3. Lighting Adjustments
  useEffect(() => {
    if (!keyLightRef.current || !fillLightRef.current || !rimLightRef.current) return;
    if (lightingMode === 'studio') {
      keyLightRef.current.color.setHex(0xfff5db);
      fillLightRef.current.color.setHex(0xf5c518);
      rimLightRef.current.color.setHex(0x14b8a6);
    } else if (lightingMode === 'sunset') {
      keyLightRef.current.color.setHex(0xfb923c);
      fillLightRef.current.color.setHex(0xf43f5e);
      rimLightRef.current.color.setHex(0xfde047);
    } else if (lightingMode === 'cyber') {
      keyLightRef.current.color.setHex(0x2dd4bf);
      fillLightRef.current.color.setHex(0x818cf8);
      rimLightRef.current.color.setHex(0x38bdf8);
    }
  }, [lightingMode]);

  const cameraPresets = [
    { label: 'Hero 3D', x: 0, y: 1, z: 8.5 },
    { label: 'Isometric 45°', x: 5, y: 4, z: 5 },
    { label: 'Top Flight', x: 0, y: 8, z: 0.1 }
  ];

  return (
    <section id="3d-studio" className="py-24 bg-[#031416] border-t border-teal-950/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-teal-900/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
              <Rotate3d className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Spatial 3D Design & Motion Studio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Real-Time 3D Spatial Art <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
                Crafted for Modern Brands
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Interact with custom 3D brand mascots, WebGL geometric models, and luxury shaders in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onScrollToSection && onScrollToSection('pricing')}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-amber-300 bg-[#08292D] hover:bg-[#0D383D] border border-amber-400/30 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>3D Pricing Tiers</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2"
            >
              <span>Commission 3D Asset</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Showcase Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3D WebGL Canvas */}
          <div className="lg:col-span-8 rounded-3xl bg-[#051C1F] border border-amber-400/30 overflow-hidden p-4 sm:p-6 shadow-2xl shadow-black/80 flex flex-col justify-between relative">
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-teal-900/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Interactive 3D Viewport // 60 FPS WebGL
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Drag to Rotate • Hover for Parallax
              </div>
            </div>

            <div
              ref={canvasContainerRef}
              className="w-full h-80 sm:h-[420px] relative cursor-grab active:cursor-grabbing select-none my-2"
            >
              <div className="absolute bottom-3 left-3 pointer-events-none z-10 flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-black/60 px-3 py-1.5 rounded-lg border border-teal-900/60 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Asset: {selectedAsset.toUpperCase()} // Material: {materialTheme}</span>
              </div>
            </div>

            {/* Viewport Bottom Controls */}
            <div className="pt-4 border-t border-teal-900/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Camera className="w-3 h-3 text-amber-400" /> View:
                </span>
                {cameraPresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      if (cameraRef.current) {
                        cameraRef.current.position.set(preset.x, preset.y, preset.z);
                        cameraRef.current.lookAt(0, 0, 0);
                      }
                    }}
                    className="px-2 py-1 rounded text-[10px] font-mono font-semibold bg-[#08292D] text-slate-300 hover:text-white border border-teal-900"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsWireframe(!isWireframe)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors flex items-center gap-1 ${
                    isWireframe ? 'bg-amber-400/20 text-amber-300 border-amber-400/40' : 'bg-[#08292D] text-slate-400 border-teal-900'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>{isWireframe ? 'Wireframe' : 'Solid'}</span>
                </button>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors flex items-center gap-1 ${
                    autoRotate ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-[#08292D] text-slate-400 border-teal-900'
                  }`}
                >
                  <RefreshCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  <span>{autoRotate ? 'Auto-Flight' : 'Manual'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Controls Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="p-6 rounded-3xl bg-[#051C1F] border border-teal-900/80 space-y-6 shadow-xl shadow-black/40">
              
              {/* Asset Selector */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5" /> 1. Select 3D Model:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'falcon', name: 'Uraan Falcon', desc: 'Flight Bird' },
                    { id: 'cube', name: 'Spatial Core', desc: 'UI Monolith' },
                    { id: 'token', name: 'Brand Token', desc: 'Luxury Medallion' },
                    { id: 'rings', name: 'Gyroscope', desc: 'Orbital Ring' }
                  ].map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset.id as any)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedAsset === asset.id
                          ? 'bg-amber-400/15 text-amber-200 border-amber-400 shadow'
                          : 'bg-[#08292D] text-slate-400 border-teal-900 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{asset.name}</div>
                      <div className="text-[10px] text-slate-400">{asset.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Shader Presets */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> 2. Material Shader:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'gold24k', label: '24K Gold', color: 'bg-amber-400' },
                    { id: 'cyberPetrol', label: 'Cyber Petrol', color: 'bg-teal-400' },
                    { id: 'holoTitanium', label: 'Holo Titanium', color: 'bg-yellow-200' },
                    { id: 'emeraldGlass', label: 'Emerald Glass', color: 'bg-emerald-400' }
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setMaterialTheme(mat.id as any)}
                      className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                        materialTheme === mat.id
                          ? 'bg-[#09383E] text-white border-amber-400 shadow'
                          : 'bg-[#062428] text-slate-300 border-teal-950 hover:text-white'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${mat.color} shrink-0`} />
                      <span className="text-[11px] truncate">{mat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lighting */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5" /> 3. Studio Lighting:
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { id: 'studio', label: 'Neutral' },
                    { id: 'sunset', label: 'Sunset' },
                    { id: 'cyber', label: 'Cyber' }
                  ].map((lit) => (
                    <button
                      key={lit.id}
                      onClick={() => setLightingMode(lit.id as any)}
                      className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-colors ${
                        lightingMode === lit.id
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-[#08292D] text-slate-400 border-teal-900'
                      }`}
                    >
                      {lit.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#08292D] via-[#0B353A] to-[#08292D] border border-amber-400/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white font-display">
                  Every 3D Deliverable Includes:
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                <li>• <strong>Source Files:</strong> .OBJ, .FBX, .GLTF & .BLEND</li>
                <li>• <strong>4K/8K Renders:</strong> Transparent PNGs & PSDs</li>
                <li>• <strong>Web Ready:</strong> Three.js / Spline canvas code</li>
                <li>• <strong>100% Commercial IP Rights</strong></li>
              </ul>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book 3D Design Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};