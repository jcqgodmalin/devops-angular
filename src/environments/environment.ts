// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_orders_url: 'http://localhost:9090/KopeeteariaAPI/api/orders',
  api_billing_url: 'http://localhost:9090/KopeeteariaAPI/api/billing',
  logo_image_url: '../../../../assets/images/header-img.png',
  menu_image_url: '../../../../../assets/images/menu.png'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
