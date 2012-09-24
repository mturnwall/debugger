Debugger
========

A simple debugger for web sites using the browser's console. Based on the console wrapper from Paul Irish.

**Author:** Michael Turnwall

**Copyright (c) 2012 Michael Turnwall**

[**Released under a GPLv3 license.**](http://www.gnu.org/licenses/gpl-3.0.html)

LICENSE
-------

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

This is model for ajax requests. It reduces the need to always write custom ajax handlers and custom callbacks since the json is always structured the
same way. The ajax class contains the built in functionality to update and replace content and code on the page. The selectors for the areas being
update by the ajax call are included in the ajax json as a hash table along with the new content.

Usage
-----
**Basic**

`debug.log('This is a log message');`

**String Substituion**

`debug.log("The %s jumped over %d tall buildings", animal, count);`

**Debug History**

All calls to the debug object will be saved in debug.history.

**Supported Console Types**

Here is a list of the current supported console message types:
'log','info','warn','error', 'debug', 'dir', 'group', 'groupEnd'
