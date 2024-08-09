ymaps.ready(function () {
  const map = new ymaps.Map("map", {
    center: [59.938699, 30.319347],
    zoom: 17,
    controls: [],
  });
  
  map.behaviors.disable("scrollZoom");

  map.controls.add("zoomControl", {
    position: { top: 10, left: 10 },
  });

  var windowWidth = parseInt(window.innerWidth);
  if(windowWidth < 1440) {
    map.setCenter([59.938631, 30.323037]);
  } else {
    map.setCenter([59.938699, 30.319347]);
  };

  map.events.add('sizechange', function () {
    var windowWidth = parseInt(window.innerWidth);
    if(windowWidth < 1440) {
      map.setCenter([59.938631, 30.323037]);
    } else {
      map.setCenter([59.938699, 30.319347]);
  };
});

  const myPlacemark = new ymaps.Placemark(
    [59.938631, 30.323037],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/map-pin.png",
      iconImageSize: [105, 90],
      iconImageOffset: [-49, -78],
    }
  );

  map.geoObjects.add(myPlacemark);
});
