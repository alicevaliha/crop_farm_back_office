import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graphbox = ({ datasource }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!datasource || !Array.isArray(datasource) || datasource.length === 0) {
      return; // Ne rien faire si datasource est vide ou non défini
    }

    const labels = datasource.map(entry => entry.mois);
    const data = datasource.map(entry => entry.total_recolte);

    const monthlyHarvests = {
      labels: labels,
      datasets: [
        {
          label: "Récoltes mensuelles",
          data: data,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: "line",
      data: monthlyHarvests,
    });

    return () => {
      myChart.destroy();
    };
  }, [datasource]);

  return (
    <div className="float-bloc-stat">
      <div className="greet">
        <div className="title">Statistiques du mois</div>
        <div className="subtitle">Évolution des récoltes mensuelles</div>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Graphbox;
