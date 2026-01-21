---
sidebar_position: 1
title: A1 Integration Check
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

# A1 Integration Check

This attachment documents the Integration Check as referenced in the [Software Component Lifecycle Process](../component_lifecycle_process.md).

## Motivation

Organizations across industries are currently using thousands of OSS components, including in their products, with open source penetration in vertical software stacks reaching up to 85% of the overall software used[^1]. Therefore, it is important to use the right OSS components in the right way.

The integration check helps the development team[^2] to:

1. Introduce minimal shared standard for component evaluation and its documentation.
2. Increase visibility and homogeneity in the team's portfolio
3. Increase traceability of technology decisions.
4. Prevent wasted effort for unacceptable components by performing early checks.

The Integration Check may include a check against an allow-list/deny-list or Open Source Usage policy.

In case of customer projects, the allow-list/deny-list might also be provided from customer side.

## Required Information

The following information is collected in order to document the decision:

1. **Component**: Name, version, release year, homepage and Openhub website of the corresponding component.
2. **License**: To ensure the necessary legal right to use a component is in place, the required license information must be well documented:
    * Exact name and version of the license that has been declared by the authors.
    * Attached document with an original statement of the authors that the component is distributed under the given license (screenshot, PDF, email, etc.).
    * URL where the license statement was found (if it is available online)
    * If the license is not part of the declared license list, the license text itself must also be attached.
3. **Integration**:  
    * The development product/project that wants to use the component.  
    * The development project/product responsible for the corresponding software project/product.
    * Type of integration (required to ensure compatibility with the OSS license).
    * The technical decision has to be documented (e.g. alternatives, used evaluation criteria, evaluation results, reasoning, results).

## Administrative Process

It is suggested to document the approval process by using the existing approval workflow systems, but different parts of the organization can use an equivalent custom process instead.

The components used in a development project/product should be documented in a list of "expected Open Source components" in order to provide this list as reference to the A3 OSM Dependency Review (**add link when document available**).

[^1]: [Why Do Enterprises Use and Contribute to Open Source Software](https://www.linuxfoundation.org/blog/blog/why-do-enterprises-use-and-contribute-to-open-source-software)
[^2]: Development team may range from a single customer project team or product development team up to a complete department or product group.
