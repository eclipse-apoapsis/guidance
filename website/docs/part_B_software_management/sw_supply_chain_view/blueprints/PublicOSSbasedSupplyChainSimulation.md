---
title: Public available supply chain simulation based on Open Source
---

<!--
SPDX-FileCopyrightText: Copyright (C) 2025 Contributors to the Eclipse Foundation

These materials are made available under the
terms of the Creative Commons Attribution 4.0 International Public License which is available at
https://creativecommons.org/licenses/by/4.0/legalcode .

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.

SPDX-License-Identifier: CC-BY-4.0
-->

# Basic Simulation Showcase Setup

The basic simulated supply chain is meant to be as simple as possible and consists of three parts:

1. Part that simulates a original Software vendor (e.g. an upstream Open Source Project) with a code repository.
2. Part that simulates a Software integrator (e.g. a Software supplier that re-uses Open Source components in a derivative work) that ships a combined work and provides an SBOM
3. Part that simulates a manufacturer that gets several SBOMs from various suppliers and needs to manage them


# Part 1 - Software vendor
- A) The simulation uses the [Dummy Repositories from the OpenChain Tooling group]( https://github.com/Open-Source-Compliance/Sharing-creates-value/tree/master/Tooling-Landscape/Dummy_Repositories)
- B) The dependency-tree can be shown in the [Github Dependency graph](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)</br>
*for simplicity Github with its onboard equipment was used instead of insisting on complete open source setup - so it is publicly available but not Open Source => Improvement potential* </br>
*Hint: You can use a local [ORT-installation](https://oss-review-toolkit.org/ort/docs/getting-started/installation) as alternative.*

Concrete example used for:
- A) https://github.com/Open-Source-Compliance/JAVA_Maven-Dummy
- B) https://github.com/Open-Source-Compliance/JAVA_Maven-Dummy/network/dependencies

*Hint: You can vary the simulation by using a different [available dummy-repository](https://github.com/Open-Source-Compliance/Sharing-creates-value/tree/master/Tooling-Landscape/Dummy_Repositories#overview-of-existing-and-planned-dummy-repositories).*

# Part 2 - Software integrator
- A) The simulation uses a "demo" branch in the Dummy Repository to [simulate a modification](https://github.com/Open-Source-Compliance/JAVA_Maven-Dummy/blob/doc/java_maven-dummy-manipulation.md)
- B) The simulation uses an instance of the [ORT-Server](https://eclipse-apoapsis.github.io/ort-server/) as [ORT](https://github.com/oss-review-toolkit/ort)-based SCA tooling to analyze the repository and generate the SBOM from the Dummy Repository  
*Hint: You can use a local [ORT-installation](https://oss-review-toolkit.org/ort/docs/getting-started/installation) as alternative.*
- C) The [ORT-report](https://oss-review-toolkit.org/ort/docs/getting-started/tutorial#7-generate-a-report) provides already transparency about all dependencies and findings
- D) The [ORT-reporter](https://oss-review-toolkit.org/ort/docs/tools/reporter) generates the SBOM in CycloneDX and SPDX for further processing

Concrete example used for: 
- A) https://github.com/Open-Source-Compliance/JAVA_Maven-Dummy/tree/demo/case_001_vulnerability => adds a vulnerable dependency
- B) WIP => will use a Sandbox Org in the public [OCTETT](occtet.eu) Test-Server
- C) WIP => the report will be publicly available in the public [OCTETT](occtet.eu) Test-Server

# Part 3 - Manufacturer
- A) the simulation uses the SBOM provided in 2 D) as input to simulate a delivery from a supplier <br>
*Hint: The delivery of Software/Binaries is actively ignored for simplification.*
- B) the simulation uses a local [OWASP DependencyTrack](https://dependencytrack.org/#download)-installation as Vulnerability Monitoring Dashboard for incoming supplier SBOMs. A project is created and the CycloneDX SBOM is uploaded. The analysis provides transparency about all dependencies and findings.
- C) Potential extensions:
    - the simulation uses an instance of [Eclipse sw360](https://eclipse.dev/sw360/docs/deployment/) for tracking all Software Components
    - the simulation uses an instance of [Eclipse disuko](https://projects.eclipse.org/projects/technology.disuko) as SBOM portal 

Concrete example used for: 
- A) see 2 D)
- B) WIP => the SBOMs will be publicly available in a public sw360 test-server
