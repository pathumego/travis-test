function refreshFeatures() {

//  ------------------------------------------------ PPA Add scripts ------------------------------------------------///
var PPA = "";

if (document.getElementById("fontmatrix")) PPA += !document.getElementById("fontmatrix").checked ? '' : '\n' ;if (document.getElementById("krita")) PPA += !document.getElementById("krita").checked ? '' : 'ppa:kubuntu-ppa/backports\n' ;if (document.getElementById("inkscape")) PPA += !document.getElementById("inkscape").checked ? '' : 'ppa:inkscape.dev/trunk\n' ;if (document.getElementById("gimp-edge")) PPA += !document.getElementById("gimp-edge").checked ? '' : 'ppa:otto-kesselgulasch/gimp-edge\n' ;if (document.getElementById("gimp")) PPA += !document.getElementById("gimp").checked ? '' : 'ppa:otto-kesselgulasch/gimp\n' ;if (document.getElementById("fontforge")) PPA += !document.getElementById("fontforge").checked ? '' : 'ppa:fontforge/fontforge\n' ;


PPA = PPA.substring(0, PPA.length - 1);

//  ------------------------------------------------ // Install scripts //------------------------------------------------///

var INSTALL = "";


if (document.getElementById("fontmatrix")) INSTALL += !document.getElementById("fontmatrix").checked ? '' : 'fontmatrix\n' ;if (document.getElementById("krita")) INSTALL += !document.getElementById("krita").checked ? '' : 'krita\n' ;if (document.getElementById("inkscape")) INSTALL += !document.getElementById("inkscape").checked ? '' : 'inkscape-trunk\n' ;if (document.getElementById("gimp-edge")) INSTALL += !document.getElementById("gimp-edge").checked ? '' : 'gimp-gmic gmic gimp-plugin-registry\n' ;if (document.getElementById("gimp")) INSTALL += !document.getElementById("gimp").checked ? '' : 'gimp-gmic gmic gimp-plugin-registry\n' ;if (document.getElementById("fontforge")) INSTALL += !document.getElementById("fontforge").checked ? '' : 'fontforge\n' ;



// Show Install scripts
var packagelist = "";

packagelist +="################################################################################" + "\n" +"######** Use this Package List with Cleanstart shell Script to install **#######"+ "\n" + "################################################################################" + "\n" + PPA + "\n" + INSTALL;

$('#editor').html( packagelist );


};	

