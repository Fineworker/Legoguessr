// ========================================
// LEGO CITY GEOGUESSR
// ========================================


// ========================================
// SETTINGS
// ========================================

const debug = false;

const TOTAL_ROUNDS = 5;

const SUPABASE_URL = "https://lhxflcsquonojgscqmpp.supabase.co";
const SUPABASE_KEY = "sb_publishable_csl2TjzAnDCyO2LaJwMX5g_6ERH-Fki";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

let gameId = null;
let playerId = null;
let isHost = false;
let gameChannel = null;
// ========================================
// NORMAL GAME LOCATIONS
// ========================================
//
// These will be automatically generated
// by debug mode.
//
// After you've finished placing all
// locations, copy the generated array
// here and set:
//
//     debug = false
//
// ========================================

const locations = [

    {
        image: "images/LEGO CITY UNDERCOVER_20260808132946.jpg",
        x: 55.57,
        y: 85.3
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133013.jpg",
        x: 55.9,
        y: 84.11
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133045.jpg",
        x: 57.46,
        y: 84.72
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133104.jpg",
        x: 58.44,
        y: 85.08
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133127.jpg",
        x: 58.24,
        y: 82.94
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133249.jpg",
        x: 57.02,
        y: 79.95
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133322.jpg",
        x: 57.33,
        y: 79.31
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133359.jpg",
        x: 58.03,
        y: 76.24
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133415.jpg",
        x: 58.64,
        y: 76.22
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133500.jpg",
        x: 56.33,
        y: 68.36
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133527.jpg",
        x: 60.27,
        y: 67.84
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133545.jpg",
        x: 60.44,
        y: 67.17
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133547.jpg",
        x: 60.42,
        y: 67.15
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133631.jpg",
        x: 64.29,
        y: 60.47
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133638.jpg",
        x: 64.34,
        y: 60.48
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133713.jpg",
        x: 65.14,
        y: 60.37
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133733.jpg",
        x: 65.13,
        y: 62.81
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133929.jpg",
        x: 63.68,
        y: 54.71
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808133939.jpg",
        x: 63.7,
        y: 54.76
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134054.jpg",
        x: 63.68,
        y: 55.03
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134110.jpg",
        x: 63.32,
        y: 55.14
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134155.jpg",
        x: 62.36,
        y: 53.67
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134223.jpg",
        x: 61.31,
        y: 54.66
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134255.jpg",
        x: 61.92,
        y: 53.05
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134323.jpg",
        x: 62.17,
        y: 49.12
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134403.jpg",
        x: 62.85,
        y: 43.39
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134443.jpg",
        x: 63.85,
        y: 40.58
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134559.jpg",
        x: 63.57,
        y: 35.06
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260808134631.jpg",
        x: 62.62,
        y: 31.75
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230028.jpg",
        x: 22.48,
        y: 75.84
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230145.jpg",
        x: 21.86,
        y: 78.29
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230306.jpg",
        x: 25.79,
        y: 77.63
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230334.jpg",
        x: 28.36,
        y: 76.45
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230416.jpg",
        x: 27.21,
        y: 71.79
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230537.jpg",
        x: 23.97,
        y: 70.14
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230612.jpg",
        x: 23.01,
        y: 66.61
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230703.jpg",
        x: 24.05,
        y: 65.55
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230722.jpg",
        x: 23.04,
        y: 65.09
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230810.jpg",
        x: 22.21,
        y: 62.12
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230842.jpg",
        x: 18.46,
        y: 57.5
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809230925.jpg",
        x: 18.47,
        y: 43.87
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231007.jpg",
        x: 18.82,
        y: 35.87
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231035.jpg",
        x: 21.41,
        y: 32.36
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231059.jpg",
        x: 20.85,
        y: 29.54
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231117.jpg",
        x: 20.45,
        y: 30.13
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231220.jpg",
        x: 16.98,
        y: 26.85
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231325.jpg",
        x: 12.42,
        y: 26.28
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231344.jpg",
        x: 12.9,
        y: 25.71
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231403.jpg",
        x: 12.48,
        y: 24.6
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231430.jpg",
        x: 13.47,
        y: 22.15
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231453.jpg",
        x: 13.93,
        y: 21.65
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231506.jpg",
        x: 14.57,
        y: 21.9
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231632.jpg",
        x: 19.55,
        y: 22.84
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231657.jpg",
        x: 19.78,
        y: 23.19
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231730.jpg",
        x: 20.12,
        y: 22.12
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231759.jpg",
        x: 21.92,
        y: 22.29
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231820.jpg",
        x: 21.68,
        y: 19.77
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231917.jpg",
        x: 26.98,
        y: 16.52
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809231946.jpg",
        x: 21.39,
        y: 14.39
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232028.jpg",
        x: 24.38,
        y: 11.6
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232051.jpg",
        x: 26.36,
        y: 12.53
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232126.jpg",
        x: 26.35,
        y: 14.32
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232152.jpg",
        x: 27.39,
        y: 16.85
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232229.jpg",
        x: 28.47,
        y: 17.82
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232408.jpg",
        x: 29.83,
        y: 14.26
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232441.jpg",
        x: 31,
        y: 13.84
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232459.jpg",
        x: 29.67,
        y: 12.95
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232520.jpg",
        x: 34.17,
        y: 16.71
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232602.jpg",
        x: 39.91,
        y: 18.62
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232628.jpg",
        x: 39.99,
        y: 16.36
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232707.jpg",
        x: 49.58,
        y: 18.87
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232722.jpg",
        x: 50.33,
        y: 19.15
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232819.jpg",
        x: 54.06,
        y: 22.27
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232840.jpg",
        x: 55.69,
        y: 23.52
    },

    {
        image: "images/LEGO CITY UNDERCOVER_20260809232855.jpg",
        x: 55.9,
        y: 22.35
    }

];


// ========================================
// GAME STATE
// ========================================

let currentRound = 1;

let totalScore = 0;

let currentLocation = null;

let playerGuess = null;
let guessMade = false;

// ========================================
// CAMERA
// ========================================

let zoom = 1;

let panX = 0;

let panY = 0;


const MIN_ZOOM = 0.5;

const MAX_ZOOM = 15;

const ZOOM_STEP = 0.25;


// ========================================
// DRAG
// ========================================

let dragging = false;

let dragStartX = 0;

let dragStartY = 0;

let startPanX = 0;

let startPanY = 0;

let mouseMoved = false;


// ========================================
// ELEMENTS
// ========================================

const mapView =
    document.getElementById(
        "map-view"
    );


const mapWrapper =
    document.getElementById(
        "map-wrapper"
    );


const map =
    document.getElementById(
        "map"
    );


const guessMarker =
    document.getElementById(
        "guess-marker"
    );


const correctMarker =
    document.getElementById(
        "correct-marker"
    );


const line =
    document.getElementById(
        "line"
    );


const image =
    document.getElementById(
        "location-image"
    );


const zoomInButton =
    document.getElementById(
        "zoom-in"
    );


const zoomOutButton =
    document.getElementById(
        "zoom-out"
    );


const resetZoomButton =
    document.getElementById(
        "reset-zoom"
    );


const guessButton =
    document.getElementById(
        "guess-button"
    );


const roundText =
    document.getElementById(
        "round"
    );


const scoreText =
    document.getElementById(
        "score"
    );


const result =
    document.getElementById(
        "result"
    );


const resultTitle =
    document.getElementById(
        "result-title"
    );


const distanceText =
    document.getElementById(
        "distance"
    );


const pointsText =
    document.getElementById(
        "round-points"
    );


const nextButton =
    document.getElementById(
        "next-button"
    );


// ========================================
// CAMERA
// ========================================

function updateCamera() {

    mapWrapper.style.transform =
        `translate(${panX}px, ${panY}px) scale(${zoom})`;


    updateMarkerSizes();

}


// ========================================
// RESET CAMERA
// ========================================

function resetCamera() {

    zoom = 1;

    panX = 0;

    panY = 0;

    updateCamera();

}


// ========================================
// MARKER SIZE
// ========================================

function updateMarkerSizes() {

    const inverseScale =
        1 / zoom;


    guessMarker.style.transform =
        `translate(-50%, -50%) scale(${inverseScale})`;


    correctMarker.style.transform =
        `translate(-50%, -50%) scale(${inverseScale})`;

}


// ========================================
// ZOOM BUTTONS
// ========================================

zoomInButton.addEventListener(
    "click",
    function() {

        zoom =
            Math.min(
                MAX_ZOOM,
                zoom + ZOOM_STEP
            );

        updateCamera();

    }
);


zoomOutButton.addEventListener(
    "click",
    function() {

        zoom =
            Math.max(
                MIN_ZOOM,
                zoom - ZOOM_STEP
            );

        updateCamera();

    }
);


resetZoomButton.addEventListener(
    "click",
    function() {

        resetCamera();

    }
);


// ========================================
// MOUSE WHEEL ZOOM
// ========================================

mapView.addEventListener(
    "wheel",
    function(event) {

        event.preventDefault();


        const oldZoom =
            zoom;


        if (
            event.deltaY < 0
        ) {

            zoom =
                Math.min(
                    MAX_ZOOM,
                    zoom + ZOOM_STEP
                );

        } else {

            zoom =
                Math.max(
                    MIN_ZOOM,
                    zoom - ZOOM_STEP
                );

        }


        const rect =
            mapView.getBoundingClientRect();


        const mouseX =
            event.clientX -
            rect.left;


        const mouseY =
            event.clientY -
            rect.top;


        panX =
            mouseX -
            (
                (
                    mouseX -
                    panX
                ) /
                oldZoom
            ) *
            zoom;


        panY =
            mouseY -
            (
                (
                    mouseY -
                    panY
                ) /
                oldZoom
            ) *
            zoom;


        updateCamera();

    },
    {
        passive: false
    }
);


// ========================================
// DRAG START
// ========================================

mapView.addEventListener(
    "mousedown",
    function(event) {

        if (
            !result.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        dragging = true;

        mouseMoved = false;


        mapView.classList.add(
            "dragging"
        );


        dragStartX =
            event.clientX;


        dragStartY =
            event.clientY;


        startPanX =
            panX;


        startPanY =
            panY;

    }
);


// ========================================
// DRAG
// ========================================

window.addEventListener(
    "mousemove",
    function(event) {

        if (!dragging) {
            return;
        }


        const dx =
            event.clientX -
            dragStartX;


        const dy =
            event.clientY -
            dragStartY;


        if (
            Math.abs(dx) > 5 ||
            Math.abs(dy) > 5
        ) {

            mouseMoved = true;

        }


        panX =
            startPanX +
            dx;


        panY =
            startPanY +
            dy;


        updateCamera();

    }
);


// ========================================
// DRAG END
// ========================================

window.addEventListener(
    "mouseup",
    function() {

        dragging = false;

        mapView.classList.remove(
            "dragging"
        );

    }
);


// ========================================
// PLACE MARKER
// ========================================

function placeMarker(
    marker,
    xPercent,
    yPercent
) {

    const x =
        (
            xPercent /
            100
        ) *
        map.offsetWidth;


    const y =
        (
            yPercent /
            100
        ) *
        map.offsetHeight;


    marker.style.left =
        x + "px";


    marker.style.top =
        y + "px";


    marker.style.transform =
        `translate(-50%, -50%) scale(${1 / zoom})`;


    marker.style.display =
        "block";

}


// ========================================
// NORMAL GAME CLICK
// ========================================

mapView.addEventListener(
    "click",
    function(event) {

        if (debug) {
            return;
        }

        if (guessMade) {
            return;
        }

        if (mouseMoved) {
            return;
        }


        if (!currentLocation) {
            return;
        }


        const position =
            getMapPosition(event);


        if (!position) {
            return;
        }


        playerGuess =
            position;


        placeMarker(
            guessMarker,
            position.x,
            position.y
        );


        guessButton.disabled =
            false;

    }
);


// ========================================
// GET MAP POSITION
// ========================================

function getMapPosition(event) {

    const rect =
        mapView.getBoundingClientRect();


    const screenX =
        event.clientX -
        rect.left;


    const screenY =
        event.clientY -
        rect.top;


    const cameraX =
        screenX -
        panX;


    const cameraY =
        screenY -
        panY;


    const mapX =
        cameraX /
        zoom;


    const mapY =
        cameraY /
        zoom;


    const mapWidth =
        map.offsetWidth;


    const mapHeight =
        map.offsetHeight;


    const x =
        (
            mapX /
            mapWidth
        ) *
        100;


    const y =
        (
            mapY /
            mapHeight
        ) *
        100;


    if (
        x < 0 ||
        x > 100 ||
        y < 0 ||
        y > 100
    ) {

        return null;

    }


    return {

        x:
            Math.round(
                x * 100
            ) / 100,

        y:
            Math.round(
                y * 100
            ) / 100

    };

}


// ========================================
// NORMAL GAME
// ========================================

function startRound() {

    playerGuess = null;
    guessMade = false;

    guessMarker.style.display = "none";
    correctMarker.style.display = "none";
    line.style.display = "none";

    result.classList.add("hidden");

    guessButton.disabled = true;
    guessButton.textContent = "Make Guess";

    roundText.textContent = currentRound;
    scoreText.textContent = totalScore;

    resetCamera();

    currentLocation =
        locations[
            Math.floor(
                Math.random() * locations.length
            )
        ];

    image.src = currentLocation.image;
}


// ========================================
// MAKE GUESS
// ========================================

guessButton.addEventListener(
    "click",
    function() {

        // ==================================
        // MAKE GUESS
        // ==================================

        if (!guessMade) {

            if (
                !playerGuess ||
                !currentLocation
            ) {
                return;
            }


            // Mark the round as guessed

            guessMade = true;


            // Calculate distance

            const distance =
                calculateDistance(
                    playerGuess.x,
                    playerGuess.y,
                    currentLocation.x,
                    currentLocation.y
                );


            // Calculate points

            const points =
                calculatePoints(
                    distance
                );


            // Add score

            totalScore += points;

            scoreText.textContent =
                totalScore;


            // Show the REAL location

            placeMarker(
                correctMarker,
                currentLocation.x,
                currentLocation.y
            );


            // Draw line between guesses

            drawLine(
                playerGuess.x,
                playerGuess.y,
                currentLocation.x,
                currentLocation.y
            );


            // Show result

            result.classList.remove(
                "hidden"
            );


            // Result title

            if (points >= 4500) {

                resultTitle.textContent =
                    "🔥 Amazing!";

            } else if (points >= 3000) {

                resultTitle.textContent =
                    "👍 Great guess!";

            } else if (points >= 1500) {

                resultTitle.textContent =
                    "🙂 Not bad!";

            } else {

                resultTitle.textContent =
                    "😅 Better luck next time!";

            }


            distanceText.textContent =
                "Distance: " +
                Math.round(distance) +
                " map units";


            pointsText.textContent =
                "Points this round: +" +
                points;


            // Change the SAME button

            if (
                currentRound >= TOTAL_ROUNDS
            ) {

                guessButton.textContent =
                    "See Final Score";

            } else {

                guessButton.textContent =
                    "Next Round";

            }


            // Keep button enabled

            guessButton.disabled =
                false;

        }


        // ==================================
        // NEXT ROUND
        // ==================================

        else {

            if (
                currentRound >=
                TOTAL_ROUNDS
            ) {

                showFinalScore();

            } else {

                currentRound++;

                startRound();

            }

        }

    }
);


// ========================================
// DISTANCE
// ========================================

function calculateDistance(
    x1,
    y1,
    x2,
    y2
) {

    const dx =
        x1 - x2;


    const dy =
        y1 - y2;


    return Math.sqrt(
        dx * dx +
        dy * dy
    );

}


// ========================================
// SCORE
// ========================================

function calculatePoints(
    distance
) {

    if (
        distance <= 0.05
    ) {

        return 5000;

    }


    const score =
        5000 *
        Math.exp(
            -distance / 10
        );


    return Math.max(
        0,
        Math.round(score)
    );

}


// ========================================
// DRAW LINE
// ========================================

function drawLine(
    x1,
    y1,
    x2,
    y2
) {

    const mapWidth =
        map.offsetWidth;


    const mapHeight =
        map.offsetHeight;


    const startX =
        (
            x1 /
            100
        ) *
        mapWidth;


    const startY =
        (
            y1 /
            100
        ) *
        mapHeight;


    const endX =
        (
            x2 /
            100
        ) *
        mapWidth;


    const endY =
        (
            y2 /
            100
        ) *
        mapHeight;


    const dx =
        endX -
        startX;


    const dy =
        endY -
        startY;


    const length =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(
            dy,
            dx
        ) *
        180 /
        Math.PI;


    line.style.left =
        startX + "px";


    line.style.top =
        startY + "px";


    line.style.width =
        length + "px";


    line.style.transform =
        `rotate(${angle}deg)`;


    line.style.display =
        "block";

}





// ========================================
// FINAL SCORE
// ========================================

function showFinalScore() {

    result.classList.remove(
        "hidden"
    );


    resultTitle.textContent =
        "🏆 Game Complete!";


    distanceText.textContent =
        "You played " +
        TOTAL_ROUNDS +
        " rounds.";


    pointsText.textContent =
        "Final score: " +
        totalScore +
        " / " +
        (
            TOTAL_ROUNDS *
            5000
        );


    nextButton.textContent =
        "Play Again";


    nextButton.onclick =
        function() {

            currentRound = 1;

            totalScore = 0;

            nextButton.onclick = null;

            startRound();

        };

}


// ============================================================
// ============================================================
// DEBUG LOCATION EDITOR
// ============================================================
// ============================================================

const debugPanel =
    document.getElementById(
        "debug-panel"
    );


const imageFolder =
    document.getElementById(
        "image-folder"
    );


const debugImageNumber =
    document.getElementById(
        "debug-image-number"
    );


const debugImageTotal =
    document.getElementById(
        "debug-image-total"
    );


const debugFilename =
    document.getElementById(
        "debug-filename"
    );


const debugNext =
    document.getElementById(
        "debug-next"
    );


const debugCopy =
    document.getElementById(
        "debug-copy"
    );


const debugCode =
    document.getElementById(
        "debug-code"
    );


let debugFiles = [];

let debugIndex = 0;

let debugLocations = [];

let debugPosition = null;


// ========================================
// HIDE DEBUG IF DISABLED
// ========================================

if (!debug) {

    debugPanel.style.display =
        "none";

}


// ========================================
// SELECT FOLDER
// ========================================

imageFolder.addEventListener(
    "change",
    function(event) {

        const files =
            Array.from(
                event.target.files
            );


        // Keep image files only

        debugFiles =
            files.filter(
                function(file) {

                    const isImage =
                        file.type.startsWith(
                            "image/"
                        );


                    const filename =
                        file.name.toLowerCase();


                    // Ignore map.jpg

                    const isMap =
                        filename ===
                        "map.jpg";


                    return (
                        isImage &&
                        !isMap
                    );

                }
            );


        // Sort naturally

        debugFiles.sort(
            function(a, b) {

                return a.name.localeCompare(
                    b.name,
                    undefined,
                    {
                        numeric: true,
                        sensitivity: "base"
                    }
                );

            }
        );


        debugIndex = 0;

        debugLocations = [];

        debugPosition = null;


        debugImageTotal.textContent =
            debugFiles.length;


        if (
            debugFiles.length === 0
        ) {

            debugFilename.textContent =
                "No images found.";

            debugCode.textContent =
                "No image files were found.";

            debugNext.disabled =
                true;

            debugCopy.disabled =
                true;

            return;

        }


        debugCopy.disabled =
            false;


        loadDebugImage();

    }
);


// ========================================
// LOAD DEBUG IMAGE
// ========================================

function loadDebugImage() {

    if (
        debugIndex >=
        debugFiles.length
    ) {

        finishDebugMode();

        return;

    }


    const file =
        debugFiles[debugIndex];


    debugImageNumber.textContent =
        debugIndex + 1;


    debugImageTotal.textContent =
        debugFiles.length;


    debugFilename.textContent =
        file.name;


    const imageURL =
        URL.createObjectURL(
            file
        );


    image.src =
        imageURL;


    guessMarker.style.display =
        "none";


    correctMarker.style.display =
        "none";


    line.style.display =
        "none";


    debugPosition = null;


    debugNext.disabled =
        true;


    debugCode.textContent =
        "// Click the map to place the location";


    resetCamera();

}


// ========================================
// DEBUG MAP CLICK
// ========================================

function handleDebugClick(
    event
) {

    if (
        debugFiles.length === 0
    ) {

        return;

    }


    const position =
        getMapPosition(
            event
        );


    if (!position) {

        return;

    }


    debugPosition =
        position;


    placeMarker(
        guessMarker,
        position.x,
        position.y
    );


    const file =
        debugFiles[debugIndex];


    const code =
`{
    image: "images/${file.name}",
    x: ${position.x},
    y: ${position.y}
},`;


    debugCode.textContent =
        code;


    debugNext.disabled =
        false;

}


// ========================================
// DEBUG CLICK
// ========================================

mapView.addEventListener(
    "click",
    function(event) {

        if (debug) {
            return;
        }

        // Don't allow another guess
        // after the round has been guessed.
        if (guessMade) {
            return;
        }

        if (mouseMoved) {
            return;
        }

        if (!currentLocation) {
            return;
        }

        const position =
            getMapPosition(event);

        if (!position) {
            return;
        }

        playerGuess = position;

        placeMarker(
            guessMarker,
            position.x,
            position.y
        );

        guessButton.disabled = false;

    }
);


// ========================================
// NEXT IMAGE
// ========================================

debugNext.addEventListener(
    "click",
    function() {

        if (!debugPosition) {

            return;

        }


        const file =
            debugFiles[debugIndex];


        debugLocations.push({

            image:
                "images/" +
                file.name,

            x:
                debugPosition.x,

            y:
                debugPosition.y

        });


        debugIndex++;


        loadDebugImage();

    }
);


// ========================================
// COPY ALL LOCATIONS
// ========================================

debugCopy.addEventListener(
    "click",
    async function() {

        if (
            debugLocations.length === 0
        ) {

            return;

        }


        const output =
            createLocationsCode();


        debugCode.textContent =
            output;


        try {

            await navigator.clipboard.writeText(
                output
            );


            debugCopy.textContent =
                "Copied!";


            setTimeout(
                function() {

                    debugCopy.textContent =
                        "Copy All Locations";

                },
                1500
            );

        } catch (error) {

            console.log(
                "Clipboard failed:",
                error
            );

        }

    }
);


// ========================================
// CREATE LOCATIONS CODE
// ========================================

function createLocationsCode() {

    return `const locations = [

${debugLocations
    .map(
        function(location) {

            return `    {
        image: "${location.image}",
        x: ${location.x},
        y: ${location.y}
    }`;

        }
    )
    .join(",\n\n")}

];`;

}


// ========================================
// FINISHED DEBUG MODE
// ========================================

function finishDebugMode() {

    debugFilename.textContent =
        "✅ All images completed!";


    debugNext.disabled =
        true;


    debugCopy.disabled =
        false;


    debugCode.textContent =
        createLocationsCode();

}
function generateGameCode() {

    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 6; i++) {
        code += characters[
            Math.floor(Math.random() * characters.length)
        ];
    }

    return code;
}


async function createGame() {

    const name =
        document.getElementById("playerName").value.trim();

    if (!name) {
        alert("Enter your name first.");
        return;
    }

    const code = generateGameCode();

    const { data: game, error } =
        await supabaseClient
            .from("games")
            .insert({
                code: code
            })
            .select()
            .single();

    if (error) {
        console.error("CREATE GAME ERROR:", error);
        alert(error.message);
        return;
    }

    gameId = game.id;
    isHost = true;

    const { data: player, error: playerError } =
        await supabaseClient
            .from("players")
            .insert({
                game_id: gameId,
                name: name
            })
            .select()
            .single();

    if (playerError) {

        console.error(playerError);

        return;
    }

    playerId = player.id;

    showWaitingRoom(code);

    listenForPlayers();
}
async function joinGame() {

    const name =
        document.getElementById("playerName").value.trim();

    const code =
        document.getElementById("gameCode").value
            .trim()
            .toUpperCase();

    if (!name) {
        alert("Enter your name first.");
        return;
    }

    if (!code) {
        alert("Enter a game code.");
        return;
    }


    const { data: game, error } =
        await supabaseClient
            .from("games")
            .select("*")
            .eq("code", code)
            .single();


    if (error || !game) {

        alert("Game not found.");

        return;
    }


    if (game.status !== "waiting") {

        alert("That game has already started.");

        return;
    }


    gameId = game.id;
    isHost = false;


    const { data: player, error: playerError } =
        await supabaseClient
            .from("players")
            .insert({
                game_id: gameId,
                name: name
            })
            .select()
            .single();


    if (playerError) {

        console.error(playerError);

        return;
    }


    playerId = player.id;

    showWaitingRoom(code);

    listenForPlayers();
}
function showWaitingRoom(code) {

    document.getElementById("menu").style.display = "none";

    document.getElementById("waitingRoom").style.display = "block";

    document.getElementById("displayGameCode").textContent = code;

    if (isHost) {

        document.getElementById("startGame").style.display = "block";

    }
}
async function updatePlayerList() {

    const { data: players, error } =
        await supabaseClient
            .from("players")
            .select("*")
            .eq("game_id", gameId)
            .order("created_at");


    if (error) {

        console.error(error);

        return;
    }


    const list =
        document.getElementById("playerList");

    list.innerHTML = "";


    players.forEach(player => {

        const div = document.createElement("div");

        div.textContent =
            player.name +
            (player.id === playerId ? " (You)" : "");

        list.appendChild(div);

    });
}
function listenForPlayers() {

    updatePlayerList();


    gameChannel =
        supabaseClient
            .channel("game-" + gameId)

            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "players",
                    filter: "game_id=eq." + gameId
                },
                () => {

                    updatePlayerList();

                }
            )

            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "games",
                    filter: "id=eq." + gameId
                },
                payload => {

                    if (
                        payload.new.status === "playing"
                    ) {

                        startMultiplayerGame();

                    }

                }
            )

            .subscribe();
}
async function startGame() {

    if (!isHost) {
        return;
    }


    const { error } =
        await supabaseClient
            .from("games")
            .update({
                status: "playing"
            })
            .eq("id", gameId);


    if (error) {

        console.error(error);

        alert("Could not start game.");

    }
}
document
    .getElementById("startGame")
    .addEventListener(
        "click",
        startGame
    );
function startMultiplayerGame() {

    document.getElementById("lobby").style.display = "none";

    // Put your existing game-start function here.
    // For example:
    // startGameRound();
}
if (!debug) {

    startRound();

}
document
    .getElementById("createGame")
    .addEventListener(
        "click",
        createGame
    );


document
    .getElementById("joinGame")
    .addEventListener(
        "click",
        joinGame
    );
    