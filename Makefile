mergeLcov:
	./tools/merge_lcov coverage

sonar-runner:
	sonar-runner

sonar: mergeLcov sonar-runner

karma:
	karma start karma.conf.js

qa: karma sonar