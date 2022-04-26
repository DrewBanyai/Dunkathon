/*
    Copyright 2022 Drew Banyai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


/*
  Dunk-a-thon Controller

  This sketch determines the IP of the Arduino, then loads a 
  simple web server which can be accessed from the local network
  and used to fire off a motor controller for the dunk tank.

  Circuit:
    - Arduino Mega2560
    - Ethernet shield attached
    - Motor attached to pins X, Y, Z

  created March 7th 2022
  by Drew Banyai
*/

#include <SPI.h>
#include <Ethernet.h>
#include <Servo.h>

//  Motor Data
int turnSpeed = 4;
int moveDelay = 4;
int movePoint1 = 10;
int movePoint2 = 120;
int topPointDelay = 800;
int pos = 0;    // variable to store the servo position

Servo myservo;  // create servo object to control a servo

// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = { 0x2C, 0xF7, 0xF1, 0x08, 0x38, 0x19 };
bool Connected = false;
IPAddress LocalIP = IPAddress(0, 0, 0, 0);
String RequestRoute = "";

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

void StartSerial() {
  // Open serial communications and wait for port to open
  Serial.begin(9600);
  
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
}

unsigned long GetNextDunkTime() {
  return millis() + (random(5, 40) * 1000);
}

void Dunk() {
  for (pos = movePoint1; pos < movePoint2; pos += turnSpeed) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(min(pos, 180));              // tell servo to go to position in variable 'pos'
    delay(moveDelay);                       // waits 15 ms for the servo to reach the position
  }
  delay(topPointDelay);
  
  for (pos = movePoint2; pos >= movePoint1; pos -= turnSpeed) { // goes from 180 degrees to 0 degrees
    myservo.write(max(pos, 0));              // tell servo to go to position in variable 'pos'
    delay(moveDelay);                       // waits 15 ms for the servo to reach the position
  }
  delay(1000);
}

void PrintSpacer() {
  Serial.print("\n\n\n");
}

bool ConnectToEthernet() {
  Serial.println("Initializing Ethernet with DHCP...");
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
    } else if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernet cable is not connected.");
    }
    
    // Return a failure
    Connected = false;
  }
  else { Connected = true; }

  //  Return whether we were successful
  return Connected;
}

void StoreLocalIP() {
  //  Print out the local IP address
  LocalIP = Ethernet.localIP();
  Serial.print("My IP address: ");
  Serial.println(LocalIP);
  PrintSpacer();
}

void setup() {
  StartSerial();
  
  myservo.attach(3);  // attaches the servo on pin 9 to the servo object
  myservo.write(0);
  
  randomSeed(analogRead(0));

  if (ConnectToEthernet()) { StoreLocalIP(); }
}

void MaintainConnection() {
  switch (Ethernet.maintain()) {
    case 1:
      //  Renewed fail
      Serial.println("Error: Renewed fail");
      break;

    case 2:
      //  Renewed success
      Serial.println("Renewed success");
      StoreLocalIP();
      break;

    case 3:
      //  Rebind failure
      Serial.println("Error: Rebind failure");
      break;

    case 4:
      //  Rebind success
      Serial.println("Rebind success");
      StoreLocalIP();
      break;

    default:
      //nothing happened
      break;
  }
}

void CreateServiceResponse(EthernetClient client, String requestRoute) {
  client.println("Status: 200");
  client.println("Access-Control-Allow-Origin: *"); 
  client.println("Access-Control-Allow-Methods: GET");
  client.println("Content-Type: text/html");
  client.println("Connection: close");
  client.println();

  Serial.println("REQUEST ROUTE: " + requestRoute);
  if (requestRoute.equals("OPTIONS /Dunk")) { Dunk(); }
}

bool ListenForClients() {
  // listen for incoming clients
  EthernetClient client = server.available();
  if (!client) { return false; }

  Serial.println("[START CLIENT CONNECTION]");
  
  //  An http request ends with a blank line, so read until we find one
  String requestLine = "";
  while (client.connected()) {
    if (!client.available()) { break; }
      
    char c = client.read();
    if (c != '\r') {
      requestLine += c;
      
      if (requestLine.compareTo("\n") == 0) {
        CreateServiceResponse(client, RequestRoute);
        Serial.println("[END CLIENT CONNECTION]");
        PrintSpacer();
        RequestRoute = "";
        break;
      }
      
      if (c == '\n') {
        int GetLineEnd = requestLine.indexOf(" HTTP/1.1");
        if (GetLineEnd != -1) RequestRoute = requestLine.substring(0, GetLineEnd);
        
        Serial.print(requestLine);
        requestLine = "";
      }
    }
  }
  
  //  Give the web browser time to receive the data, then close the connection
  delay(1);
  client.stop();
}

void loop() {
  if (!Connected) { delay(1); return; }
  
  MaintainConnection();
  ListenForClients();
}
