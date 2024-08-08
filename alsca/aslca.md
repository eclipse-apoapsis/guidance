---
title:
author:
rights:
lang:
---

# Introduction

# Lifecycle Context View
There are at least two stakeholder groups with different needs:

- Stakeholders managing several products/services/products == business level (e.g. Portfolio Managers, Program Managers, Quality Managers, Subject Matter Officers like Software Security Officers, Export Control Officers, Open Source Officers, ...)
- Stakeholders developing and engineering the concrete product/service/product = engineering level (e.g. SW Project Managers, Product Owners, SW Development Teams, DevOp-Teams, Vendors. Open Source Projects, ...)
The two stakeholder groups have different use cases and processes, but defined interfaces and overlaps in some of the lifecycle-phases.

The following picture shall give a rough high-level qualitative overview of the portfolio and development level in the context of a Software (Component) Management lifecycle.

![image](images/Level_phases_overview.png)

## Business Level Phases
- P1) Product/Project/Service Initiation
- P2) Product/Project/Service Development
- P3) Product/Project/Service Transition
- P4) Product/Project/Service Maintenance

## Engineering Level Phases
- D1) Integration Phase
- D2) Development Phase
- D3) Distribution Phase
- D4) Maintenance Phase

## Interface between Business and Engineering Level
- I1) [[Define context and boundaries]](alsca_interfaces_business_engineering.md#I1)
- I2) [Define requirements](alsca_interfaces_business_engineering.md#I2)
- I3) [Inform about progress](alsca_interfaces_business_engineering.md#I3)
- I4) [Check quality and ship](alsca_interfaces_business_engineering.md#I4)
- I5) [Monitor and inform about irregularities](alsca_interfaces_business_engineering.md#I5)

## Handling of IP

The handled IP in the context of development shall be differentiated into the four categories:

Kind of IP       | Description                             |
-----------------|-----------------------------------------|
Background IP    | Existing own IP e.g. in the form of code that is re-used for development |
Sideground IP    | Proprietary licensed third party IP that is used |
Open Source      | Open Source licensed material that is used |
Foreground IP    | Newly developed own IP e.g. in the form of code |