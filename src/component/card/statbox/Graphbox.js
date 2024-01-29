import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./index.css";

const Graphbox = ({ datasource }) => {
  const [doughnutData, setDoughnutData] = useState(null);

  useEffect(() => {
    if (!datasource || !Array.isArray(datasource) || datasource.length === 0) {
      return; // Ne rien faire si datasource est vide ou non défini
    }

    const labels = datasource.map((entry) => entry.nom_plante);
    const data = datasource.map((entry) => entry.pourcentage_utilisation);
    const backgroundColors = generateRandomColors(datasource.length);

    const newDoughnutData = {
      labels: labels,
      datasets: [
        {
          label: "Statistiques des plantes",
          data: data,
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
        },
      ],
    };

    setDoughnutData(newDoughnutData);
  }, [datasource]);

  const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(color);
    }
    return colors;
  };

  return (
    <div className="float-bloc-graph">
      <div className="greet">
        <div className="title">Statistiques utilisation des plantes</div>
        <div className="subtitle">
          Statistiques des plantes utilisées/plantées
        </div>
      </div>
      {doughnutData && <Doughnut data={doughnutData} />}
    </div>
  );
};

export default Graphbox;
