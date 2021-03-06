
/**
 * Create view with bar effect
 * 
 * @param container
 * @param width
 * @param height
 */
function createViewBarSymbolEffect(container, width, height) {

	var view = new JenScript.View({
		name : container,
		width : width,
		height : height,
		
		west : 80,
		south:60
	});
	
	var bg1 = new JenScript.GradientViewBackground();
	view.addViewBackground(bg1);
	var textureBackground = new JenScript.TexturedViewBackground({
		opacity : 0.3,
		texture : JenScript.Texture.getTriangleCarbonFiber(),
		strokeColor : 'cyan',
		strokeWidth : 2,
		cornerRadius : 0
	});
	view.addViewBackground(textureBackground);

	var gloss = new JenScript.GlossViewForeground();
	view.addViewForeground(gloss);

	var proj = new JenScript.LinearProjection({
		name : "proj",
		paintMode : 'ACTIVE',
		minX : 0,
		maxX : 0,
		minY : -100,
		maxY : 1200
	});
	view.registerProjection(proj);

	var outline = new JenScript.DeviceOutlinePlugin({
		color : 'pink'
	});

	proj.registerPlugin(outline);
	
	var metrics = new JenScript.AxisMetricsModeled({
		axis : JenScript.Axis.AxisWest,
		minor : {
			tickMarkerSize : 2,
			tickMarkerColor : JenScript.RosePalette.AEGEANBLUE,
			tickMarkerStroke : 1
		},
		median : {
			tickMarkerSize : 4,
			tickMarkerColor : JenScript.RosePalette.EMERALD,
			tickMarkerStroke : 1.2,
			tickTextColor : JenScript.RosePalette.EMERALD,
			tickTextFontSize : 10
		},
		major : {
			tickMarkerSize : 8,
			tickMarkerColor : JenScript.RosePalette.TURQUOISE,
			tickMarkerStroke : 3,
			tickTextColor : JenScript.RosePalette.TURQUOISE,
			tickTextFontSize : 12
		}
	});
	proj.registerPlugin(metrics);
	
	var gridPlugin = new JenScript.GridModeledPlugin({
		gridOrientation : 'Horizontal',
		gridColor : 'white',
		gridWidth : 0.5,
		gridOpacity : 0.5
	});
	proj.registerPlugin(gridPlugin);
	
	//TOOL
	var tx1 = new JenScript.TranslatePlugin();
	proj.registerPlugin(tx1);
	tx1.registerWidget(new JenScript.TranslateCompassWidget({
		ringFillColor : 'pink'
	}));
	tx1.select();
	
	var zoomwheel = new JenScript.ZoomWheelPlugin({
		mode : 'wheelY'
	});
	proj.registerPlugin(zoomwheel);
	
	//BAR
	var symbolPlugin = new JenScript.SymbolPlugin({
		nature : 'Vertical'
	});
	proj.registerPlugin(symbolPlugin);
	
	var barLayer = new JenScript.SymbolBarLayer();
	symbolPlugin.addLayer(barLayer);
	
    
	var bar1 = new JenScript.SymbolBar({
		base : 0,
		value: 200,
		thickness : 32,
		direction : 'ascent',
		morpheStyle : 'Round',
		themeColor : JenScript.Color.brighten('rgb(53, 121, 170)',20),
		opacity : 1,
		barFill : new JenScript.SymbolBarFill0({}),
		barEffect  : new JenScript.SymbolBarEffect0({}),
	});
	var bar2 = new JenScript.SymbolBar({
		base : 0,
		value: 400,
		thickness : 32,
		direction : 'ascent',
		morpheStyle : 'Round',
		themeColor : JenScript.Color.brighten('rgb(124, 159, 93)',20),
		opacity : 1,
		barFill : new JenScript.SymbolBarFill0({}),
		barEffect  : new JenScript.SymbolBarEffect1({}),
	});
	var bar3 = new JenScript.SymbolBar({
		base : 0,
		value: 300,
		thickness : 32,
		direction : 'ascent',
		morpheStyle : 'Round',
		themeColor : JenScript.Color.brighten('rgb(223, 172, 63)',20),
		opacity : 1,
		barFill : new JenScript.SymbolBarFill0({}),
		barEffect  : new JenScript.SymbolBarEffect2({}),
	});
	var bar4 = new JenScript.SymbolBar({
		base : 0,
		value: 200,
		thickness : 32,
		direction : 'ascent',
		morpheStyle : 'Round',
		themeColor : JenScript.Color.brighten(JenScript.RosePalette.CORALRED,20),
		opacity : 1,
		barStroke :  new JenScript.SymbolBarStroke({strokeColor:'white'}),
		barFill : new JenScript.SymbolBarFill0({}),
		barEffect  : new JenScript.SymbolBarEffect3({}),
	});
	
	
	barLayer.addSymbol(JenScript.SymbolFiller.createGlue());
	barLayer.addSymbol(bar1);
	barLayer.addSymbol(JenScript.SymbolFiller.createStrut(50));
	barLayer.addSymbol(bar2);
	barLayer.addSymbol(JenScript.SymbolFiller.createStrut(50));
	barLayer.addSymbol(bar3);
	barLayer.addSymbol(JenScript.SymbolFiller.createStrut(50));
	barLayer.addSymbol(bar4);
	barLayer.addSymbol(JenScript.SymbolFiller.createGlue());
	
	

	
}
