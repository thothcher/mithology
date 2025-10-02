  // ===================== DATA =====================
    const datasets = {
      greek: {
        name: "Chaos", role: "Primordial Void",
        children: [
          { name: "Gaia", role: "Earth Goddess", children: [
            { name: "Uranus", role: "Sky God", children: [
              { name: "Cronus", role: "Titan, Father of Olympians", children: [
                { name: "Zeus", role: "Sky God, King of Gods" },
                { name: "Hera", role: "Marriage Goddess" },
                { name: "Poseidon", role: "Sea God" },
                { name: "Hades", role: "Underworld God" },
                { name: "Demeter", role: "Harvest Goddess" },
                { name: "Hestia", role: "Hearth Goddess" }
              ]}
            ]}
          ]}
        ]
      },
      roman: {
        name: "Saturn", role: "Titan (Cronus in Greek)",
        children: [
          { name: "Jupiter", role: "Sky God (Zeus)" },
          { name: "Juno", role: "Marriage Goddess (Hera)" },
          { name: "Neptune", role: "Sea God (Poseidon)" },
          { name: "Pluto", role: "Underworld God (Hades)" },
          { name: "Ceres", role: "Harvest Goddess (Demeter)" },
          { name: "Vesta", role: "Hearth Goddess (Hestia)" }
        ]
      },
      egyptian: {
        name: "Ra", role: "Sun God, Creator",
        children: [
          { name: "Shu", role: "Air God", children: [
            { name: "Geb", role: "Earth God", children: [
              { name: "Osiris", role: "Afterlife God" },
              { name: "Isis", role: "Magic & Motherhood Goddess" },
              { name: "Set", role: "Chaos & Storm God" },
              { name: "Nephthys", role: "Mourning Goddess" }
            ]}
          ]}
        ]
      }
    };

    // ===================== CHART FUNCTION =====================
    function loadData(myth) {
      const data = datasets[myth];
      document.getElementById("chart").innerHTML = ""; // clear old chart

      const width = 900, height = 600;
      const svg = d3.select("#chart").append("svg")
        .attr("width", width)
        .attr("height", height);

      const root = d3.hierarchy(data);
      const treeLayout = d3.tree().size([width - 200, height - 200]);
      treeLayout(root);

      // Links
      svg.selectAll("line")
        .data(root.links())
        .enter()
        .append("line")
        .attr("x1", d => d.source.x + 100)
        .attr("y1", d => d.source.y + 50)
        .attr("x2", d => d.target.x + 100)
        .attr("y2", d => d.target.y + 50)
        .attr("stroke", "#555");

      // Nodes
      const nodes = svg.selectAll("circle")
        .data(root.descendants())
        .enter()
        .append("circle")
        .attr("cx", d => d.x + 100)
        .attr("cy", d => d.y + 50)
        .attr("r", 20)
        .attr("fill", myth === "greek" ? "#88c" : myth === "roman" ? "#c44" : "#cc8")
        .on("mouseover", function(event, d) {
          const tooltip = document.createElement("div");
          tooltip.id = "tooltip";
          tooltip.innerHTML = `<b>${d.data.name}</b><br>${d.data.role || ""}`;
          document.body.appendChild(tooltip);
          tooltip.style.left = event.pageX + "px";
          tooltip.style.top = event.pageY + "px";
        })
        .on("mouseout", function() {
          document.getElementById("tooltip")?.remove();
        });

      // Labels
      svg.selectAll("text")
        .data(root.descendants())
        .enter()
        .append("text")
        .attr("x", d => d.x + 100)
        .attr("y", d => d.y + 50)
        .attr("dy", 35)
        .attr("text-anchor", "middle")
        .text(d => d.data.name);
    }

    // Load Greek by default
    loadData("greek");