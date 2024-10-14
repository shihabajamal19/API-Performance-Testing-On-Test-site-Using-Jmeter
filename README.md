# API-Performance-Testing-On-Test-site-Using-Jmeter

## Introduction:
This repository contains a report detailing the performance testing conducted on the specified test site reqres.in using Apache JMeter. The aim of the testing was to evaluate the site’s performance under various load conditions and to identify any potential bottlenecks. The testing results were captured using JMeter's command-line mode and presented through detailed HTML reports.

## Tools Used:
1. Apache JMeter: Utilized for performance and load testing.

## Test Strategy:
The testing strategy involved simulating concurrent user traffic to the API, which included:

1. GET Requests: To retrieve user details from the API.
The tests were executed with different user threads to evaluate the API's behavior under various stress levels. Key performance metrics, such as latency, response time, throughput, and error rates, were monitored throughout the testing process.

## Running the Tests:
To replicate the performance tests on your local setup, follow these steps:

1. Clone the Repository using:
bash
git clone https://github.com/shihabajamal19/API-Performance-Testing-On-Test-site-Using-Jmeter.git
2. Navigate to the Directory:
bash
cd repository-name
3. Open JMeter: Launch JMeter on your machine.

4. Load the Test Plan: Import the test plan file located in the repository.

5. Configure Test Parameters: Adjust any parameters based on your testing requirements.

6. Run the Tests: Start the test execution and monitor the results.

## Results
The results of the performance tests can be found in the report directory of this repository. The HTML report provides insights into:

1. Average response times
2. Throughput metrics
3. Error rates

## Conclusion:
The testing scenarios involved varying the number of user threads to evaluate how the API performs under different stress levels. Key performance indicators, such as latency, response times, throughput, and error rates, were meticulously monitored to gain insights into the API’s responsiveness and stability.

These findings are instrumental in understanding the API's capability to handle real-world usage scenarios effectively, ensuring it aligns with expected performance benchmarks.

