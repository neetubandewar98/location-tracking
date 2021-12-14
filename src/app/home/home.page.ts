import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@awesome-cordova-plugins/background-geolocation/ngx';
import { Geolocation,GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  config: BackgroundGeolocationConfig = {
    desiredAccuracy: 1,
    stationaryRadius: 20,
    distanceFilter: 10,
    debug: true, //  enable this hear sounds for background-geolocation life-cycle.
    stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    fastestInterval: 4000,
    interval: 10000
  };
  location: any=[];

  constructor(public geolocation:Geolocation,public backgroundGeolocation:BackgroundGeolocation,public http:HttpClient){
    
  }
  ionViewWillEnter(){
    this.backgroundtrack()
  }

  backgroundtrack(){
    // this.backgroundGeolocation.configure(this.config)
    // .then(() => {
    //   this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
    //     console.log(location);
    //     this.location = location;
        // alert(location)
      //   let formdata = new FormData();
      //   formdata.append("cpr_id",'781');
      //   formdata.append("user_id","516");
      //   formdata.append("driver_lat",JSON.parse(this.location).latitude);
      //   formdata.append("driver_long",JSON.parse(this.location).longitude);
      //   formdata.append("start_status",'1');
      //   this.http.post('https://swadeshisetu.in/truck-station/public/api/cprdriver-location',formdata).subscribe(data => {
      //       alert(data['message']);
      //       console.log("background",data)
      //     },err=>{
      //       if(err){
      //         alert(err.error.message)
      //       }
      //     })
          
  //     });
  
  //   });
  
  // // start recording location
  // this.backgroundGeolocation.start();
  
  //////////////
  this.geolocation.getCurrentPosition().then((resp:any) => {
    alert("position => " +resp + "lat => " + resp.coords.latitude + "long" + resp.coords.longitude)
    // let formdata = new FormData();
    // formdata.append("cpr_id",'781');
    // formdata.append("user_id","516");
    // formdata.append("driver_lat",resp.coords.latitude);
    // formdata.append("driver_long",resp.coords.longitude);
    // formdata.append("start_status",'0');
    // this.http.post('https://swadeshisetu.in/truck-station/public/api/cprdriver-location',formdata).subscribe(data => {
    //     alert(data['message'])
    //     console.log("geo",data)
    //   },err=>{
    //     if(err){
    //       alert(err.error.message)
    //     }
    //   })
    })

    var watchOptions = {distanceFilter:1,timeout:1000, enableHighAccuracy: false};
  let watch = this.geolocation.watchPosition(watchOptions);
  watch.subscribe((data:any) => {


    alert("watch_position => " +data + "lat => " + data.coords.latitude + "long" + data.coords.longitude)
    // let formdata = new FormData();
    // formdata.append("cpr_id",'781');
    // formdata.append("user_id","516");
    // formdata.append("driver_lat",data.coords.latitude);
    // formdata.append("driver_long",data.coords.longitude);
    // formdata.append("start_status",'0');
    // this.http.post('https://swadeshisetu.in/truck-station/public/api/cprdriver-location',formdata).subscribe(data => {
    //   alert(data['message'])
    //   console.log("watch",data)
    // },err=>{
    //   if(err){
    //     alert(err.error.message)
    //   }
    // })
  });
  }
  
  
  
  
}
