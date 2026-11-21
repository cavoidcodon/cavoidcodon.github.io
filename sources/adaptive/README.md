# AUTOSAR Adaptive Platform Training Guides

A series of training guides for engineers who are new to the AUTOSAR Adaptive Platform (AP). Each guide explains one functional cluster or topic, covering what it does, how it works, how to configure it and how to use its C++ API. The guides are based on the official AUTOSAR specifications (release **R25-11**) and on reputable public sources.

## Who These Guides Are For

- **Application developers** who write software that runs on the Adaptive Platform.
- **Integrators** who configure manifests, deploy software and debug ECUs.
- **Platform developers** who build or extend functional clusters.

Assumed background: modern C++, plus basic Linux/POSIX knowledge (processes, signals, sockets). No prior AUTOSAR knowledge is needed. AUTOSAR Classic experience helps but is optional. The following table shows which knowledge each guide needs.

| Area | What you should know | Where it is needed |
| --- | --- | --- |
| C++ | Classes, RAII, move semantics, templates, lambdas, smart pointers, `std::future`-style asynchronous results | All API chapters |
| Linux/POSIX | Processes, signals, threads, file systems, sockets | Platform Overview, EM, Persistency, IDSM and Firewall |
| Networking | Ethernet, IP, UDP, TCP, multicast | CM, [Network Bindings](guides/NetworkBindings.md), NM/TSync/RDS, IDSM and Firewall |
| CAN (optional) | Frames, signals, cyclic transmission | [Network Bindings](guides/NetworkBindings.md) (Signal-to-Service translation) |
| Diagnostics (optional) | The idea of UDS services, DIDs and DTCs | Diagnostics Part 1, Diagnostics Part 2 |

## The Adaptive Platform

**Why a second platform?** Classic ECUs control electrical outputs based on input signals, and their software rarely changes during the life of a vehicle. The AUTOSAR **Classic Platform (CP)** is designed for these deeply embedded ECUs. Functions such as automated driving are different: they need much more computing power, they connect the vehicle to backend systems, and their software must be updated during the life of the vehicle. AUTOSAR therefore specifies a second software platform, the **Adaptive Platform (AP)**. It provides high-performance computing and communication, and it allows flexible software configuration, for example for over-the-air updates.

Two technology trends drive the Adaptive Platform: **Ethernet**, which offers much more bandwidth than CAN, and **processors** with many cores, GPUs and hardware accelerators. The following table summarizes the characteristics that result.

| Characteristic | What it means for you |
| --- | --- |
| C++ | Applications are written in C++. |
| Service-oriented architecture (SOA) | Applications offer and use *services*. The code is the same whether the service runs on the same machine or on another one. |
| Parallel processing | The platform is designed for multi-core processors. |
| Existing standards | AP reuses existing standards, for example POSIX for the operating system, instead of inventing new ones. |
| Safety and security | Architecture, dedicated functional clusters and guidelines support safe and secure systems. |
| Planned dynamics | Software can be deployed incrementally during development. For production, the integrator can restrict the dynamic behavior, for example to a pre-determined service discovery or to authenticated code only. |
| Agile | The platform can be updated after deployment, which supports incremental development. |

**How it is built**:

1. **Adaptive Applications** run on top of the **AUTOSAR Runtime for Adaptive Applications (ARA)**, which is the set of C++ interfaces that the **functional clusters** of the platform provide.
2. Applications may use only ARA and the minimal real-time POSIX profile **PSE51** of the operating system. This keeps them portable and isolated from each other.
3. **Execution Management** starts and stops the processes of the platform and of the applications. **State Management** decides which ones should run.
4. Applications talk to each other only through **Communication Management**, the platform's service-oriented middleware.
5. The platform runs on a **Machine**, which can be a physical ECU, a virtual machine or a container. One Machine runs exactly one instance of the platform.

The following diagram shows these layers. The [Platform Overview guide](guides/PlatformOverview.md#3-the-architecture-logical-view) explains them in detail.

![Block diagram: The Adaptive Platform in One Page](guides/diagrams/README/01-the-adaptive-platform-in-one-page.svg)

The Adaptive Platform does not replace the Classic Platform. Both run side by side in the same vehicle and communicate, for example over SOME/IP, which both platforms support (*Platform Design*, Section 3.4). Signal-to-Service translation connects the signal-based Classic world to the service-oriented Adaptive world.

## What the Series Covers

The series covers the functional clusters that most AP projects use, one guide per cluster or topic. Each guide explains the concepts, the mechanisms, the configuration and the C++ API, and shows them on the running example.

The series does **not**:

- replace the specifications. Every normative statement points to a requirement ID, so that you can read the exact text. Where a guide and a specification differ, the specification applies.
- describe a particular vendor's product or tools. Where implementations differ, a **Note (implementation example)** box shows one typical approach.
- cover the Classic Platform, except where an Adaptive cluster interacts with it.

All guides use release R25-11 only.

## The Guides

Start with [*The Running Example*](guides/RunningExample.md). It defines the invented ECU `HPC` that every guide uses. Keep the [*Series Glossary*](guides/Glossary.md) at hand: it defines every term and acronym of the series. Then read the guides in the order of this list. Each guide can also be read on its own: it briefly recaps what it needs from other guides and links to them.

| Guide | It answers the question | Status |
| --- | --- | --- |
| [The Running Example](guides/RunningExample.md) | What is the `HPC`, the invented ECU that all guides use? | Available (v1.0) |
| [Series Glossary](guides/Glossary.md) | What does a term or an acronym of the series mean? | Available (v1.0) |
| [Adaptive Platform Overview and Architecture](guides/PlatformOverview.md) | How is the platform structured, and what does the operating system provide? | In review |
| [Manifests and Methodology](guides/Manifests.md) | Who configures what, when, and in which manifest? | In review |
| [`ara::core` and General Conventions](guides/CoreAndGeneral.md) | How do the `ara::` APIs report errors, and how do I initialize the runtime? | In review |
| [Execution Management](guides/ExecutionManagement.md) | Who starts and stops my process, and how do state transitions work? | Available (v1.0) |
| [State Management](guides/StateManagement.md) | Who decides which Function Group States are active? | In review |
| [Platform Health Management](guides/PlatformHealthManagement.md) | How is my process supervised, and what happens when it misbehaves? | In review |
| [Communication Management Part 1: `ara::com` Concepts and API](guides/CommunicationManagement.md) | How do applications offer and use services in C++? | In review |
| [Communication Management Part 2: Network Bindings (SOME/IP, Signal-Based, DDS)](guides/NetworkBindings.md) | How do services travel over SOME/IP and DDS, and how do CAN signals become services? | In review |
| [Communication Management Part 3: Secure Communication and End-to-End Protection](guides/SecureAndSafeCommunication.md) | How is service communication protected against attackers and against faults? | In review |
| Network Management, Time Synchronization and Raw Data Stream | How are networks woken, clocks synchronized and raw sensor data streamed? | Planned |
| [Log and Trace](guides/LogAndTrace.md) | How do I log, and how do I read a DLT trace? | In review |
| [Persistency](guides/Persistency.md) | How do I keep data across power cycles and updates? | In review |
| [Diagnostics Part 1](guides/DiagnosticsPart1.md) | How does a diagnostic tester talk to the `HPC`? | In review |
| [Diagnostics Part 2](guides/DiagnosticsPart2.md) | How are faults detected, stored as DTCs and read out, and how does SOVD work? | In review |
| Update and Configuration Management | How is software installed, updated and rolled back? | Planned |
| Cryptography | How do I use keys, certificates and crypto primitives safely? | Planned |
| Identity and Access Management | Who may use which service or platform interface? | Planned |
| Intrusion Detection System Manager and Firewall | How are security events collected, and how is network traffic filtered? | Planned |
| End-to-End Integration: A Day in the Life of the HPC | How do all clusters work together over a whole day? | Planned |

## The Running Example

All guides share one running example: an invented high-performance ECU called **HPC** that runs an ADAS feature. Every guide shows its topic on this example, so the pieces fit together as you read on. The [Running Example guide](guides/RunningExample.md) defines the example completely, and each of its elements names the guide that explains it in detail.

## How the Guides Are Built

Every guide about a functional cluster follows the same pattern, so that you always know where to look:

1. **About This Guide:** audience, learning objectives and the parts of the running example that the guide uses.
2. **Concept chapters:** what the cluster does and does not do, its vocabulary and its place in the architecture.
3. **Mechanism chapters:** how the cluster behaves, with rules, requirement IDs, diagrams and worked examples.
4. **API Reference:** the `ara::` C++ interface with usage examples.
5. **Configuration Overview:** where the configuration lives and how its elements relate.
6. **Configuration Reference:** the minimal configuration, every setting with its meaning, values, default and effect, and the complete configuration of the running example.
7. **Practice:** reporting, an end-to-end walkthrough, best practices, pitfalls and troubleshooting.
8. **Summary and Self-Check Quiz**, with answers.
9. **Appendices:** glossary, cheat sheet, traceability to the specification, notable changes between releases, and references.

The Running Example and the Series Glossary are references and do not follow this pattern. The Platform Overview, Manifests and Core guides cover cross-cutting topics and adapt it.

## Functional Clusters and Their Guides

A **functional cluster** is a logical group of platform functionality, such as Execution Management or Persistency. Each cluster has its own specification and its own API in the `ara::` namespace, and it is configured through its own part of the manifests. When you use the platform, you use its functional clusters: Execution Management starts your process, Communication Management connects it to other applications, Persistency stores its data, and so on.

AUTOSAR specifies functional clusters instead of a fixed software architecture. This is a deliberate choice: the standard says *what* a cluster does and which interfaces it offers to applications and to other parts of the platform, but not how it is built inside. Vendors may implement a cluster as a library, as one or more daemon processes, or as a mix of both. The internal interfaces between clusters are not standardized, so clusters from different vendors may not combine.

The *Software Architecture* explanation sorts the R25-11 clusters into seven categories: Runtime, Communication, Storage, Security, Safety, Configuration and Diagnostics (*SW Architecture*, Section 9.1). The [Platform Overview guide, Section 3.3](guides/PlatformOverview.md#33-four-groups-of-functional-clusters) shows how the clusters are grouped in the logical view of the platform.

The following table maps each cluster to its guide. The columns come from two explanatory documents:

- **Namespace** and **ARA group** follow the logical view of the platform (*Platform Design*, Figure 4.1). *Foundation* clusters provide the fundamental functions and are library-based: the application links a library that provides the API. *Platform Service* clusters are service-based: they offer their API as `ara::com` services (*Platform Design*, Section 4.2.2). *Vehicle Service* clusters provide vehicle-level functions.
- **Daemon-based** means that the cluster is intended to be implemented with its own daemon process. An implementation may deviate from this (*SW Architecture*, Table 9.1).

| Functional cluster | Namespace | Category | ARA group | Daemon-based | Guide |
| --- | --- | --- | --- | --- | --- |
| Execution Management | `ara::exec` | Runtime | Foundation | yes | [EM](guides/ExecutionManagement.md) |
| State Management | `ara::sm` | Runtime | Platform Service | yes | [SM](guides/StateManagement.md) |
| Log and Trace | `ara::log` | Runtime | Foundation | no | [Log and Trace](guides/LogAndTrace.md) |
| Core | `ara::core` | Runtime | Foundation | no | [Core](guides/CoreAndGeneral.md) |
| Operating System Interface | (POSIX PSE51, C++ standard library) | Runtime | Foundation | no | [Platform Overview](guides/PlatformOverview.md#7-the-operating-system-interface) |
| Communication Management | `ara::com` | Communication | Foundation | yes | [CM](guides/CommunicationManagement.md), [Network Bindings](guides/NetworkBindings.md) |
| Raw Data Stream | `ara::rds` | Communication | Foundation | no | NM/TSync/RDS |
| Network Management | `ara::nm` | Communication | Foundation | yes | NM/TSync/RDS |
| Time Synchronization | `ara::tsync` | Communication | Foundation | yes | NM/TSync/RDS |
| Automotive API Gateway | `ara::aag` | Communication | Vehicle Service | yes | not covered ([Topics Outside the Series](#topics-outside-the-series)) |
| Persistency | `ara::per` | Storage | Foundation | no | [Persistency](guides/Persistency.md) |
| Remote Persistency | `ara::rper` | Storage | Vehicle Service | yes | not covered |
| Cryptography | `ara::crypto` | Security | Foundation | yes | Cryptography |
| Intrusion Detection System Manager | `ara::idsm` | Security | Foundation | yes | IDSM and Firewall |
| Firewall | `ara::fw` | Security | Foundation | yes | IDSM and Firewall |
| Platform Health Management | `ara::phm` | Safety | Foundation | yes | [PHM](guides/PlatformHealthManagement.md) |
| Safe Hardware Acceleration | `ara::shwa` | Safety | Foundation | no | not covered |
| Update and Configuration Management | `ara::ucm` | Configuration | Platform Service | yes | UCM |
| Vehicle Update and Configuration Management | `ara::vucm` | Configuration | Vehicle Service | yes | UCM (context only) |
| Registry | (internal, no public API) | Configuration | (not shown) | no | not covered |
| Diagnostic Management | `ara::diag` | Diagnostics | Foundation | yes | [Diagnostics Part 1](guides/DiagnosticsPart1.md), [Diagnostics Part 2](guides/DiagnosticsPart2.md) |

The [Platform Overview guide, Chapter 5](guides/PlatformOverview.md#5-the-functional-clusters-of-r25-11) describes each cluster in one paragraph, including the clusters that this series does not cover.

**Identity and Access Management (IAM)** does not appear in the table because the *Software Architecture* explanation does not list it as a building block. It is a framework that several clusters implement, built from a Policy Decision Point and Policy Enforcement Points (*Platform Design*, Chapter 14). The IAM guide covers it.

## Topics Outside the Series

The following topics are part of R25-11 but have no guide of their own. The [Platform Overview guide, Chapter 5](guides/PlatformOverview.md#5-the-functional-clusters-of-r25-11) summarizes them so that you know they exist.

| Topic | What it is | Where to read more |
| --- | --- | --- |
| Automotive API Gateway | Gives off-board and on-board clients access to selected vehicle data through the Vehicle Information Service Specification (VISS) and the Vehicle Signal Specification (VSS). | *Platform Design*, Chapter 22 |
| Remote Persistency | Shares data stored by Persistency between applications through services, on the same or on different machines. | *Platform Design*, Chapter 23 |
| Safe Hardware Acceleration | An API to run tasks on hardware accelerators, such as GPUs, with safety in mind. | *Platform Design*, Section 17.4 |
| Registry | An internal component that gives other clusters access to manifest information. It is not used by applications. | *SW Architecture*, Section 9.7.3 |
| Sensor Interfaces | Standardized service interfaces for sensor data according to ISO 23150. They are interfaces, not a cluster. | *Platform Design*, Chapter 24 |
| Vehicle Update and Configuration Management | Coordinates software updates across all ECUs of a vehicle. The UCM guide explains only how it uses UCM. | *Platform Design*, Section 13.5 |
| Classic Platform | The AUTOSAR platform for deeply embedded ECUs. | The CP standard at <https://www.autosar.org/standards> |

## The AUTOSAR Specifications

You can download the AUTOSAR specifications free of charge from <https://www.autosar.org/standards>. The guides are based on release **R25-11** of the Adaptive Platform and Foundation standards. Every AUTOSAR document has a name of the form `AUTOSAR_<standard>_<type>_<name>`, for example `AUTOSAR_AP_SWS_ExecutionManagement`. The *standard* is `AP` (Adaptive Platform), `CP` (Classic Platform) or `FO` (Foundation, the artifacts common to both platforms). The *type* tells you what kind of document it is:

| Type | Name | What it contains | Normative? |
| --- | --- | --- | --- |
| SWS | Software Specification | The behavior and API of one functional cluster. The main source of every cluster guide. | Yes |
| TPS | Template Specification | The meta-model, for example the *Manifest Specification* with all configuration elements. | Yes |
| PRS | Protocol Requirements Specification | A protocol on the wire, for example SOME/IP or DLT. | Yes |
| RS | Requirements Specification | The requirements that a cluster must fulfill, which the SWS refines. | Yes |
| EXP | Explanation | Background and design rationale, for example *Explanation of Adaptive Platform Design*. | No |
| TR | Technical Report | Reports such as the *Glossary* or a release overview. | No |

The guides rely on SWS, TPS and PRS for every normative statement, and on EXP and TR for explanations.

## Disclaimer

These guides are training material, not a normative reference. Where a guide and an AUTOSAR specification differ, the specification applies.
