    var  dataArray = [5, 7];

    const WIDTH = 500;
    const HEIGHT = 500;

    var widthScale = d3.scaleLinear()
            .domain([0, 20])
            .range([0, WIDTH]);

    var colorScale = d3.scaleLinear()
            .domain([0, 40])
            .range(['green', 'blue'])

    var axis = d3.axisBottom()
            .ticks(20)
            .scale(widthScale);

    var canvas = d3.select("body")
            .append('svg')
            .attr('width', WIDTH)
            .attr('height', HEIGHT)
            .append('g')
            .attr('transform', 'translate(20, 50)')

    canvas.append('g')        
            .call(axis)
            .attr('transform', 'translate(0, 250)');;

    var circle1 = canvas.append('circle')
                    .attr('cx', 50)
                    .attr('cy', 50)
                    .attr('r', 25);

    circle1.transition()
        .duration(1000)
        .attr('cx', 150)
        // .transition()
        // .attr('fill', 'red')
        // .attr('cy', 100);

    // var circle2 = canvas.append('circle')
    //                 .attr('cx', 200)
    //                 .attr('cy', 100)
    //                 .attr('r', 25);

    // var circle3 = canvas.append('circle')
    //                 .attr('cx', 200)
    //                 .attr('cy', 200)
    //                 .attr('r', 25);

    // var circles = canvas.selectAll('circle')
    //             .data(dataArray)
    //             .attr('fill', 'blue')
    //             .exit()
    //                 .attr('fill', 'green')
                // .enter()
                //     .append('circle')
                //     .attr('cx', 50)
                //     .attr('cy', 50)
                //     .attr('r', 25)
                //     .attr('fill', 'red');

    // var bars = canvas.selectAll('rect')
    //         .data(dataArray)
    //         .enter()
    //             .append('rect')
    //             .attr('width', function(d){ return widthScale(d); })
    //             .attr('height', 50)
    //             .attr('fill', function(d) { return colorScale(d)})
    //             .attr('y', function(d, i){return i * 60})
