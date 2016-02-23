		$(function() {
			var timeline_width = 200;
			var timeline_height = 20;
			
			$( ".timeline" ).each(function( ) {
				var dataMin = $( this ).attr("data-min");
				var dataMax = $( this ).attr("data-max");
				var dataValue = $( this ).attr("data-value");
				
				var step = (timeline_width-10)/(dataMax - dataMin);
				var pos = (step * (dataValue - dataMin))+5;
				
				var svg = Pablo($( this )).svg({
					width: timeline_width,
					height: timeline_height
					});
				
				svg.line({  
					x1:5,
                    y1:timeline_height/2,
                    x2:timeline_width-5,
                    y2:timeline_height/2,
                    stroke: '#BBB',
                    'stroke-width': 0.75})
				
				svg.circle({
					cx: pos,
					cy: timeline_height/2,
					r: 4,
					fill:  '#e68a00',
					stroke:'#060',
					'stroke-width': 0});
			});
			
			$( ".timerange" ).each(function( ) {
				var dataMin = $( this ).attr("data-min");
				var dataMax = $( this ).attr("data-max");
				var dataStart = $( this ).attr("data-start");
				var dataStop = $( this ).attr("data-stop");
				
				var step = (timeline_width-10)/(dataMax - dataMin);
				var posStart = (step * (dataStart - dataMin)) + 5;
				var posStop = (step * (dataStop - dataMin)) + 5;
				
				var svg = Pablo($( this )).svg({
					width: timeline_width,
					height: timeline_height
					});
				
				svg.line({  
					x1:5,
                    y1:timeline_height/2,
                    x2:timeline_width-5,
                    y2:timeline_height/2,
                    stroke: '#BBB',
                    'stroke-width': 0.75})
				
				svg.rect({
					x:posStart-4, 
					y:timeline_height/2-4, 
					rx:4, 
					ry:4, 
					width:(posStop-posStart)+8, 
					height:8, 
					fill:'#e68a00'});
			});
			$( ".timelegend" ).each(function( ) {
				var dataMin = $( this ).attr("data-min");
				var dataMax = $( this ).attr("data-max");
				
				var step = (timeline_width-10)/(dataMax - dataMin);
				
				var legend_height = timeline_height+10;
				
				var svg = Pablo($( this )).svg({
					width: timeline_width,
					height: legend_height
					});
				
				svg.line({  
					x1:5,
                    y1:legend_height-3,
                    x2:timeline_width-5,
                    y2:legend_height-3,
                    stroke: '#BBB',
                    'stroke-width': 0.75})
				
				// tick
				for (i = 1; i<(dataMax - dataMin); i++) {
					svg.line({  
						x1:5+step*i,
						y1:legend_height-8,
						x2:5+step*i,
						y2:legend_height-3,
						stroke: '#BBB',
						'stroke-width': 0.75})					
				}
				// label
				var labelMin = svg.text({
					x:step-6, y: legend_height-18,
					fill:'#BBB',
					'font-size':'10px',
					'font-family':'sans-serif'
				});
				labelMin.content((parseInt(dataMin)+1).toString());

				var labelMax = svg.text({
					x:step*((dataMax - dataMin)-1)-6, y: legend_height-18,
					fill:'#BBB',
					'font-size':'10px',
					'font-family':'sans-serif'
				});
				labelMax.content((dataMax-1).toString());
				
			});
		});