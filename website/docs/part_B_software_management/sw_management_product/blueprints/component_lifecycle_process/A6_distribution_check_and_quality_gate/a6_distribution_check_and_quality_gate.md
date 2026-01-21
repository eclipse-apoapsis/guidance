---
sidebar_position: 1
title: A6 Distribution Check and Quality Gate
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

# A6 Distribution Check and Quality Gate

The Distribution Approval documents the OSM-specific points which need to be cheked as part of a Quality Gate[^1].

## Distribution Approval Independent from a Quality Gate

In the course of the development, there might exist situations where the Software Product is made available independent of a Quality Gate (QG). Even in those situations, the A3 OSM Dependency Review and A4 OSM Project Review have to be performed, and the A5 OSS Compliance Bundle has to be created and distributed with the Software Product. The OSM Bi-directional traceability also has to be ensured by adequate documentation of the distribution. This also applies in case a Software Product is made available in a different business context after the development was terminated.


## Distribution Approval in a Quality Gate

The following entries shall be added in the QG checklists for the respective QGs. They need to be checked in the QG to document that all relevant tasks for the Open Source Distribution Approval are processed prior to making the Software Product available.

| Input Category | ID* | Requirement / Measurement criterion | Status requirement / Supplement / Comments | Mandatory documents | QG** |
|----------------|-----|-------------------------------------|---------------------------------------|--------|-----|
| OSM | | The sales representative ensures that the customer receives the OSS Disclosure Document of the product version together with their contract. | | Confirmation of sales represenatative | |
| OSM | | The sales representative ensures that the customer is informed about the following: <br/> - The underlying standard products of < organization > contain open source components. <br/> - Additional open source components may be used for the implementation of the corresponding professional service project. It must be clarified during contract negotiations under which conditions additional open source components are allowed to be intregrated. <br/> <br/> The sales representative further ensures that: <br/> - The customer requirements concerning accompanying Open Source documentation are covered by the < organization > standard and, if not, that additional efforts for non-standards are considered in the costs. <br/> - The handling of potential customer provisions is defined in the contract. | | Confirmation of sales represenatative | |
| OSM | | In case < organization >'s standard terms and coditions are not used, the sales representative ensures: that the responsibilies concerning OSM of < organization > and the customer are clearly defined and documented in the contract. | | Confirmation of sales represenatative | |
| OSM | | Nominate or identify a person tasked with OSM for the project. | | Nominated/Identified person | |
| OSM | | Project to follow the Standard OSM concept. | | Approval of Non-Standard concept by the Open Source Office | |
| OSM | | - Compliance Review according to < organization >'s Open Source Policy and, if applicable, A3 OSM Dependency Review. <br/> - Check used third party components regarding open source licensing and security alerts (e.g. using [ORT](https://github.com/oss-review-toolkit/ort)). | | Scan results document (with handled findings, if any) | |
| OSM | | - Compliance Review according to < organization >'s Open Source Policy and, if applicable, A4 OSM Project Review. <br/> - Check of own source code regarding copyright and license issues (e.g. using a snippet scanner). | | Scan results document (with handled findings, if any) | |
| OSM | | - Conformance check regarding obligations of open source licenses according to < organization >'s Open Source Policy: <br/> - Provide a Disclosure Document conformant to the description in A5.1 OSS Disclosure Document.  <br/> - If applicable, provide and archive a Source Code Bundle of used open source components conformant to A5.2 OSS Source Code Bundle. | | OSS Disclosure Document and Source Code Bundle (if applicable) | |
| OSM | | Check whether for a previous delivery the OSS Disclosure Document and the Source Code Bundle were made available through the offered distribution channels (e.g. on a download page) together with the deliverable, and are easy to access. | | | |
---

\* as it appears in < organization >'s internal system

\** according to the numbering in < organization >'s internal system


[^1]: To learn more about the role of Quality Gates in the Software Lifecycle Process, check out this [Medium article](https://medium.com/@yugene1986/quality-gates-2c06fe82d1af).
