const mapCustomStyle = [
   {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
         {
            visibility: 'on',
         },
         {
            hue: '#ff0000',
         },
      ],
   },
   {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [
         {
            visibility: 'on',
         },
         {
            color: '#fffdfd',
         },
         {
            saturation: '100',
         },
         {
            lightness: '100',
         },
         {
            weight: '2.25',
         },
      ],
   },
   {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
         {
            saturation: '100',
         },
         {
            lightness: '-100',
         },
         {
            color: '#000000',
         },
         {
            visibility: 'on',
         },
         {
            gamma: '0.00',
         },
         {
            weight: '10.00',
         },
      ],
   },
   {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
         {
            visibility: 'on',
         },
         {
            color: '#ffffff',
         },
      ],
   },
   {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
         {
            visibility: 'on',
         },
      ],
   },
   {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
         {
            color: '#444444',
         },
      ],
   },
   {
      featureType: 'administrative.locality',
      elementType: 'geometry.fill',
      stylers: [
         {
            color: '#ff0000',
         },
      ],
   },
   {
      featureType: 'administrative.locality',
      elementType: 'labels.text',
      stylers: [
         {
            visibility: 'on',
         },
         {
            saturation: '-100',
         },
         {
            lightness: '97',
         },
         {
            color: '#000000',
         },
         {
            weight: '3.96',
         },
         {
            gamma: '10.00',
         },
      ],
   },
   {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
         {
            color: '#ffffff',
         },
         {
            lightness: '100',
         },
         {
            gamma: '10.00',
         },
         {
            saturation: '100',
         },
         {
            weight: '10.00',
         },
      ],
   },
   {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
         {
            color: '#f2f2f2',
         },
      ],
   },
   {
      featureType: 'landscape.natural.landcover',
      elementType: 'geometry.fill',
      stylers: [
         {
            visibility: 'on',
         },
      ],
   },
   {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry',
      stylers: [
         {
            visibility: 'on',
         },
      ],
   },
   {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry.fill',
      stylers: [
         {
            visibility: 'on',
         },
      ],
   },
   {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
         {
            visibility: 'off',
         },
      ],
   },
   {
      featureType: 'road',
      elementType: 'all',
      stylers: [
         {
            saturation: -100,
         },
         {
            lightness: 45,
         },
      ],
   },
   {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
         {
            visibility: 'simplified',
         },
      ],
   },
   {
      featureType: 'road.highway',
      elementType: 'labels.icon',
      stylers: [
         {
            visibility: 'off',
         },
      ],
   },
   {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
         {
            visibility: 'off',
         },
      ],
   },
   {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
         {
            visibility: 'off',
         },
      ],
   },
   {
      featureType: 'water',
      elementType: 'all',
      stylers: [
         {
            color: '#1d268d',
         },
         {
            visibility: 'on',
         },
      ],
   },
   {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
         {
            visibility: 'on',
         },
         {
            color: '#0f3a70',
         },
         {
            saturation: '14',
         },
      ],
   },
   {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
         {
            color: '#ff00bf',
         },
         {
            visibility: 'off',
         },
      ],
   },
];

export default mapCustomStyle;
