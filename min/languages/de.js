/*! 
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function(){var n={delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(){return"."},currency:{symbol:"€"}};"undefined"!=typeof module&&module.exports&&(module.exports=n),"undefined"!=typeof window&&this.numeral&&this.numeral.language&&this.numeral.language("de",n)})();