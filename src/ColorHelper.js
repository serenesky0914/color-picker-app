


const ColorHelpers = {
    c_red : 0,
    c_green : 0,
    c_blue : 0,
    de_color : 'rgb(0, 0, 0)',
    ch_color : 'rgb(0, 0, 0)',
    hexToRGB: (hex) => {
        hex = '0x' + hex
        let r = hex >> 16 & 0xFF
        let g = hex >> 8 & 0xFF
        let b = hex & 0xFF
        return `rgb(${r}, ${g}, ${b})`
    },
    rgbEachToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);

        
        let r = parseInt(rgb[1], 16),
        g = parseInt(rgb[1], 16),
        b = parseInt(rgb[2], 16);
        
        console.log('r : ', "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));

        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    
    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return r + "," + g + "," + b;//return 23,14,45 -> reformat if needed 
        }
        return null;
    },
    redColorNum(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        // this.c_red = parseInt(rgb[0], 16);
        return parseInt(rgb[0], 16);
    },
    greenColorNum(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        
        return parseInt(rgb[1], 16);
    },
    blueColorNum(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        
        return parseInt(rgb[2], 16);
    },
    
}

export default ColorHelpers;