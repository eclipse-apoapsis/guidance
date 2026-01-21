---
sidebar_position: 1
title: A2 Development Monitoring
---

<!-- 
SPDX-FileCopyrightText: Copyright (C) 2024 Contributors to the Eclipse Foundation

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

# A2 Development Monitoring

The development monitoring serves to prepare the [Distribution Check](../A6_distribution_check_and_quality_gate/a6_distribution_check_and_quality_gate.md).

A continuous development monitoring is recommended.

A special variant would be a release-based one-time OSM Review for the [Distribution Check](../A6_distribution_check_and_quality_gate/a6_distribution_check_and_quality_gate.md).

## Documentation of the Software Product and the Contained Deliverables

In order to monitor the software product, it is necessary to know the product in detail.

Software products may be very different ranging from embedded uController Software to complete AIoT-Systems consisting of Backends, Frontends and Edge applications.

In order to have a generic view on the managed products and their deliverables, each product and deliverable needs to be described with the standard parameters of the [SPDX Operations Profile](https://github.com/spdx/spdx-3-model/tree/profile-operations/model/Operations) (work in progress).

Each product consists of 1 to n deliverables.

The development team has to ensure that the documentation is archived for later reference according to the archiving requirements of the developed software product.

## Goal: Always Be Potentially Shippable

It is recommended to start the OSM Review as early as possible in the development and to install a continuous integration system that continuously triggers the reviews on the deltas added in each increment.

The smaller the increment, the faster the review is done. Using such an approach may enable teams to always be potentially shippable.

## Split Between (Proprietary) Own Code and Third-Party Dependencies

It is recommended that the development teams enable an easy split between (proprietary) own code and third-party dependencies, e.g. by using dependency managers or by using a defined folder structure in the repository.

By default, the use of code snippets from Open Source Components is not allowed. Exceptions are handled according to the Open Source Policy.

## OSM Review Steps

The [Open Chain Reference Tooling Group](https://groups.io/g/oss-based-compliance-tooling) has defined the steps necessary to be performed by a toolchain in an OSM review. These are the following (with reference to the implementation by the [OSS Review Toolkit](https://github.com/oss-review-toolkit/ort)):

- [Analyzer](https://oss-review-toolkit.org/ort/docs/tools/analyzer) - determines the dependencies of projects and their metadata, abstracting which package managers or build systems are actually being used.
- [Downloader](https://oss-review-toolkit.org/ort/docs/tools/downloader) - fetches all source code of the projects and their dependencies, abstracting which Version Control System (VCS) or other means are used to retrieve the source code.
- [Scanner](https://oss-review-toolkit.org/ort/docs/tools/scanner) - uses configured source code scanners to detect license / copyright findings, abstracting the type of scanner.
- [Advisor](https://oss-review-toolkit.org/ort/docs/tools/advisor) - retrieves security advisories for used dependencies from configured vulnerability data services.
- [Evaluator](https://oss-review-toolkit.org/ort/docs/tools/evaluator) - evaluates license / copyright findings against customizable policy rules and license classifications.
- [Reporter](https://oss-review-toolkit.org/ort/docs/tools/reporter) - presents results in various formats such as visual reports, Open Source notices or Software Bills of Material (SBOMs) to easily identify dependencies, licenses, copyrights, and violations of policy rules.

The concrete implementation may differ depending on the Software Development Domain.

## OSM Review Steps Embedded in the Software Component Lifecycle

| Step | Requirement | Rationale | Tool/Metod* | Configuration** | Verification Material*** |
|------|-------------|-----------|------------|---------------|-----------------------|
| ARCHITECTURE | The software product and the contained deliverables need to be documented according to the above mentioned requirements. | In case of incidents or Open Source inquiries it is necessary to quickly identify what parts of the software and what distribution channels are concerned. | | |
| INTEGRATION | see [A1 Integration Check](../A1_integration_check/a1_integration_check.md) | | | |
| CODING | - The used dependencies and their scope need to be documented. <br/> - The own (proprietary) code shall be split from the third party dependencies. | - The documentation of the dependencies and their scope eases the following OSM dependency review. <br/> - The split between own proprietary code and third party dependencies is necessary as the own (proprietary) code is processed in the OSM project review whereas the third party dependencies are processed in the OSM dependency review. | | |
| | ANALYZER Input: <br/> - It has to be documented what contents are required as input for the ANALYZER step <br/> | | | |
| ANALYZER |  - Metadata curations of used components need to be documented for later reference. <br/> - The method how the components were curated needs to be documented for reproducibility. <br/> - The SBOM is created as base for the OSM Review. | It is necessary to track where and when the metadata was acquired if it did not come directly with the component itself. | | |
| DOWNLOADER | The complete corresponding source code of all used components needs to be available. | The source code is the primary "source of truth", the base for the scans. In specific license constellations, there is the need to distribute the source code with the product. | | |
| SCANNER | - The scanner options (local and global) need to be documented for reproducibility. <br/> - The scanner configurations (local and global) need to be documented for reproducibility. | - The scanner options may influence the scope and depth of the scan. <br/> - The scanner configuration may waive detected findings e.g. in case of false positives or irrelevant findings. | | |
| ADVISOR | The configuration of the used databases needs to be documented for reproducibility. | In case of inquiries, the traceability of what data source were used as input for decisions needs to be ensured. | | |
| EVALUATOR | - The configured rules and policies need to be documented and stored for later reference. <br/> - The configured rules and policies need to be approved by the Open Source Office. <br/> - The licence classifications have to be documented and stored for later reference. <br/> - The license classifications need to be approved by the Open Source Office. <br/> - It has to be ensured that the used licenses with their obligations are compatible with each other and with the business context. | - The rules and policies need to be in line with < organization >'s Open Source Policy and the customer policies. <br/> - The license classifications need to be in line with those used by < organization > and by the customer (e.g. deny-lists, allow-lists,...). <br/> - The used licenses need to be in line with the business context. The licenses have to be compatible. | | |
| REPORTER | - The sources of the license texts need to be documented for later reference. <br/> - The output documents need to be customized according to < organization >'s corporate identity. <br/> - The output needs to be reusable for maintenance monitoring independent of the development environment. <br/> - The scan reports need to be provided as documentation. | - In case of inquiries, there needs to be traceability regarding what sources of data were used as input for generating the report. <br/> - As the compliance documents need to be shipped with the product, the documents need to adhere to < organization >'s product design requirements. <br/> - Maintenance monitoring may be performed in different systems (e.g. vulnerability monitoring) and thus needs an adequate input (e.g. SPDX, CycloneDX, ...). <br/> - The scan reports need to be documented for the audit trail. | | |
| | REPORTER Output: It has to be documented what output artifacts are provided in the REPORTER step. | | | |
| TRANSITION | See A5 OSS Compliance Bundle (page not available yet). |  | | |
| MAINTENANCE | See [A7 Maintenance Monitoring](../A7_maintenance_monitoring/a7_maintenance_monitoring.md). | | | |
---

\* For each step the specific tool or method has to be listed.

\** In case a specific configuration of the tool or method is necessary, the configuration needs to be documented for each step.

\*** In case there are specific artifacts to verify and/or to reproduce the step, those artifacts have to be listed. 

## Reproducibility of the Results

To ensure the reproducibility: 
- bi-directional traceability needs to be established:
    - **Software Product to Component**: In case there is an external open source inquiry for a specific Software Product, it needs to be tracked which Open Source Components it used.
    - **Component to Software Product**: In case there is an external open source inquiry for a specific Open Source Component, it needs to be tracked in which Software Products the Open Source Component was used.
- The results of the performed OSM reviews need to be available.
- The infrastructure, including tools and methods used for the OSM review, need to be documented.
- The configuration of the infrastructure needs to be documented.

It is recommended to use Configuration-as-Code where feasible or store configuration exports to leverage modern version control systems in order to reproduce the configuration used at a specific point in time.
