(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var header = document.querySelector('.header');
var hamburgerMenu = document.querySelector('.hamburger-menu');
window.addEventListener('scroll', function () {
  var windowPosition = window.scrollY > 0;
  header.classList.toggle('active', window.scrollY > 0);
});
hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9ob3RlbF9ib29raW5nX3dlYnNpdGUvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjtBQUNBLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QixDQUFwQjtBQUVBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFVO0FBQzNDLE1BQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLENBQXRDO0FBQ0EsRUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixRQUF4QixFQUFrQyxNQUFNLENBQUMsT0FBUCxHQUFpQixDQUFuRDtBQUNBLENBSEQ7QUFLQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBVztBQUNsRCxFQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFdBQXhCO0FBQ0EsQ0FGRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxubGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG5cdGxldCB3aW5kb3dQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZID4gMDtcclxuXHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgd2luZG93LnNjcm9sbFkgPiAwKVxyXG59KVxyXG5cclxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcclxufSlcclxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTlvYjNSbGJGOWliMjlyYVc1blgzZGxZbk5wZEdVdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzU1VGQlNTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVTBGQmRrSXNRMEZCWWp0QlFVTkJMRWxCUVVrc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMR2xDUVVGMlFpeERRVUZ3UWp0QlFVVkJMRTFCUVUwc1EwRkJReXhuUWtGQlVDeERRVUYzUWl4UlFVRjRRaXhGUVVGclF5eFpRVUZWTzBGQlF6TkRMRTFCUVVrc1kwRkJZeXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZRTEVkQlFXbENMRU5CUVhSRE8wRkJRMEVzUlVGQlFTeE5RVUZOTEVOQlFVTXNVMEZCVUN4RFFVRnBRaXhOUVVGcVFpeERRVUYzUWl4UlFVRjRRaXhGUVVGclF5eE5RVUZOTEVOQlFVTXNUMEZCVUN4SFFVRnBRaXhEUVVGdVJEdEJRVU5CTEVOQlNFUTdRVUZMUVN4aFFVRmhMRU5CUVVNc1owSkJRV1FzUTBGQkswSXNUMEZCTDBJc1JVRkJkME1zV1VGQlZ6dEJRVU5zUkN4RlFVRkJMRTFCUVUwc1EwRkJReXhUUVVGUUxFTkJRV2xDTEUxQlFXcENMRU5CUVhkQ0xGZEJRWGhDTzBGQlEwRXNRMEZHUkNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVLQ2w3Wm5WdVkzUnBiMjRnY2lobExHNHNkQ2w3Wm5WdVkzUnBiMjRnYnlocExHWXBlMmxtS0NGdVcybGRLWHRwWmlnaFpWdHBYU2w3ZG1GeUlHTTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaVHRwWmlnaFppWW1ZeWx5WlhSMWNtNGdZeWhwTENFd0tUdHBaaWgxS1hKbGRIVnliaUIxS0drc0lUQXBPM1poY2lCaFBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmFTdGNJaWRjSWlrN2RHaHliM2NnWVM1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdGOWRtRnlJSEE5Ymx0cFhUMTdaWGh3YjNKMGN6cDdmWDA3WlZ0cFhWc3dYUzVqWVd4c0tIQXVaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaHlLWHQyWVhJZ2JqMWxXMmxkV3pGZFczSmRPM0psZEhWeWJpQnZLRzU4ZkhJcGZTeHdMSEF1Wlhod2IzSjBjeXh5TEdVc2JpeDBLWDF5WlhSMWNtNGdibHRwWFM1bGVIQnZjblJ6ZldadmNpaDJZWElnZFQxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbExHazlNRHRwUEhRdWJHVnVaM1JvTzJrckt5bHZLSFJiYVYwcE8zSmxkSFZ5YmlCdmZYSmxkSFZ5YmlCeWZTa29LU0lzSW14bGRDQm9aV0ZrWlhJZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWFHVmhaR1Z5SnlrN1hISmNibXhsZENCb1lXMWlkWEpuWlhKTlpXNTFJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWhoYldKMWNtZGxjaTF0Wlc1MUp5azdYSEpjYmx4eVhHNTNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmMyTnliMnhzSnl3Z1puVnVZM1JwYjI0b0tYdGNjbHh1WEhSc1pYUWdkMmx1Wkc5M1VHOXphWFJwYjI0Z1BTQjNhVzVrYjNjdWMyTnliMnhzV1NBK0lEQTdYSEpjYmx4MGFHVmhaR1Z5TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJGamRHbDJaU2NzSUhkcGJtUnZkeTV6WTNKdmJHeFpJRDRnTUNsY2NseHVmU2xjY2x4dVhISmNibWhoYldKMWNtZGxjazFsYm5VdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncElIdGNjbHh1WEhSb1pXRmtaWEl1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYldWdWRTMXZjR1Z1SnlrN1hISmNibjBwWEhKY2JpSmRmUT09In0=