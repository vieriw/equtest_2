var Simple1DNoise = function() {
			    this.MAX_VERTICES = 256;
			    this.MAX_VERTICES_MASK = this.MAX_VERTICES -1;
			    this.amplitude = 1;
			    this.scale = 0.01;

			    this.r = [];

			    for ( var i = 0; i < this.MAX_VERTICES; ++i ) {
			        this.r.push(Math.random());
			    }

			    
			};
Simple1DNoise.prototype.getVal = function( x ){
			        var scaledX = x * this.scale;
			        var xFloor = Math.floor(scaledX);
			        var t = scaledX - xFloor;
			        var tRemapSmoothstep = t * t * ( 3- 2 * t );

			        /// Modulo using &
			        var xMin = xFloor & this.MAX_VERTICES_MASK;
			        var xMax = ( xMin + 1 ) & this.MAX_VERTICES_MASK;

			        var y = this.lerp( this.r[ xMin ], this.r[ xMax ], tRemapSmoothstep );

			        return y * this.amplitude;
			};

Simple1DNoise.prototype.setAmplitude= function(newAmplitude) {
			            this.amplitude = newAmplitude;
			     }

Simple1DNoise.prototype.setScale= function(newScale) {
			            this.scale = newScale;
			     }      /**
			    * Linear interpolation function.
			    * @param a The lower integer value
			    * @param b The upper integer value
			    * @param t The value between the two
			    * @returns {number}
			    */
Simple1DNoise.prototype.lerp = function(a, b, t ) {
	return a * ( 1 - t ) + b * t;
};



function generateHeightRoad( height, times) {
	var data = new Float32Array(height)				
	for ( var i = 0; i < height; i ++ ) {
		var a=i+ times*(height-1);
	  
        data[ i ] = generator.getVal(a);                       
	}
        //  console.log(data)   
	return data;

}