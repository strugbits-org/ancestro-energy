'use client'

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const WORLD_MAP = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";

// Latin America country names 
const LATIN_AMERICA_NAMES = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Cuba",
    "Dominican Rep.", "Ecuador", "El Salvador", "Guatemala", "Honduras", "Mexico",
    "Nicaragua", "Panama", "Paraguay", "Peru", "Uruguay", "Venezuela"
];

// Flag color schemes for Latin American countries
const FLAG_COLORS = {
    "Argentina": { primary: "#74ACDF", secondary: "#FFFFFF", accent: "#F6B40E" }, // Blue, White, Yellow
    "Bolivia": { primary: "#D52B1E", secondary: "#F9E300", accent: "#007A33" }, // Red, Yellow, Green
    "Brazil": { primary: "#009B3A", secondary: "#FEDF00", accent: "#002776" }, // Green, Yellow, Blue
    "Chile": { primary: "#0039A6", secondary: "#FFFFFF", accent: "#D52B1E" }, // Blue, White, Red
    "Colombia": { primary: "#FDE047", secondary: "#3B82F6", accent: "#DC2626" }, // Yellow, Blue, Red
    "Costa Rica": { primary: "#002B7F", secondary: "#FFFFFF", accent: "#CE1126" }, // Blue, White, Red
    "Cuba": { primary: "#002A8F", secondary: "#FFFFFF", accent: "#CF142B" }, // Blue, White, Red
    "Dominican Rep.": { primary: "#002D62", secondary: "#FFFFFF", accent: "#CE1126" }, // Blue, White, Red
    "Ecuador": { primary: "#FFD100", secondary: "#0047AB", accent: "#EF3340" }, // Yellow, Blue, Red
    "El Salvador": { primary: "#0047AB", secondary: "#FFFFFF", accent: "#0047AB" }, // Blue, White, Blue
    "Guatemala": { primary: "#4997D0", secondary: "#FFFFFF", accent: "#4997D0" }, // Blue, White, Blue
    "Honduras": { primary: "#0073CF", secondary: "#FFFFFF", accent: "#0073CF" }, // Blue, White, Blue
    "Mexico": { primary: "#006847", secondary: "#FFFFFF", accent: "#CE1126" }, // Green, White, Red
    "Nicaragua": { primary: "#0067C6", secondary: "#FFFFFF", accent: "#0067C6" }, // Blue, White, Blue
    "Panama": { primary: "#0073CE", secondary: "#FFFFFF", accent: "#DA020E" }, // Blue, White, Red
    "Paraguay": { primary: "#D52B1E", secondary: "#FFFFFF", accent: "#0038A8" }, // Red, White, Blue
    "Peru": { primary: "#D91023", secondary: "#FFFFFF", accent: "#D91023" }, // Red, White, Red
    "Uruguay": { primary: "#0038A8", secondary: "#FFFFFF", accent: "#FCD116" }, // Blue, White, Yellow
    "Venezuela": { primary: "#CF142B", secondary: "#00247D", accent: "#FFCC00" } // Red, Blue, Yellow
};

const LatinAmericaMap = () => {
    const [hovered, setHovered] = useState(null);
    const [mapData, setMapData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMapData = async () => {
            try {
                // console.log("Loading map data from:", WORLD_MAP);
                const response = await fetch(WORLD_MAP);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // console.log("Map data loaded successfully:", data);
                setMapData(data);
                setLoading(false);
            } catch (err) {
                // console.error("Error loading map data:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadMapData();
    }, []);

    if (loading) {
        return (
            <div className="w-full max-w-[800px] h-[400px] flex items-center justify-center border-2 border-gray-300 rounded">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                    <p className="text-gray-600">Loading map...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-[800px] h-[400px] flex items-center justify-center border-2 border-red-300 rounded bg-red-50">
                <div className="text-center text-red-600">
                    <p className="font-semibold">Error loading map:</p>
                    <p className="text-sm">{error}</p>
                    {/* <p className="text-xs mt-2">Check console for more details</p> */}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-w-[400px] max-h-[1000px] h-auto h-full  rounded p-2">
            <div className="mb-2 text-sm text-transparent">
                Debug: Map loaded successfully | Countries found: {mapData?.objects?.countries?.geometries?.length || 0}
            </div>

            <ComposableMap
                projection="geoMercator"
                width={300}
                height={370}
                projectionConfig={{
                    scale: 200,
                    center: [-75, -15] 
                }}
            >
                <defs>
                    {LATIN_AMERICA_NAMES.map((countryName) => {
                        const colors = FLAG_COLORS[countryName];
                        if (!colors) return null;

                        return (
                            <linearGradient
                                id={`flag-gradient-${countryName.replace(/[^a-zA-Z0-9]/g, '')}`}
                                key={countryName}
                                x1="0%" y1="0%" x2="100%" y2="100%"
                            >
                                <stop offset="0%" stopColor={colors.primary} />
                                <stop offset="50%" stopColor={colors.secondary} />
                                <stop offset="100%" stopColor={colors.accent} />
                            </linearGradient>
                        );
                    })}
                </defs>

                <Geographies geography={mapData}>
                    {({ geographies }) => {
                        // console.log("All geographies count:", geographies.length);
                        const latinAmericaGeos = geographies.filter((geo) => {
                            const countryName = geo.properties.name;
                            const isLatinAmerica = LATIN_AMERICA_NAMES.includes(countryName);
                            // if (isLatinAmerica) {
                            //     console.log("Found Latin America country:", countryName);
                            // }
                            return isLatinAmerica;
                        });

                        // console.log("Latin America countries found:", latinAmericaGeos.length);

                        return latinAmericaGeos.map((geo) => {
                            const countryName = geo.properties.name;
                            const colors = FLAG_COLORS[countryName];
                            const isHovered = hovered === countryName;
                            const gradientId = `flag-gradient-${countryName.replace(/[^a-zA-Z0-9]/g, '')}`;

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setHovered(countryName);
                                        // console.log("Hovered:", countryName);
                                    }}
                                    onMouseLeave={() => setHovered(null)}
                                    style={{
                                        default: {
                                            fill: "#E0E0E0",
                                            stroke: "#000000",
                                            strokeWidth: 1,
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: isHovered && colors ? `url(#${gradientId})` : "#FF6B35",
                                            stroke: "#000000",
                                            strokeWidth: 2,
                                            cursor: "pointer",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: colors ? colors.primary : "#BDBDBD",
                                            stroke: "#000000",
                                            strokeWidth: 2,
                                            outline: "none"
                                        }
                                    }}
                                />
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>


        </div>
    );
};

export default LatinAmericaMap;
