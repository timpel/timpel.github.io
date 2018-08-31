---
title: "WeatherOrNot Alarm Clock"
excerpt: "Android alarm clock, customizeable based on weather conditions."
author_profile: true
classes: wide
---

An Android Alarm Clock that checks your local weather before it decides to wake you up (or not). Explore the source code on [Github](https://github.com/timpel/WeatherOrNot-Alarm-Clock).

Need an extra 20 minutes to catch the bus if it's raining tomorrow? Maybe if the wind is just right it's worth getting up at dawn to catch the waves? Or if it's snowing, maybe there's just no point in getting up at all today... WeatherOrNot lets you set an unlimited number of weather-dependent alarms that will ring if and only if the weather criteria you choose are met at the alarm time.

# How it Works 

Every WeatherOrNotAlarm can have a Default Alarm (which will always ring at the set time) and/or a WeatherAlarm with a selected weather criteria. The ringtone and repeat days of a Default/WeatherAlarm pair can be customized just like a standard Android alarm:
<div style="display:inline-block;vertical-align:top;">
<img src="/assets/images/won_screens/Screenshot_20180520-234613.png" width="30%" />
<img src="/assets/images/won_screens/Screenshot_20180520-234724.png" width="30%" />
<img src="/assets/images/won_screens/Screenshot_20180520-234813.png" width="30%" />
</div>
<br/>
WeatherAlarms can be set to ring based on any of the following criteria:

* Clear Skies
* Cloudy
* Rain
* Snow
* Temperature - Above a given threshold (in Fahrenheit or Celsius)
* Temperature - Below a given threshold (in Fahrenheit or Celsius)
* Wind - Above a given threshold (in mph or km/h) in a given direction (optional)
* Wind - Below a given threshold (in mph or km/h) in a given direction (optional)

And you can set, edit, and activiate/deactivate an unlimited number of WeatherOrNot alarms:

<div style="display:inline-block;vertical-align:top;">
<img src="/assets/images/won_screens/Screenshot_20180520-234335.png" width="30%" />
<img src="/assets/images/won_screens/Screenshot_20180520-235300.png" width="30%" />
<img src="/assets/images/won_screens/Screenshot_20180520-235007.png" width="30%" />
</div>
<br/>

# Credits

The app gets weather data by connecting to a cloud-hosted server, which in turn makes calls to the wonderful [Dark Sky API](https://darksky.net).
Cute icons were designed by [DinosoftLabs](https://www.flaticon.com/authors/dinosoftlabs) and [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) at www.flaticon.com, and used in accordance with flaticon.com license conditions.

<p style="text-align: center;">
  <img src="/assets/images/won_screens/ic_launcher.png" />
</p>