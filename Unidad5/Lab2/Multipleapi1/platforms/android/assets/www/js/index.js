/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.addEventListener("backbutton", backButtonPress, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    //backbutton
function backButtonPress(){
        myDevice = document.getElementById('info');

        myDevice.innerHTML = 'Cargando información del Dispositivo:' + '<br />' +
        'Nombre del Dispositivo: ' + device.name + '<br />' +
        'Dispositivo PhoneGap: ' + device.cordova + '<br />' +
        'Plataforma: ' + device.uuid + '<br />' +
        'Versión:' device.version;
    }
};


// check connection
function checkConnection(){
    var network = navigator.network.connection.type;

    var statesConnection = {};

    statesConnection[Connection.UNKNOW] = 'Conexión desconocida';
    statesConnection[Connection.ETHERNET] = 'Conexión por ETHERNET';
    statesConnection[Connection.WIFI] = 'Conexión por Wi-fi';
    statesConnection[Connection.CELL_2G] = 'Conexión por 2G';
    statesConnection[Connection.CELL_3G] = 'Conexión por 3G';
    statesConnection[Connection.CELL_4G] = 'Conexión por 4G';
    statesConnection[Connection.NONE] = 'No hay Coneción a red';

    alert('Conexión que esta usando es: ' + statesConnection[network]);
}

function alertCallback(button){
    myDevice = document.getElementById('info');
    myDevice.innerHTML = '<h1>API Alert</h1>'
}

function confirmCallback(button){
    alert('el boton presionado es: ' + button);
}

//use the API of PhoneGap Alert
function showAlert(){
    navigator.notification.alert(
        'MultipleAPI',
        alertCallback,
        'Hola MultipleAPI',
        'Aceptar'
        );
}

//Use the API of PhoneGap notification
function onConfirm(){
    navigator.notification.confirm(
    'MultipleAPI',
    confirmCallback,
    'Hola MultipleAPI',
    ['Aceptar', 'Salir']
    );
}

function onBeep(){
    navigator.notification.beep(6);
}

function onVibrate(){
    navigator.notification.vibrate(4000);
}