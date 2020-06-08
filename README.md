<div align="center">
  <h1>express-cookie-cors-debug</h1>
  <strong>Reproduction setup to debug why cookies are not set in browser when doing CORS request</strong>
</div>

<hr>

# Solution

The problem was coming from the missing `credentials` property of `fetch`. I initially thought that `credentials` was only to tell the browser to send credentials with the request but it also dictates the browser behavior when receiving credentials from the server. I also needed to set `credentials` to `include` in my case.
