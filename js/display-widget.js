/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayWOWidget(parameters)
{
    var widgetDiv = document.getElementById(parameters['target']);
    widgetDiv.innerHTML = '<iframe src="http://tmcasite/widget.html" width="' + parameters['width'] + '" height="' + parameters['height'] + '" seamless frameborder="0" scrolling="no"></iframe>';
}