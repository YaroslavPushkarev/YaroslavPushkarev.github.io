(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// class Circle {
// 	constructor(a) {
// 		this.raduius = a;
// 	}
// 	showAlert(){
// 		raduius = prompt('sdfsf');
// 	}
//   }
//   let object = new Circle();
//   console.log(object);
//   object.showAlert();s
function maps(x) {
  var a = [x];
  var assertDeepEqualy = a.map(function (num) {
    return num * 2;
  });
  console.log(a);
}

;
maps();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yOF9qcy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUEsU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFnQjtBQUNaLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBRCxDQUFSO0FBQ0EsTUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRixDQUFNLFVBQVMsR0FBVCxFQUFhO0FBQ3BDLFdBQU8sR0FBRyxHQUFHLENBQWI7QUFDSCxHQUZvQixDQUF2QjtBQUdFLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0w7O0FBQUE7QUFDRCxJQUFJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBjbGFzcyBDaXJjbGUge1xyXG4vLyBcdGNvbnN0cnVjdG9yKGEpIHtcclxuLy8gXHRcdHRoaXMucmFkdWl1cyA9IGE7XHJcbi8vIFx0fVxyXG4vLyBcdHNob3dBbGVydCgpe1xyXG4vLyBcdFx0cmFkdWl1cyA9IHByb21wdCgnc2Rmc2YnKTtcclxuLy8gXHR9XHJcblx0XHJcbi8vICAgfVxyXG5cclxuLy8gICBsZXQgb2JqZWN0ID0gbmV3IENpcmNsZSgpO1xyXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdCk7XHJcbi8vICAgb2JqZWN0LnNob3dBbGVydCgpO3NcclxuXHJcblxyXG4gXHJcbmZ1bmN0aW9uIG1hcHMoeCl7XHJcbiAgICBsZXQgYSA9IFt4XTtcclxuICAgIGxldCBhc3NlcnREZWVwRXF1YWx5ID0gYS5tYXAoZnVuY3Rpb24obnVtKXtcclxuICAgICAgICAgIHJldHVybiBudW0gKiAyO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coYSk7XHJcbn07XHJcbm1hcHMoKTtcclxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTh5T0Y5cWN5OXpjbU12YW5NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCU1VFc1UwRkJVeXhKUVVGVUxFTkJRV01zUTBGQlpDeEZRVUZuUWp0QlFVTmFMRTFCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlJDeERRVUZTTzBGQlEwRXNUVUZCU1N4blFrRkJaMElzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUml4RFFVRk5MRlZCUVZNc1IwRkJWQ3hGUVVGaE8wRkJRM0JETEZkQlFVOHNSMEZCUnl4SFFVRkhMRU5CUVdJN1FVRkRTQ3hIUVVadlFpeERRVUYyUWp0QlFVZEZMRVZCUVVFc1QwRkJUeXhEUVVGRExFZEJRVklzUTBGQldTeERRVUZhTzBGQlEwdzdPMEZCUVVFN1FVRkRSQ3hKUVVGSklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRvS1h0bWRXNWpkR2x2YmlCeUtHVXNiaXgwS1h0bWRXNWpkR2x2YmlCdktHa3NaaWw3YVdZb0lXNWJhVjBwZTJsbUtDRmxXMmxkS1h0MllYSWdZejFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTzJsbUtDRm1KaVpqS1hKbGRIVnliaUJqS0drc0lUQXBPMmxtS0hVcGNtVjBkWEp1SUhVb2FTd2hNQ2s3ZG1GeUlHRTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHBLMXdpSjF3aUtUdDBhSEp2ZHlCaExtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1lYMTJZWElnY0QxdVcybGRQWHRsZUhCdmNuUnpPbnQ5ZlR0bFcybGRXekJkTG1OaGJHd29jQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLSElwZTNaaGNpQnVQV1ZiYVYxYk1WMWJjbDA3Y21WMGRYSnVJRzhvYm54OGNpbDlMSEFzY0M1bGVIQnZjblJ6TEhJc1pTeHVMSFFwZlhKbGRIVnliaUJ1VzJsZExtVjRjRzl5ZEhOOVptOXlLSFpoY2lCMVBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVXNhVDB3TzJrOGRDNXNaVzVuZEdnN2FTc3JLVzhvZEZ0cFhTazdjbVYwZFhKdUlHOTljbVYwZFhKdUlISjlLU2dwSWl3aUx5OGdZMnhoYzNNZ1EybHlZMnhsSUh0Y2NseHVMeThnWEhSamIyNXpkSEoxWTNSdmNpaGhLU0I3WEhKY2JpOHZJRngwWEhSMGFHbHpMbkpoWkhWcGRYTWdQU0JoTzF4eVhHNHZMeUJjZEgxY2NseHVMeThnWEhSemFHOTNRV3hsY25Rb0tYdGNjbHh1THk4Z1hIUmNkSEpoWkhWcGRYTWdQU0J3Y205dGNIUW9KM05rWm5ObUp5azdYSEpjYmk4dklGeDBmVnh5WEc1Y2RGeHlYRzR2THlBZ0lIMWNjbHh1WEhKY2JpOHZJQ0FnYkdWMElHOWlhbVZqZENBOUlHNWxkeUJEYVhKamJHVW9LVHRjY2x4dUx5OGdJQ0JqYjI1emIyeGxMbXh2WnlodlltcGxZM1FwTzF4eVhHNHZMeUFnSUc5aWFtVmpkQzV6YUc5M1FXeGxjblFvS1R0elhISmNibHh5WEc1Y2NseHVJRnh5WEc1bWRXNWpkR2x2YmlCdFlYQnpLSGdwZTF4eVhHNGdJQ0FnYkdWMElHRWdQU0JiZUYwN1hISmNiaUFnSUNCc1pYUWdZWE56WlhKMFJHVmxjRVZ4ZFdGc2VTQTlJR0V1YldGd0tHWjFibU4wYVc5dUtHNTFiU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnRJQ29nTWp0Y2NseHVJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJR052Ym5OdmJHVXViRzluS0dFcE8xeHlYRzU5TzF4eVhHNXRZWEJ6S0NrN1hISmNiaUpkZlE9PSJ9
