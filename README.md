karmaSonar
==========

Make sure you have `sonar-runner` and `lcov` binaries in your path.

See:
- [http://docs.codehaus.org/display/SONAR/Installing+and+Configuring+SonarQube+Runner](http://docs.codehaus.org/display/SONAR/Installing+and+Configuring+SonarQube+Runner)
- lcov is available in any linux distro (i.e. `apt-get install lcov` or similar)

Then you can run `make qa` to run karma and then the sonar analysis (you nedd to have a sonar server running on localhost:9000)
