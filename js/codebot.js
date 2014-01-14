/*
	The MIT License (MIT)

	Copyright (c) 2013 Fernando Bevilacqua

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var CODEBOT = new function() {
	var mPlugins = {};
	
	var invoke = function(theObj, theMethod, theParam) {
		if(theObj && theObj[theMethod]) {
			return theObj[theMethod](theParam);
		}
	};
    
    var loadPlugins = function(thePath, theCallback) {
        
    };
	
	this.handlePluginClick = function(thePluginId) {
		invoke(mPlugins[thePluginId], 'clicked');
		
		var aPluginContent = invoke(mPlugins[thePluginId], 'content');
		CODEBOT.ui.showConfigDialog(true, aPluginContent);
	};
	
	this.addPlugin = function(theId, theObj) {
		console.log('CODEBOT [plugin added] ' + theId + ' - ' + theObj);
		
		mPlugins[theId] = theObj;
		
		CODEBOT.ui.addPlugin(theId, theObj);
		invoke(mPlugins[theId], 'added');
	};
	
	this.init = function(theIODriver) {
        console.log('CODEBOT [core] Initializing...');
		
        CODEBOT.io = theIODriver;
        console.log('CODEBOT [IO driver] ' + CODEBOT.io.driver);
        
        CODEBOT.io.init();
		CODEBOT.ui.init();
        
        console.log('CODEBOT [core] Done, ready to rock!');
	};
};