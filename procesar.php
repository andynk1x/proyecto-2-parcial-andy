<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST['nombre'] ?? '');
    $edad = (int)($_POST['edad'] ?? 0);
    $color = $_POST['color'] ?? 'negro';

    if ($color === "blanco") {
        $bg = "#f9fafb";
        $card = "#ffffff";
        $text = "#111";
    } else {
        $bg = "#0a0a0a";
        $card = "#1a1a1a";
        $text = "white";
    }

    echo "<style>
        body {
            background: $bg;
            color: $text;
            font-family: Arial;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }
        .card {
            background: $card;
            padding:30px;
            border-radius:10px;
            text-align:center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
    </style>";

    if (!empty($nombre) && $edad > 0) {
        echo "<div class='card'>";
        echo "<h2>Hola, un gusto tenerte aqui $nombre </h2>";
        echo "<p>Tienes una edad de $edad años</p>";
        echo "<p>Gracias por tu compra, espero que disfrutes tu nuevo auto color <b>$color</b> 🚗</p>";
        echo "</div>";
    } else {
        echo "Datos inválidos";
    }
}
?>