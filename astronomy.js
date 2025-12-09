// Current location (default: Belmont, MA)
let currentLocation = {
    name: "Belmont, MA",
    lat: 42.3959,
    lon: -71.1784
};

// Current date/time
let currentDateTime = new Date();

// Deep sky objects catalog with Right Ascension (hours) and Declination (degrees)
// Including image URLs and info links
const deepSkyObjects = [
    // Galaxies
    {
        name: "Andromeda Galaxy",
        catalog: "M31 / NGC 224",
        type: "galaxy",
        ra: 0.712,
        dec: 41.27,
        magnitude: 3.4,
        constellation: "Andromeda",
        description: "Nearest major galaxy to the Milky Way. Visible to naked eye under dark skies. A spiral galaxy 2.5 million light-years away containing approximately one trillion stars.",
        size: "3° × 1°",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1280px-Andromeda_Galaxy_%28with_h-alpha%29.jpg",
        imageCredit: "NASA/JPL-Caltech",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Andromeda_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-31/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M31"
        }
    },
    {
        name: "Triangulum Galaxy",
        catalog: "M33 / NGC 598",
        type: "galaxy",
        ra: 1.564,
        dec: 30.66,
        magnitude: 5.7,
        constellation: "Triangulum",
        description: "Third-largest member of the Local Group. Face-on spiral galaxy 2.7 million light-years away. One of the most distant permanent objects visible to the naked eye.",
        size: "73' × 45'",
        equipment: "Binoculars / Small telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/VST_snaps_a_very_detailed_view_of_the_Triangulum_Galaxy.jpg/1280px-VST_snaps_a_very_detailed_view_of_the_Triangulum_Galaxy.jpg",
        imageCredit: "ESO",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Triangulum_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-33/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M33"
        }
    },
    {
        name: "Bode's Galaxy",
        catalog: "M81 / NGC 3031",
        type: "galaxy",
        ra: 9.926,
        dec: 69.07,
        magnitude: 6.9,
        constellation: "Ursa Major",
        description: "Grand design spiral galaxy 12 million light-years away. Forms a famous pair with M82. One of the brightest galaxies visible from Earth.",
        size: "26.9' × 14.1'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Messier_81_HST.jpg/1280px-Messier_81_HST.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_81",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-81/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M81"
        }
    },
    {
        name: "Cigar Galaxy",
        catalog: "M82 / NGC 3034",
        type: "galaxy",
        ra: 9.932,
        dec: 69.68,
        magnitude: 8.4,
        constellation: "Ursa Major",
        description: "Starburst galaxy undergoing rapid star formation triggered by interaction with M81. Features dramatic outflows of gas and dust.",
        size: "11.2' × 4.3'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/M82_HST_ACS_2006-14-a-large_web.jpg/1280px-M82_HST_ACS_2006-14-a-large_web.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_82",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-82/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M82"
        }
    },
    {
        name: "Whirlpool Galaxy",
        catalog: "M51 / NGC 5194",
        type: "galaxy",
        ra: 13.497,
        dec: 47.20,
        magnitude: 8.4,
        constellation: "Canes Venatici",
        description: "Classic face-on spiral galaxy interacting with companion NGC 5195. 23 million light-years away. First galaxy recognized as having a spiral structure.",
        size: "11.2' × 6.9'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/1280px-Messier51_sRGB.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Whirlpool_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-51/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M51"
        }
    },
    {
        name: "Pinwheel Galaxy",
        catalog: "M101 / NGC 5457",
        type: "galaxy",
        ra: 14.053,
        dec: 54.35,
        magnitude: 7.9,
        constellation: "Ursa Major",
        description: "Large face-on spiral galaxy. One of the largest known spiral galaxies at 170,000 light-years across, nearly twice the size of the Milky Way.",
        size: "28.8' × 26.9'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Pinwheel_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-101/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M101"
        }
    },
    {
        name: "Sunflower Galaxy",
        catalog: "M63 / NGC 5055",
        type: "galaxy",
        ra: 13.264,
        dec: 42.03,
        magnitude: 9.3,
        constellation: "Canes Venatici",
        description: "Flocculent spiral galaxy with patchy, discontinuous spiral arms. 29 million light-years away. Named for its resemblance to a sunflower.",
        size: "12.6' × 7.2'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Messier63.jpg/1024px-Messier63.jpg",
        imageCredit: "NASA/GALEX",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Sunflower_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-63/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M63"
        }
    },
    {
        name: "Sombrero Galaxy",
        catalog: "M104 / NGC 4594",
        type: "galaxy",
        ra: 12.666,
        dec: -11.62,
        magnitude: 8.0,
        constellation: "Virgo",
        description: "Distinctive galaxy with bright nucleus, large central bulge, and prominent dust lane. 28 million light-years away. Contains a supermassive black hole.",
        size: "8.7' × 3.5'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/1280px-M104_ngc4594_sombrero_galaxy_hi-res.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Sombrero_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-104/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M104"
        }
    },
    {
        name: "Black Eye Galaxy",
        catalog: "M64 / NGC 4826",
        type: "galaxy",
        ra: 12.944,
        dec: 21.68,
        magnitude: 8.5,
        constellation: "Coma Berenices",
        description: "Named for spectacular dark band of dust in front of its bright nucleus. Has an unusual internal structure with outer regions rotating opposite to inner regions.",
        size: "10.7' × 5.1'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Blackeyegalaxy.jpg/1024px-Blackeyegalaxy.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Black_Eye_Galaxy",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-64/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M64"
        }
    },
    {
        name: "Leo Triplet - M65",
        catalog: "M65 / NGC 3623",
        type: "galaxy",
        ra: 11.315,
        dec: 13.09,
        magnitude: 9.3,
        constellation: "Leo",
        description: "Part of the famous Leo Triplet. Intermediate spiral galaxy 35 million light-years away with tightly wound spiral arms.",
        size: "8.7' × 2.5'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Messier_65_Hubble_WikiSky.jpg/800px-Messier_65_Hubble_WikiSky.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_65",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-65/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M65"
        }
    },
    {
        name: "Leo Triplet - M66",
        catalog: "M66 / NGC 3627",
        type: "galaxy",
        ra: 11.338,
        dec: 12.99,
        magnitude: 8.9,
        constellation: "Leo",
        description: "Largest member of the Leo Triplet. Shows asymmetric spiral arms from gravitational interactions with neighbors M65 and NGC 3628.",
        size: "9.1' × 4.2'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Messier_66_Hubble_WikiSky.jpg/800px-Messier_66_Hubble_WikiSky.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_66",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-66/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M66"
        }
    },

    // Nebulae
    {
        name: "Orion Nebula",
        catalog: "M42 / NGC 1976",
        type: "nebula",
        ra: 5.588,
        dec: -5.39,
        magnitude: 4.0,
        constellation: "Orion",
        description: "The brightest diffuse nebula in the sky. A stellar nursery 1,344 light-years away where new stars are being born. Visible to the naked eye.",
        size: "85' × 60'",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1280px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Orion_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-42/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M42"
        }
    },
    {
        name: "Ring Nebula",
        catalog: "M57 / NGC 6720",
        type: "nebula",
        ra: 18.893,
        dec: 33.03,
        magnitude: 8.8,
        constellation: "Lyra",
        description: "Famous planetary nebula. Glowing shell of gas expelled by a dying star 2,300 light-years away. The central star is visible in larger telescopes.",
        size: "1.4' × 1.0'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/13/M57_The_Ring_Nebula.JPG",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Ring_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-57/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M57"
        }
    },
    {
        name: "Dumbbell Nebula",
        catalog: "M27 / NGC 6853",
        type: "nebula",
        ra: 19.994,
        dec: 22.72,
        magnitude: 7.5,
        constellation: "Vulpecula",
        description: "First planetary nebula ever discovered (1764). One of the brightest planetary nebulae at 1,360 light-years. Shows intricate structure in telescopes.",
        size: "8.0' × 5.7'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/M27_-_Dumbbell_Nebula.jpg",
        imageCredit: "NASA/ESA",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Dumbbell_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-27/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M27"
        }
    },
    {
        name: "Crab Nebula",
        catalog: "M1 / NGC 1952",
        type: "nebula",
        ra: 5.575,
        dec: 22.01,
        magnitude: 8.4,
        constellation: "Taurus",
        description: "Supernova remnant from explosion observed in 1054 AD by Chinese astronomers. Contains a pulsar spinning 30 times per second at its center.",
        size: "7' × 5'",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/1280px-Crab_Nebula.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Crab_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-1/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M1"
        }
    },
    {
        name: "Lagoon Nebula",
        catalog: "M8 / NGC 6523",
        type: "nebula",
        ra: 18.063,
        dec: -24.38,
        magnitude: 6.0,
        constellation: "Sagittarius",
        description: "Giant interstellar cloud and H II region. One of only two star-forming nebulae visible to naked eye from mid-northern latitudes.",
        size: "90' × 40'",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lagoon_Nebula_%28Messier_8%29.jpg/1280px-Lagoon_Nebula_%28Messier_8%29.jpg",
        imageCredit: "ESO/VLT",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Lagoon_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-8/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M8"
        }
    },
    {
        name: "Trifid Nebula",
        catalog: "M20 / NGC 6514",
        type: "nebula",
        ra: 18.043,
        dec: -23.03,
        magnitude: 6.3,
        constellation: "Sagittarius",
        description: "Unusual combination of emission (red), reflection (blue), and dark nebula. Distinctive three-lobed appearance created by dark dust lanes.",
        size: "28'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Trifid_Nebula.jpg/1024px-Trifid_Nebula.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Trifid_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-20/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M20"
        }
    },
    {
        name: "Eagle Nebula",
        catalog: "M16 / NGC 6611",
        type: "nebula",
        ra: 18.313,
        dec: -13.78,
        magnitude: 6.0,
        constellation: "Serpens",
        description: "Home to the famous 'Pillars of Creation' photographed by Hubble. Active star-forming region 7,000 light-years away.",
        size: "7'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Eagle_nebula_pillars.jpg/800px-Eagle_nebula_pillars.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Eagle_Nebula",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-16/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M16"
        }
    },
    {
        name: "North America Nebula",
        catalog: "NGC 7000",
        type: "nebula",
        ra: 20.976,
        dec: 44.33,
        magnitude: 4.0,
        constellation: "Cygnus",
        description: "Large emission nebula resembling the continent of North America. Best seen with wide-field instruments or binoculars under dark skies.",
        size: "120' × 100'",
        equipment: "Binoculars / Wide-field telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/North_America_nebula.jpg",
        imageCredit: "NASA/WISE",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/North_America_Nebula",
            nasa: "https://science.nasa.gov/image-detail/pia15817-north-american-and-pelican-nebulas/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC7000"
        }
    },
    {
        name: "Veil Nebula (Eastern)",
        catalog: "NGC 6992",
        type: "nebula",
        ra: 20.941,
        dec: 31.72,
        magnitude: 7.0,
        constellation: "Cygnus",
        description: "Part of the Cygnus Loop supernova remnant from an explosion 10,000-20,000 years ago. Wispy, delicate structure best seen with OIII filter.",
        size: "60'",
        equipment: "Telescope with OIII filter",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Veil_Nebula_-_NGC6992.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Veil_Nebula",
            nasa: "https://science.nasa.gov/missions/hubble/hubble-revisits-the-veil-nebula/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC6992"
        }
    },
    {
        name: "Helix Nebula",
        catalog: "NGC 7293",
        type: "nebula",
        ra: 22.494,
        dec: -20.84,
        magnitude: 7.6,
        constellation: "Aquarius",
        description: "One of the closest planetary nebulae at 655 light-years. Sometimes called the 'Eye of God' due to its appearance. Spans 2.5 light-years across.",
        size: "25'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NGC7293_%282004%29.jpg/1024px-NGC7293_%282004%29.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Helix_Nebula",
            nasa: "https://science.nasa.gov/missions/hubble/iridescent-glory-of-nearby-helix-nebula/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC7293"
        }
    },

    // Star Clusters
    {
        name: "Pleiades",
        catalog: "M45",
        type: "cluster",
        ra: 3.791,
        dec: 24.12,
        magnitude: 1.6,
        constellation: "Taurus",
        description: "The Seven Sisters. Most famous open cluster in the sky, 444 light-years away. Contains hot B-type stars wrapped in reflection nebulae.",
        size: "110'",
        equipment: "Naked eye / Binoculars",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/1280px-Pleiades_large.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Pleiades",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-45/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M45"
        }
    },
    {
        name: "Beehive Cluster",
        catalog: "M44 / NGC 2632",
        type: "cluster",
        ra: 8.670,
        dec: 19.98,
        magnitude: 3.7,
        constellation: "Cancer",
        description: "Ancient open cluster known since antiquity, cataloged by Ptolemy. Contains about 1,000 stars at 577 light-years. Best viewed with binoculars.",
        size: "95'",
        equipment: "Naked eye / Binoculars",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_cluster_Messier_44.jpg/1024px-Open_cluster_Messier_44.jpg",
        imageCredit: "2MASS/NASA",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Beehive_Cluster",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-44/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M44"
        }
    },
    {
        name: "Hercules Cluster",
        catalog: "M13 / NGC 6205",
        type: "cluster",
        ra: 16.695,
        dec: 36.46,
        magnitude: 5.8,
        constellation: "Hercules",
        description: "Greatest globular cluster in the northern sky. Contains several hundred thousand stars packed into a sphere 145 light-years across.",
        size: "20'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Messier_13.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_13",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-13/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M13"
        }
    },
    {
        name: "Great Cluster in Pegasus",
        catalog: "M15 / NGC 7078",
        type: "cluster",
        ra: 21.500,
        dec: 12.17,
        magnitude: 6.2,
        constellation: "Pegasus",
        description: "One of the oldest (12 billion years) and most densely packed globular clusters known. May contain an intermediate-mass black hole at its center.",
        size: "18'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Messier_15.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_15",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-15/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M15"
        }
    },
    {
        name: "Wild Duck Cluster",
        catalog: "M11 / NGC 6705",
        type: "cluster",
        ra: 18.851,
        dec: -6.27,
        magnitude: 6.3,
        constellation: "Scutum",
        description: "One of the richest and most compact open clusters known, with about 2,900 stars. Fan-shaped pattern resembles wild ducks in flight.",
        size: "14'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Messier11_-_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg/1024px-Messier11_-_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg",
        imageCredit: "Two Micron All Sky Survey",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Wild_Duck_Cluster",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-11/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M11"
        }
    },
    {
        name: "Double Cluster",
        catalog: "NGC 869/884",
        type: "cluster",
        ra: 2.333,
        dec: 57.13,
        magnitude: 3.7,
        constellation: "Perseus",
        description: "Two open clusters visible together in same field of view. Stunning sight at low magnification. Each cluster is about 7,500 light-years away.",
        size: "60'",
        equipment: "Naked eye / Binoculars",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Double_Cluster.jpg",
        imageCredit: "Astrophotography",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Double_Cluster",
            nasa: "https://science.nasa.gov/image-detail/double-cluster-ngc-869-and-ngc-884/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC869"
        }
    },
    {
        name: "Owl Cluster",
        catalog: "NGC 457",
        type: "cluster",
        ra: 1.328,
        dec: 58.28,
        magnitude: 6.4,
        constellation: "Cassiopeia",
        description: "Open cluster resembling an owl or E.T. with outstretched arms. Two bright stars form the eyes. Popular target for amateur astronomers.",
        size: "13'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Owl_Cluster_%28NGC_457_or_Caldwell_13%29.jpg",
        imageCredit: "Ole Nielsen",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/NGC_457",
            nasa: "https://science.nasa.gov/image-detail/owl-cluster-ngc-457/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC457"
        }
    },
    {
        name: "Butterfly Cluster",
        catalog: "M6 / NGC 6405",
        type: "cluster",
        ra: 17.668,
        dec: -32.25,
        magnitude: 4.2,
        constellation: "Scorpius",
        description: "Open cluster with stars arranged like butterfly wings. About 1,600 light-years away. Contains the orange giant star BM Scorpii.",
        size: "25'",
        equipment: "Naked eye / Binoculars",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Messier_6.jpg/1024px-Messier_6.jpg",
        imageCredit: "Ole Nielsen",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Butterfly_Cluster",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-6/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M6"
        }
    },
    {
        name: "Ptolemy Cluster",
        catalog: "M7 / NGC 6475",
        type: "cluster",
        ra: 17.898,
        dec: -34.79,
        magnitude: 3.3,
        constellation: "Scorpius",
        description: "Large bright open cluster visible to naked eye. Known since antiquity and recorded by Ptolemy in 130 AD. About 980 light-years away.",
        size: "80'",
        equipment: "Naked eye / Binoculars",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Messier7.jpg/1024px-Messier7.jpg",
        imageCredit: "ESO",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Ptolemy_Cluster",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-7/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M7"
        }
    },
    {
        name: "Globular Cluster M3",
        catalog: "M3 / NGC 5272",
        type: "cluster",
        ra: 13.703,
        dec: 28.38,
        magnitude: 6.2,
        constellation: "Canes Venatici",
        description: "One of the largest and brightest globular clusters. Contains about 500,000 stars and is 33,900 light-years away. Rich in variable stars.",
        size: "18'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Messier_3_Hubble_WikiSky.jpg/1024px-Messier_3_Hubble_WikiSky.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_3",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-3/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M3"
        }
    },
    {
        name: "Globular Cluster M5",
        catalog: "M5 / NGC 5904",
        type: "cluster",
        ra: 15.310,
        dec: 2.08,
        magnitude: 5.7,
        constellation: "Serpens",
        description: "One of the oldest globular clusters at 13 billion years. Contains over 100,000 stars and more than 100 variable stars.",
        size: "23'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Messier_5_Hubble_WikiSky.jpg/1024px-Messier_5_Hubble_WikiSky.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_5",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-5/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M5"
        }
    },
    {
        name: "Globular Cluster M92",
        catalog: "M92 / NGC 6341",
        type: "cluster",
        ra: 17.285,
        dec: 43.14,
        magnitude: 6.4,
        constellation: "Hercules",
        description: "Often overlooked in favor of nearby M13, but equally impressive. One of the oldest clusters at 14.2 billion years - nearly as old as the universe.",
        size: "14'",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Messier_92_Hubble.jpg",
        imageCredit: "NASA/ESA/Hubble",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Messier_92",
            nasa: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-92/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=M92"
        }
    }
];

// Planet data - positions are calculated dynamically
const planets = [
    {
        name: "Mercury",
        type: "planet",
        magnitude: -0.5,
        constellation: "Varies",
        description: "The smallest planet and closest to the Sun. Difficult to observe due to proximity to Sun. Best seen at greatest elongation, shortly after sunset or before sunrise.",
        size: "4.5\" - 13\"",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1024px-Mercury_in_true_color.jpg",
        imageCredit: "NASA/MESSENGER",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Mercury_(planet)",
            nasa: "https://science.nasa.gov/mercury/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Mercury"
        }
    },
    {
        name: "Venus",
        type: "planet",
        magnitude: -4.4,
        constellation: "Varies",
        description: "The brightest planet, often called the 'Morning Star' or 'Evening Star'. Covered in thick clouds that reflect sunlight brilliantly. Second planet from the Sun.",
        size: "10\" - 66\"",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Venus_2_Approach_Image.jpg/1024px-Venus_2_Approach_Image.jpg",
        imageCredit: "NASA/JPL-Caltech",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Venus",
            nasa: "https://science.nasa.gov/venus/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Venus"
        }
    },
    {
        name: "Mars",
        type: "planet",
        magnitude: 0.7,
        constellation: "Varies",
        description: "The Red Planet. Fourth planet from the Sun with a thin atmosphere. Shows polar ice caps and dark surface features in telescopes. Best viewed at opposition.",
        size: "3.5\" - 25\"",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1024px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
        imageCredit: "NASA/Kevin M. Gill",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Mars",
            nasa: "https://science.nasa.gov/mars/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Mars"
        }
    },
    {
        name: "Jupiter",
        type: "planet",
        magnitude: -2.5,
        constellation: "Varies",
        description: "The largest planet in our solar system. Shows cloud bands and the Great Red Spot in telescopes. Four bright Galilean moons visible with binoculars.",
        size: "30\" - 50\"",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/1024px-Jupiter_New_Horizons.jpg",
        imageCredit: "NASA/New Horizons",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Jupiter",
            nasa: "https://science.nasa.gov/jupiter/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Jupiter"
        }
    },
    {
        name: "Saturn",
        type: "planet",
        magnitude: 0.5,
        constellation: "Varies",
        description: "Famous for its spectacular ring system, visible in small telescopes. The rings are made of ice and rock particles. Second largest planet.",
        size: "15\" - 21\"",
        equipment: "Naked eye / Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1280px-Saturn_during_Equinox.jpg",
        imageCredit: "NASA/JPL/Cassini",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Saturn",
            nasa: "https://science.nasa.gov/saturn/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Saturn"
        }
    },
    {
        name: "Uranus",
        type: "planet",
        magnitude: 5.7,
        constellation: "Varies",
        description: "The ice giant with a blue-green color from methane in its atmosphere. Rotates on its side. Barely visible to naked eye under perfect conditions.",
        size: "3.4\" - 4.1\"",
        equipment: "Binoculars / Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Uranus_Voyager2_color_calibrated.png/1024px-Uranus_Voyager2_color_calibrated.png",
        imageCredit: "NASA/Voyager 2",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Uranus",
            nasa: "https://science.nasa.gov/uranus/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Uranus"
        }
    },
    {
        name: "Neptune",
        type: "planet",
        magnitude: 7.8,
        constellation: "Varies",
        description: "The most distant planet, appearing as a tiny blue dot even in large telescopes. Has the strongest winds in the solar system.",
        size: "2.2\" - 2.4\"",
        equipment: "Telescope",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Neptune_Voyager2_color_calibrated.png/1024px-Neptune_Voyager2_color_calibrated.png",
        imageCredit: "NASA/Voyager 2",
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Neptune",
            nasa: "https://science.nasa.gov/neptune/",
            simbad: "https://simbad.u-strasbg.fr/simbad/sim-id?Ident=Neptune"
        }
    }
];

// Orbital elements for planets (J2000 epoch)
const planetOrbitalElements = {
    Mercury: { a: 0.387, e: 0.206, I: 7.0, L: 252.25, Lp: 77.46, N: 48.33, dL: 149472.67 },
    Venus: { a: 0.723, e: 0.007, I: 3.39, L: 181.98, Lp: 131.53, N: 76.68, dL: 58517.82 },
    Mars: { a: 1.524, e: 0.093, I: 1.85, L: 355.43, Lp: 336.04, N: 49.56, dL: 19140.30 },
    Jupiter: { a: 5.203, e: 0.048, I: 1.31, L: 34.33, Lp: 14.33, N: 100.46, dL: 3034.90 },
    Saturn: { a: 9.537, e: 0.054, I: 2.49, L: 50.08, Lp: 93.06, N: 113.64, dL: 1222.11 },
    Uranus: { a: 19.19, e: 0.047, I: 0.77, L: 314.20, Lp: 173.00, N: 74.01, dL: 428.49 },
    Neptune: { a: 30.07, e: 0.009, I: 1.77, L: 304.22, Lp: 48.12, N: 131.79, dL: 218.46 }
};

// Calculate planet position (simplified)
function getPlanetPosition(planetName, date) {
    const elements = planetOrbitalElements[planetName];
    if (!elements) return null;

    const jd = getJulianDate(date);
    const T = (jd - 2451545.0) / 36525.0; // Centuries since J2000
    const d = jd - 2451545.0; // Days since J2000

    // Mean longitude
    const L = (elements.L + elements.dL * T / 36525) % 360;

    // Mean anomaly
    const M = (L - elements.Lp) % 360;
    const Mrad = toRadians(M);

    // Equation of center (simplified)
    const C = (2 * elements.e - elements.e * elements.e * elements.e / 4) * Math.sin(Mrad) +
              (5/4) * elements.e * elements.e * Math.sin(2 * Mrad);

    // True longitude
    const lon = L + toDegrees(C);

    // For outer planets, we need to account for Earth's position too
    // This is a simplified calculation
    const earthL = (100.46 + 35999.37 * T / 36525) % 360;
    const earthM = toRadians((earthL - 102.94) % 360);
    const earthC = 2 * 0.0167 * Math.sin(earthM);
    const earthLon = earthL + toDegrees(earthC);

    // Geocentric coordinates (very simplified)
    let ra, dec;

    if (planetName === 'Mercury' || planetName === 'Venus') {
        // Inner planets
        const elongation = lon - earthLon;
        ra = (earthLon + elongation * 0.7) / 15; // Convert to hours
        dec = elements.I * Math.sin(toRadians(lon)) * 0.8;
    } else {
        // Outer planets - simplified opposition calculation
        const helioLon = lon;
        const geoLon = helioLon; // Simplified
        ra = geoLon / 15;
        dec = elements.I * Math.sin(toRadians(geoLon)) * 1.2;
    }

    // Normalize RA to 0-24 hours
    ra = ((ra % 24) + 24) % 24;

    // Clamp declination
    dec = Math.max(-90, Math.min(90, dec));

    return { ra, dec };
}

// Astronomical calculation functions
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function getJulianDate(date) {
    const time = date.getTime();
    return (time / 86400000) + 2440587.5;
}

function getLocalSiderealTime(date, longitude) {
    const jd = getJulianDate(date);
    const T = (jd - 2451545.0) / 36525.0;
    let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) +
               0.000387933 * T * T - T * T * T / 38710000;
    gmst = gmst % 360;
    if (gmst < 0) gmst += 360;
    let lst = gmst + longitude;
    lst = lst % 360;
    if (lst < 0) lst += 360;
    return lst;
}

function getAltAz(ra, dec, date, lat, lon) {
    const raDegs = ra * 15;
    const lst = getLocalSiderealTime(date, lon);
    let ha = lst - raDegs;
    if (ha < 0) ha += 360;
    const haRad = toRadians(ha);
    const decRad = toRadians(dec);
    const latRad = toRadians(lat);
    const sinAlt = Math.sin(decRad) * Math.sin(latRad) +
                   Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad);
    const altitude = toDegrees(Math.asin(sinAlt));
    const cosAz = (Math.sin(decRad) - Math.sin(toRadians(altitude)) * Math.sin(latRad)) /
                  (Math.cos(toRadians(altitude)) * Math.cos(latRad));
    let azimuth = toDegrees(Math.acos(Math.max(-1, Math.min(1, cosAz))));
    if (Math.sin(haRad) > 0) {
        azimuth = 360 - azimuth;
    }
    return { altitude, azimuth };
}

function getMoonPhase(date) {
    const jd = getJulianDate(date);
    const daysSinceNew = (jd - 2451549.5) % 29.53059;
    const phase = daysSinceNew / 29.53059;
    const illumination = (1 - Math.cos(2 * Math.PI * phase)) / 2 * 100;
    let phaseName;
    if (daysSinceNew < 1.84566) phaseName = "New Moon";
    else if (daysSinceNew < 5.53699) phaseName = "Waxing Crescent";
    else if (daysSinceNew < 9.22831) phaseName = "First Quarter";
    else if (daysSinceNew < 12.91963) phaseName = "Waxing Gibbous";
    else if (daysSinceNew < 16.61096) phaseName = "Full Moon";
    else if (daysSinceNew < 20.30228) phaseName = "Waning Gibbous";
    else if (daysSinceNew < 23.99361) phaseName = "Last Quarter";
    else if (daysSinceNew < 27.68493) phaseName = "Waning Crescent";
    else phaseName = "New Moon";
    return { phase, phaseName, illumination: illumination.toFixed(0) };
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getVisibilityStatus(altitude) {
    if (altitude > 45) return { class: 'high', text: 'Excellent' };
    if (altitude > 20) return { class: 'medium', text: 'Good' };
    if (altitude > 5) return { class: 'low', text: 'Low' };
    return { class: 'none', text: 'Below Horizon' };
}

function getBestViewingTime(obj, date, lat, lon) {
    let bestAlt = -90;
    let bestTime = null;
    const startHour = 18;
    const endHour = 30;
    for (let h = startHour; h <= endHour; h++) {
        const checkDate = new Date(date);
        checkDate.setHours(h % 24, 0, 0, 0);
        if (h >= 24) checkDate.setDate(checkDate.getDate() + 1);
        const { altitude } = getAltAz(obj.ra, obj.dec, checkDate, lat, lon);
        if (altitude > bestAlt) {
            bestAlt = altitude;
            bestTime = checkDate;
        }
    }
    if (bestAlt > 0 && bestTime) {
        return formatTime(bestTime);
    }
    return "Not visible tonight";
}

function getDirection(azimuth) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                        'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(azimuth / 22.5) % 16;
    return directions[index];
}

function renderMoonPhase(phase) {
    const moonEl = document.getElementById('moonPhaseIcon');
    const illuminationPercent = (1 - Math.cos(2 * Math.PI * phase)) / 2;
    if (phase < 0.5) {
        const coverage = phase * 4;
        if (coverage <= 1) {
            moonEl.style.background = `linear-gradient(90deg, #222 50%, #fffde7 50%)`;
            moonEl.style.boxShadow = `inset ${10 - coverage * 20}px 0 0 #222, 0 0 30px rgba(255, 255, 200, 0.3)`;
        } else {
            moonEl.style.background = `linear-gradient(90deg, #fffde7 ${(coverage - 1) * 50}%, #222 ${(coverage - 1) * 50}%, #222 50%, #fffde7 50%)`;
            moonEl.style.boxShadow = `0 0 30px rgba(255, 255, 200, 0.3)`;
        }
    } else {
        const coverage = (phase - 0.5) * 4;
        if (coverage <= 1) {
            moonEl.style.background = `linear-gradient(90deg, #fffde7 50%, #222 50%)`;
            moonEl.style.boxShadow = `inset ${-10 + coverage * 20}px 0 0 #222, 0 0 30px rgba(255, 255, 200, 0.3)`;
        } else {
            moonEl.style.background = `linear-gradient(90deg, #fffde7 ${50 - (coverage - 1) * 50}%, #222 ${50 - (coverage - 1) * 50}%)`;
            moonEl.style.boxShadow = `0 0 30px rgba(255, 255, 200, 0.1)`;
        }
    }
}

function calculateSunTimes(date, lat, lon) {
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    const B = 2 * Math.PI * (dayOfYear - 81) / 365;
    const EoT = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    const decl = 23.45 * Math.sin(2 * Math.PI * (dayOfYear - 81) / 365);
    const cosHa = -Math.tan(toRadians(lat)) * Math.tan(toRadians(decl));
    if (cosHa > 1 || cosHa < -1) return null;
    const Ha = toDegrees(Math.acos(cosHa));

    // Get timezone offset in hours (negative for west of UTC)
    const timezoneOffset = -date.getTimezoneOffset() / 60;

    // Calculate solar noon in UTC, then convert to local time
    const solarNoonUTC = 12 - lon / 15 - EoT / 60;
    const solarNoon = solarNoonUTC + timezoneOffset;

    const sunriseHour = solarNoon - Ha / 15;
    const sunsetHour = solarNoon + Ha / 15;
    const cosHaCivil = (Math.cos(toRadians(90 + 6)) - Math.sin(toRadians(lat)) * Math.sin(toRadians(decl))) /
                       (Math.cos(toRadians(lat)) * Math.cos(toRadians(decl)));
    const HaCivil = Math.abs(cosHaCivil) <= 1 ? toDegrees(Math.acos(cosHaCivil)) : Ha + 30;
    const cosHaAstro = (Math.cos(toRadians(90 + 18)) - Math.sin(toRadians(lat)) * Math.sin(toRadians(decl))) /
                       (Math.cos(toRadians(lat)) * Math.cos(toRadians(decl)));
    const HaAstro = Math.abs(cosHaAstro) <= 1 ? toDegrees(Math.acos(cosHaAstro)) : Ha + 90;
    const civilTwilightEnd = solarNoon + HaCivil / 15;
    const astroTwilightEnd = solarNoon + HaAstro / 15;
    return {
        sunrise: hoursToTime(sunriseHour),
        sunset: hoursToTime(sunsetHour),
        civilTwilightEnd: hoursToTime(civilTwilightEnd),
        astroTwilightEnd: hoursToTime(astroTwilightEnd)
    };
}

function hoursToTime(hours) {
    while (hours < 0) hours += 24;
    while (hours >= 24) hours -= 24;
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    return `${displayH}:${m.toString().padStart(2, '0')} ${period}`;
}

// Create object card HTML with image and links
function createObjectCard(obj, position, bestTime, index) {
    const visibility = getVisibilityStatus(position.altitude);
    const direction = getDirection(position.azimuth);

    const imageHtml = obj.image
        ? `<div class="object-image-container" onclick="openModal(${index})">
               <img src="${obj.image}" alt="${obj.name}" class="object-image" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-image\\'>🌌</div>'">
               <div class="image-overlay">
                   <span class="image-credit">${obj.imageCredit}</span>
                   <span class="expand-icon">🔍</span>
               </div>
           </div>`
        : `<div class="no-image">🌌</div>`;

    const linksHtml = `
        <div class="info-links">
            ${obj.links.wikipedia ? `<a href="${obj.links.wikipedia}" target="_blank" rel="noopener" class="info-link">📖 Wikipedia</a>` : ''}
            ${obj.links.nasa ? `<a href="${obj.links.nasa}" target="_blank" rel="noopener" class="info-link">🚀 NASA</a>` : ''}
            ${obj.links.simbad ? `<a href="${obj.links.simbad}" target="_blank" rel="noopener" class="info-link">⭐ SIMBAD</a>` : ''}
        </div>
    `;

    return `
        <div class="object-card ${visibility.class === 'none' ? 'below-horizon' : ''}"
             data-type="${obj.type}"
             data-altitude="${position.altitude}"
             data-index="${index}">
            ${imageHtml}
            <div class="object-content">
                <div class="object-header">
                    <div>
                        <div class="object-name">${obj.name}</div>
                        <div class="object-catalog">${obj.catalog}</div>
                    </div>
                    <span class="object-type ${obj.type}">${obj.type}</span>
                </div>

                <div class="object-details">
                    <p>Magnitude: <span class="highlight">${obj.magnitude}</span></p>
                    <p>Current Altitude: <span class="highlight">${position.altitude.toFixed(1)}°</span>
                       (${direction}, Az: ${position.azimuth.toFixed(1)}°)</p>
                    <p>Size: ${obj.size}</p>
                </div>

                <span class="constellation">📍 ${obj.constellation}</span>

                <p class="object-description">${obj.description}</p>

                <div class="equipment">
                    <span>🔭 ${obj.equipment}</span>
                </div>

                <div class="visibility-bar">
                    <div class="visibility-fill ${visibility.class}"
                         style="width: ${Math.max(0, Math.min(100, position.altitude / 90 * 100))}%"></div>
                </div>

                <div class="visibility-text">
                    <span class="visibility-status ${visibility.class}">${visibility.text}</span>
                    <span class="best-time">Best time: ${bestTime}</span>
                </div>

                ${linksHtml}
            </div>
        </div>
    `;
}

// Modal functions
function openModal(index) {
    const obj = deepSkyObjects[index];
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLinks = document.getElementById('modalLinks');

    modalImage.src = obj.image;
    modalImage.alt = obj.name;
    modalTitle.textContent = `${obj.name} (${obj.catalog})`;
    modalDescription.textContent = obj.description;

    modalLinks.innerHTML = `
        ${obj.links.wikipedia ? `<a href="${obj.links.wikipedia}" target="_blank" rel="noopener">📖 Wikipedia</a>` : ''}
        ${obj.links.nasa ? `<a href="${obj.links.nasa}" target="_blank" rel="noopener">🚀 NASA Info</a>` : ''}
        ${obj.links.simbad ? `<a href="${obj.links.simbad}" target="_blank" rel="noopener">⭐ SIMBAD Database</a>` : ''}
        <a href="https://www.google.com/search?q=${encodeURIComponent(obj.name + ' ' + obj.catalog)}&tbm=isch" target="_blank" rel="noopener">🖼️ More Images</a>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Geocoding function using OpenStreetMap Nominatim
async function geocodeLocation(query) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
        const data = await response.json();

        if (data && data.length > 0) {
            return {
                name: data[0].display_name.split(',').slice(0, 2).join(','),
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon)
            };
        }
        return null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
}

// Update location display
function updateLocationDisplay() {
    const latDir = currentLocation.lat >= 0 ? 'N' : 'S';
    const lonDir = currentLocation.lon >= 0 ? 'E' : 'W';
    document.getElementById('latDisplay').textContent = `${Math.abs(currentLocation.lat).toFixed(4)}°${latDir}`;
    document.getElementById('lonDisplay').textContent = `${Math.abs(currentLocation.lon).toFixed(4)}°${lonDir}`;
    document.getElementById('footerLocation').textContent = currentLocation.name;
}

// Main update function
function updateView() {
    const date = currentDateTime;

    // Update sun times
    const sunTimes = calculateSunTimes(date, currentLocation.lat, currentLocation.lon);
    if (sunTimes) {
        document.getElementById('sunset').textContent = sunTimes.sunset;
        document.getElementById('sunrise').textContent = sunTimes.sunrise;
        document.getElementById('civilTwilight').textContent = sunTimes.civilTwilightEnd;
        document.getElementById('astroTwilight').textContent = sunTimes.astroTwilightEnd;
    }

    // Update moon phase
    const moon = getMoonPhase(date);
    document.getElementById('moonPhaseName').textContent = moon.phaseName;
    document.getElementById('moonIllumination').textContent = moon.illumination + '%';
    renderMoonPhase(moon.phase);

    const moonAge = moon.phase * 29.53;
    const moonRiseOffset = moonAge * 50 / 60;
    document.getElementById('moonRise').textContent = hoursToTime(18 + moonRiseOffset % 24);
    document.getElementById('moonSet').textContent = hoursToTime(6 + moonRiseOffset % 24);

    // Calculate positions for all deep sky objects
    const objectsWithPositions = deepSkyObjects.map((obj, index) => {
        const position = getAltAz(obj.ra, obj.dec, date, currentLocation.lat, currentLocation.lon);
        const bestTime = getBestViewingTime(obj, date, currentLocation.lat, currentLocation.lon);
        return { obj, position, bestTime, index };
    });

    // Calculate positions for planets
    planets.forEach((planet, i) => {
        const pos = getPlanetPosition(planet.name, date);
        if (pos) {
            const planetObj = { ...planet, ra: pos.ra, dec: pos.dec, catalog: "Planet" };
            const position = getAltAz(pos.ra, pos.dec, date, currentLocation.lat, currentLocation.lon);
            const bestTime = getBestViewingTime(planetObj, date, currentLocation.lat, currentLocation.lon);
            objectsWithPositions.push({
                obj: planetObj,
                position,
                bestTime,
                index: deepSkyObjects.length + i
            });
        }
    });

    // Sort by altitude then magnitude
    objectsWithPositions.sort((a, b) => {
        if (a.position.altitude > 0 && b.position.altitude <= 0) return -1;
        if (a.position.altitude <= 0 && b.position.altitude > 0) return 1;
        if (Math.abs(a.position.altitude - b.position.altitude) > 20) {
            return b.position.altitude - a.position.altitude;
        }
        return a.obj.magnitude - b.obj.magnitude;
    });

    // Store for filtering
    window.objectsData = objectsWithPositions;

    // Render with current filter
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const showOnlyVisible = document.getElementById('showOnlyVisible')?.checked ?? true;
    renderObjects(objectsWithPositions, activeFilter, showOnlyVisible);

    // Update last update time
    document.getElementById('lastUpdate').textContent = formatTime(new Date());
}

function renderObjects(objectsWithPositions, filter = 'all', showOnlyVisible = true) {
    const grid = document.getElementById('objectsGrid');
    let filtered = objectsWithPositions;

    if (filter !== 'all') {
        filtered = filtered.filter(item => item.obj.type === filter);
    }

    if (showOnlyVisible) {
        filtered = filtered.filter(item => item.position.altitude > 0);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #667; padding: 40px;">
            No ${filter === 'all' ? 'objects' : filter + 's'} ${showOnlyVisible ? 'currently visible' : 'found'}.
            ${showOnlyVisible ? 'Try unchecking "Show only currently visible objects" or changing the time.' : ''}
        </p>`;
        return;
    }

    grid.innerHTML = filtered.map(item =>
        createObjectCard(item.obj, item.position, item.bestTime, item.index)
    ).join('');
}

function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const showOnlyVisible = document.getElementById('showOnlyVisible').checked;
            renderObjects(window.objectsData, btn.dataset.filter, showOnlyVisible);
        });
    });

    // Visibility toggle
    document.getElementById('showOnlyVisible').addEventListener('change', (e) => {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderObjects(window.objectsData, activeFilter, e.target.checked);
    });

    // Location search
    document.getElementById('searchLocation').addEventListener('click', async () => {
        const query = document.getElementById('locationInput').value.trim();
        if (!query) return;

        const btn = document.getElementById('searchLocation');
        btn.textContent = '...';
        btn.disabled = true;

        const result = await geocodeLocation(query);

        if (result) {
            currentLocation = result;
            document.getElementById('locationInput').value = result.name;
            updateLocationDisplay();
            updateView();
        } else {
            alert('Location not found. Please try a different search term.');
        }

        btn.textContent = '🔍';
        btn.disabled = false;
    });

    // Enter key for location search
    document.getElementById('locationInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('searchLocation').click();
        }
    });

    // Use my location
    document.getElementById('useMyLocation').addEventListener('click', () => {
        if (navigator.geolocation) {
            const btn = document.getElementById('useMyLocation');
            btn.textContent = '...';
            btn.disabled = true;

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    currentLocation.lat = position.coords.latitude;
                    currentLocation.lon = position.coords.longitude;

                    // Reverse geocode to get place name
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                        const data = await response.json();
                        currentLocation.name = data.display_name.split(',').slice(0, 2).join(',');
                        document.getElementById('locationInput').value = currentLocation.name;
                    } catch (e) {
                        currentLocation.name = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
                        document.getElementById('locationInput').value = currentLocation.name;
                    }

                    updateLocationDisplay();
                    updateView();
                    btn.textContent = '📍';
                    btn.disabled = false;
                },
                (error) => {
                    alert('Unable to get your location. Please check your browser permissions.');
                    btn.textContent = '📍';
                    btn.disabled = false;
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });

    // Update button
    document.getElementById('updateBtn').addEventListener('click', () => {
        const dateInput = document.getElementById('dateInput').value;
        const timeInput = document.getElementById('timeInput').value;

        if (dateInput && timeInput) {
            currentDateTime = new Date(`${dateInput}T${timeInput}`);
        } else if (dateInput) {
            const now = new Date();
            currentDateTime = new Date(`${dateInput}T${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        }

        updateView();
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', () => {
        currentDateTime = new Date();
        const now = currentDateTime;
        document.getElementById('dateInput').value = now.toISOString().split('T')[0];
        document.getElementById('timeInput').value = now.toTimeString().slice(0, 5);

        currentLocation = {
            name: "Belmont, MA",
            lat: 42.3959,
            lon: -71.1784
        };
        document.getElementById('locationInput').value = currentLocation.name;
        updateLocationDisplay();
        updateView();
    });

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('imageModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('imageModal')) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize
function init() {
    // Set initial date/time inputs
    const now = new Date();
    document.getElementById('dateInput').value = now.toISOString().split('T')[0];
    document.getElementById('timeInput').value = now.toTimeString().slice(0, 5);

    // Set initial location display
    updateLocationDisplay();

    // Setup all event listeners
    setupEventListeners();

    // Initial render
    updateView();

    // Auto-update every minute
    setInterval(() => {
        // Only auto-update if viewing "now"
        const dateInput = document.getElementById('dateInput').value;
        const timeInput = document.getElementById('timeInput').value;
        const now = new Date();
        const inputDate = new Date(`${dateInput}T${timeInput}`);

        // If within 2 minutes of now, consider it "live"
        if (Math.abs(now - inputDate) < 120000) {
            currentDateTime = now;
            document.getElementById('dateInput').value = now.toISOString().split('T')[0];
            document.getElementById('timeInput').value = now.toTimeString().slice(0, 5);
            updateView();
        }
    }, 60000);
}

// Make openModal available globally
window.openModal = openModal;

document.addEventListener('DOMContentLoaded', init);
