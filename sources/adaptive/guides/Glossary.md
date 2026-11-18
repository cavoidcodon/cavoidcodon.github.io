# AUTOSAR Adaptive Platform: Series Glossary

<!-- markdownlint-disable MD013 MD033 -->

> **Source specification:**
>
> - *Glossary* (`AUTOSAR_FO_TR_Glossary`), AUTOSAR Foundation **R25-11**.
> - *Explanation of Adaptive Platform Design* (`AUTOSAR_AP_EXP_PlatformDesign`), AUTOSAR Adaptive Platform **R25-11**.
> - *Explanation of Adaptive Platform Software Architecture* (`AUTOSAR_AP_EXP_SWArchitecture`), AUTOSAR Adaptive Platform **R25-11**.
>
> **Document type:** Training Material.
>
> **Author:** Hieu Do Minh
>
> **Version:** 1.0
>
> **Part of the series:** [AUTOSAR Adaptive Platform Training Guides](../README.md). Previous: [The Running Example](RunningExample.md). Next: [Adaptive Platform Overview and Architecture](PlatformOverview.md).

## About This Guide

This guide is the glossary of the whole series. It defines every acronym and every term once, for all guides, and each guide's own glossary uses the same wording. Definitions are based on the AUTOSAR *Glossary* (R25-11), the *Platform Design* and *Software Architecture* explanations, and the specifications of the clusters. Keep it at hand while you read the other guides.

### How to Read This Guide

This guide is for lookup. [Chapter 1](#1-acronyms) lists the acronyms, [Chapter 2](#2-glossary) the terms, both in alphabetical order. The column *Explained in* names the guide, and where possible the section, that explains a term in detail: `[Diagnostics Part 2, 9.7]` means the Diagnostics Part 2 guide, Section 9.7. Guides are named by the short names listed on the [main page](../README.md#the-guides), and *Main page* means the [main page](../README.md) of the series.

## Table of Contents

- [AUTOSAR Adaptive Platform: Series Glossary](#autosar-adaptive-platform-series-glossary)
  - [About This Guide](#about-this-guide)
    - [How to Read This Guide](#how-to-read-this-guide)
  - [Table of Contents](#table-of-contents)
  - [1. Acronyms](#1-acronyms)
  - [2. Glossary](#2-glossary)
  - [Appendix A. References](#appendix-a-references)

---

## 1. Acronyms

| Acronym | Meaning |
| --- | --- |
| AA | Adaptive Application |
| AAG | Automotive API Gateway |
| ADL | Argument-dependent lookup: the C++ rule that finds a function in the namespaces of its arguments |
| AP | (AUTOSAR) Adaptive Platform |
| API | Application Programming Interface |
| APMC | Adaptive Platform Machine Configuration |
| ARA | AUTOSAR Runtime for Adaptive Applications: the set of programming interfaces available to Adaptive Applications |
| ARTI | AUTOSAR Run-Time Interface |
| ARXML | AUTOSAR XML, the file format of AUTOSAR models and manifests |
| ASIL | Automotive Safety Integrity Level (ISO 26262) |
| AUTOSAR | AUTomotive Open System ARchitecture |
| BSW | Basic Software (Classic Platform) |
| CAN | Controller Area Network |
| CM | Communication Management. (In the AUTOSAR *Glossary*, CM also stands for the Classic "Communication Module".) |
| CP | (AUTOSAR) Classic Platform |
| DDS | Data Distribution Service, a publish/subscribe middleware standard of the OMG |
| DID | Data Identifier, a UDS identifier for a data record |
| DLT | Diagnostic Log and Trace, the AUTOSAR log and trace protocol |
| DM | Diagnostic Management. (The AUTOSAR *Glossary* expands DM as "Diagnostic Manager".) |
| DoIP | Diagnostics over Internet Protocol (ISO 13400-2) |
| DTC | Diagnostic Trouble Code |
| DTLS | Datagram Transport Layer Security |
| E2E | End-to-End (protection of data exchange) |
| ECU | Electronic Control Unit |
| EcuC | ECU Configuration (Classic Platform) |
| Elementary Supervision Status | The status of one alive, deadline or logical supervision: `kOK`, `kFAILED`, `kEXPIRED` or `kDEACTIVATED`. | [PHM, 9.1](PlatformHealthManagement.md#91-elementary-supervision-status) |
| EM | Execution Management |
| EXP | Explanation (AUTOSAR document type) |
| FC | Functional Cluster |
| FFI | Freedom From Interference |
| FG | Function Group |
| FO | (AUTOSAR) Foundation |
| FVM | Freshness Value Manager (SecOC) |
| gPTP | generalized Precision Time Protocol (IEEE 802.1AS) |
| GST | Generic Structure Template |
| HPC | High performance computer. In code font, `HPC` is the machine of the running example. |
| HSM | Hardware Security Module |
| IAM | Identity and Access Management |
| IDB | Implementation-defined behavior |
| IdsM | Intrusion Detection System Manager |
| IdsR | Intrusion Detection System Reporter |
| I-PDU | Interaction Layer Protocol Data Unit |
| IFC | Inter-Functional-Cluster (interface) |
| IPC | Inter-Process Communication |
| LT | Log and Trace |
| MAC | Message Authentication Code; also Media Access Control (Ethernet). The context makes clear which one is meant. |
| MISRA | Motor Industry Software Reliability Association; here its C++:2023 coding guidelines |
| NM | Network Management |
| OEM | Original Equipment Manufacturer (the vehicle manufacturer) |
| OS | Operating System |
| OSEK | The automotive operating system standard on which the Classic OS is based (ISO 17356-3) |
| OSI | Operating System Interface (functional cluster). Not to be confused with the ISO OSI reference model of network layers. |
| OTA | Over-The-Air (software update) |
| PDP | Policy Decision Point |
| PDU | Protocol Data Unit |
| PEP | Policy Enforcement Point |
| PHM | Platform Health Management |
| PID | Process Identifier |
| PNC | Partial Network Cluster |
| POSIX | Portable Operating System Interface (IEEE Std 1003.1) |
| PRS | Protocol Requirements Specification (AUTOSAR document type) |
| PSE51 | The minimal real-time POSIX profile (IEEE Std 1003.13) that Adaptive Applications may use |
| QSEv | Qualified (onboard) Security Event |
| RDS | Raw Data Stream |
| RID | Routine Identifier, a UDS identifier for a routine |
| RS | Requirements Specification (AUTOSAR document type) |
| RTE | Runtime Environment (Classic Platform) |
| S2S | Signal-to-Service translation. (The AUTOSAR *Glossary* uses SST, Signal Service Translation.) |
| SD | Service Discovery |
| SecOC | Secure Onboard Communication |
| SEooC | Safety Element out of Context |
| SEv | (Onboard) Security Event |
| SHWA | Safe Hardware Acceleration |
| SM | State Management |
| SOA | Service-Oriented Architecture |
| SOC | Security Operations Center. (The AUTOSAR *Glossary* uses SOC for Service-Oriented Communication; the series does not.) |
| SOME/IP | Scalable service-Oriented MiddlewarE over IP |
| SOME/IP-SD | SOME/IP Service Discovery |
| SOVD | Service-Oriented Vehicle Diagnostics (ASAM) |
| SWC | Software Component |
| SWCL | Software Cluster |
| SWS | Software Specification (AUTOSAR document type) |
| TCP | Transmission Control Protocol |
| TLS | Transport Layer Security |
| TPS | Template Specification (AUTOSAR document type), for example the Manifest Specification |
| TR | Technical Report (AUTOSAR document type) |
| TSync | Time Synchronization. (The AUTOSAR *Glossary* uses TSY.) |
| UB | Undefined behavior |
| UCM | Update and Configuration Management |
| UDP | User Datagram Protocol |
| UDS | Unified Diagnostic Services (ISO 14229-1) |
| UTF-8 | The Unicode encoding used for all strings in ARA |
| UUID | Universally Unique Identifier, a 128-bit identifier |
| V-UCM | Vehicle Update and Configuration Management |
| VISS | Vehicle Information Service Specification (COVESA) |
| VSS | Vehicle Signal Specification (COVESA) |
| WCET | Worst-case execution time |
| XSD | XML Schema Definition |

---

## 2. Glossary

| Term | Meaning | Explained in |
| --- | --- | --- |
| Aging | Deleting an event memory entry after a configured number of operation cycles without failure. | [Diagnostics Part 2, 9.7](DiagnosticsPart2.md#97-aging) |
| Clear Condition | A condition that must be fulfilled for a DTC to be cleared; set by an application through `ara::diag::Condition`. AP only. | [Diagnostics Part 2, 7.3](DiagnosticsPart2.md#73-clear-conditions-and-cleareventallowedbehavior) |
| Confirmed DTC | A DTC whose status bit 3 is set, after the configured number of failed operation cycles (confirmation threshold). | [Diagnostics Part 2, 8.2](DiagnosticsPart2.md#82-status-bit-processing) |
| Debouncing | Filtering of diagnostic monitor reports until a result is qualified as failed or passed; counter-based, time-based or inside the monitor. | [Diagnostics Part 2, 6.1](DiagnosticsPart2.md#61-why-debounce) |
| Displacement | Replacing a less important event memory entry by a new one when the event memory is full. | [Diagnostics Part 2, 9.6](DiagnosticsPart2.md#96-overflow-and-displacement) |
| Enable Condition | A condition that must be fulfilled for the reports of a diagnostic event to count; set by an application through `ara::diag::Condition`. | [Diagnostics Part 2, 7.2](DiagnosticsPart2.md#72-enable-conditions) |
| Event Combination | Mapping several diagnostic events to one DTC, combined on storage or on retrieval. | [Diagnostics Part 2, 8.4](DiagnosticsPart2.md#84-event-combination) |
| Extended Data Record | A record of mostly statistical data stored with a DTC, such as the occurrence counter or the aging counter. | [Diagnostics Part 2, 9.4](DiagnosticsPart2.md#94-extended-data-records) |
| Fault Detection Counter (FDC) | The debouncing progress of a diagnostic event, from −128 (finally healed) to +127 (finally defective). | [Diagnostics Part 2, 2.3](DiagnosticsPart2.md#23-debouncing-and-the-fault-detection-counter) |
| Indicator (diagnostic) | A warning output, such as a lamp, linked to diagnostic events; drives status bit 7 of their DTCs. | [Diagnostics Part 2, 8.5](DiagnosticsPart2.md#85-indicators-and-the-warningindicatorrequested-bit) |
| Pending DTC | A DTC whose status bit 2 is set: it failed in the current or the last operation cycle. | [Diagnostics Part 2, 8.2](DiagnosticsPart2.md#82-status-bit-processing) |
| Proximity Challenge | An SOVD mechanism that proves that a person is physically at the vehicle before an operation runs. | [Diagnostics Part 2, 13.4](DiagnosticsPart2.md#134-proximity-challenge) |
| SOVD Gateway | The edge node that routes SOVD requests from clients to the SOVD servers in the vehicle. | [Diagnostics Part 2, 3.4](DiagnosticsPart2.md#34-the-sovd-reference-architecture) |
| SOVD Lock | Exclusive access of one SOVD client to an SOVD entity; excludes a UDS client in the extended session. | [Diagnostics Part 2, 12.5](DiagnosticsPart2.md#125-locks-environmental-conditions-and-service-validation) |
| SOVD Server | An SOVD endpoint in the vehicle. On the Adaptive Platform, Diagnostic Management is an SOVD server; each Diagnostic Server instance is a sub-component. | [Diagnostics Part 2, 12.1](DiagnosticsPart2.md#121-sovd-entities-and-dms-place) |
| UDS DTC Status Byte | The 8 status bits of a DTC defined by ISO 14229-1, such as test failed, pending and confirmed. | [Diagnostics Part 2, 2.2](DiagnosticsPart2.md#22-event-status-and-the-uds-dtc-status-byte) |
| `≪atpSplitable≫` | Stereotype of a property whose content may be spread over several files. | [Manifests, 3.7](Manifests.md#37-many-files-one-model) |
| `≪atpUriDef≫` | Stereotype of a reference whose path carries the information, even if the target is not on the Machine. | [Manifests, 1.2](Manifests.md#12-design-models-and-target-configuration), [Manifests, 9.4](Manifests.md#94-from-port-to-instancespecifier) |
| Abnormal Termination | A process ended with an exit status other than `0`, for example after a crash. | [EM, 2.5](ExecutionManagement.md#25-termination-events) |
| AbortHandler | A function `void() noexcept` that `ara::core::Abort` calls, in reverse order of installation, before it ends the process | [Core, 10.4](CoreAndGeneral.md#104-abort-handlers) |
| Access Control Decision | The yes-or-no answer whether a requested operation is permitted. It is based on the identity of the caller and the Access Control Policy. | IAM |
| Access Control Policy | A rule, bound to a target such as a service interface, that states which identity is needed to access it. | IAM |
| Access Permission (diagnostics) | `DiagnosticAccessPermission`: the sessions, security levels, environmental condition and roles in which a diagnostic service, DID or routine may be used. | [Diagnostics Part 1, 7.3](DiagnosticsPart1.md#73-session-and-security-checks) |
| ActionList | The ordered list of ActionListItems that a StateMachine executes when it enters a StateMachine State (meta-class `StateManagementActionList`). | [SM, 2.3](StateManagement.md#23-actionlist-and-actionlistitem) |
| ActionListItem | One action of an ActionList, for example a Function Group State request, SYNC, Sleep or the start of an Agent. | [SM, 2.3](StateManagement.md#23-actionlist-and-actionlistitem) |
| Activation (update) | The critical phase of a software update in which the new software is switched on and can still be rolled back. | UCM |
| Active subscriber | An application that has called `Subscribe` on an event, field or trigger and has not called `Unsubscribe`. | [CM, 2.6](CommunicationManagement.md#26-subscription-samples-and-the-local-cache) |
| Active update session | The period from the accepted `RequestUpdateSession` to the end of `StopUpdateSession`, during which State Management supports UCM and keeps the machine available. | [SM, 2.7](StateManagement.md#27-update-session-terms) |
| Adaptive Application | Software that delivers a function. It consists of one or more Executables. It uses only ARA and the POSIX profile PSE51, so that it can be deployed on any Adaptive Platform. | [EM, 2.1](ExecutionManagement.md#21-software-units-from-application-to-os-process) |
| Adaptive Platform | AUTOSAR's software platform for high-performance ECUs with service-oriented communication and updatable software. The term means both the standard and an implementation of it. | [Main page](../README.md#the-adaptive-platform-in-one-page), [Platform Overview, 1.1](PlatformOverview.md#11-what-is-the-adaptive-platform) |
| Adaptive Platform Foundation | The part of the platform that provides the fundamental functions, such as Execution Management, Communication Management and Persistency, as library-based APIs. | [Main page](../README.md#functional-clusters-and-their-guides), [Platform Overview, 3.3](PlatformOverview.md#33-four-groups-of-functional-clusters) |
| Adaptive Platform Services | Standard platform services, such as UCM and State Management, that are provided as services over Communication Management. | [Main page](../README.md#functional-clusters-and-their-guides), [Platform Overview, 3.3](PlatformOverview.md#33-four-groups-of-functional-clusters) |
| Agent (State Management) | A StateMachine that the Controller starts and stops; it controls the Function Groups of one Software Cluster. | [SM, 2.5](StateManagement.md#25-controller-and-agent) |
| Alive Indication | One report of a checkpoint that is used for alive supervision. | [PHM, 6.2](PlatformHealthManagement.md#62-the-algorithm-alive-counter-reference-cycle-and-margins) |
| Alive Supervision | A PHM supervision that counts the reports of a checkpoint in each reference cycle and checks them against an expected number with margins. | [PHM, 6](PlatformHealthManagement.md#6-alive-supervision) |
| APMC | The M1-based target-configuration model with a definition side and a value side that replaces manifest content step by step. | [Manifests, 11.9](Manifests.md#119-looking-ahead-apmc) |
| Application Design | The design-related part of the model: data types, service interfaces, persistency interfaces and other interfaces that an application uses, independent of any deployment. | [Manifests, 2.3](Manifests.md#23-the-kinds-of-manifest) |
| Application ID | The identifier of one process instance in log and trace messages, defined by `DltApplication.applicationId`. | [Log and Trace, 5.2](LogAndTrace.md#52-application-id) |
| ARA | The AUTOSAR Runtime for Adaptive Applications: the standard C++ interfaces that the functional clusters provide to applications. | [Main page](../README.md#the-adaptive-platform-in-one-page), [Platform Overview, 3.2](PlatformOverview.md#32-ara-the-autosar-runtime-for-adaptive-applications) |
| ARElement | A model element that can be defined stand-alone in a package. | [Manifests, 2.4](Manifests.md#24-design-elements-and-uploadable-elements) |
| ARPackage | A package of the model. It establishes a name space and is an open set: several files may contribute to it. | [Manifests, 3.2](Manifests.md#32-packages-short-names-and-paths) |
| ARTI | The AUTOSAR Run-Time Interface between build tools and debugging and tracing tools. The OSI defines ARTI trace messages for processes and tasks. | [Platform Overview, 7.10](PlatformOverview.md#710-os-tracing-with-arti) |
| Async-signal-safe | Safe to call from a POSIX signal handler. No ARA API is | [Core, 12.7](CoreAndGeneral.md#127-async-signal-safety) |
| Authenticator | The (truncated) message authentication code that SecOC appends to a message. | [Secure Communication, 2.3](SecureAndSafeCommunication.md#23-authenticator-mac-freshness-value-and-truncation) |
| Authenticity | The property that data comes from the source it claims to come from. | Cryptography |
| Automotive API Gateway | The functional cluster that gives clients access to selected vehicle data through VISS and VSS. Not covered by the series. | [Main page](../README.md#topics-outside-the-series) |
| AUTOSAR XML (ARXML) | The XML format in which AUTOSAR models, including manifests, are exchanged. | [Manifests, 3.1](Manifests.md#31-the-anatomy-of-an-arxml-file) |
| Backup (Persistency) | The copy of all persistent data of a process that Persistency creates before an update; only one backup exists at a time. | [Persistency, 12.5](Persistency.md#125-the-update-sequence) |
| Basic Software (BSW) | In the Classic Platform, the infrastructure software of an ECU below the RTE: services, ECU abstraction, microcontroller abstraction and complex drivers. | [Platform Overview, 2.2](PlatformOverview.md#22-why-the-classic-design-fits-its-problem) |
| Central storage | The location where Persistency keeps the list of installed storages and the versions for one process (`PersistencyCentralStorageUri`). | [Persistency, 12.2](Persistency.md#122-the-central-storage-and-the-two-versions) |
| Certificate | An X.509 document that binds a public key to an identity and is signed by a certificate authority. | Cryptography |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported to PHM, so that PHM can supervise its timing and order. | [PHM, 2.1](PlatformHealthManagement.md#21-supervised-entity-checkpoint-and-supervised-entity-instance) |
| Cipher Suite | A set of algorithms for key exchange, authentication and encryption of a TLS connection, identified by an IANA number. | [Secure Communication, 6.4](SecureAndSafeCommunication.md#64-cipher-suites-certificates-and-pre-shared-keys) |
| Class table | The table of the TPS that lists the attributes of a meta-class with type, multiplicity and kind. | [Manifests, 3.8](Manifests.md#38-reading-a-class-table-of-the-tps) |
| Classic Platform | AUTOSAR's software platform for deeply embedded ECUs with high demands on predictability, safety and responsiveness. | [Platform Overview, 2.1](PlatformOverview.md#21-the-problem-the-classic-platform-solves) |
| Client | A software entity that uses the services of a server. | [CM, 2.1](CommunicationManagement.md#21-service-interface-service-instance-provider-and-consumer) |
| Companion Process | A small reporting process that reports `kRunning` on behalf of a non-reporting process once that process is really usable. | [EM, 5.4](ExecutionManagement.md#54-non-reporting-processes-and-the-companion-pattern) |
| Compositionality | The behavior of a component does not depend on the overall system load and configuration; an important property of deterministic systems. | [Platform Overview, 2.3.1](PlatformOverview.md#231-what-determinism-means) |
| ComSpec | A qualification of the use of one element of an interface at one port, for example the initial value of a field. | [Manifests, 5.2](Manifests.md#52-ports-how-software-talks-to-the-outside) |
| Configuration class | In the Classic Platform, the time at which a parameter is fixed: pre-compile time, link time or post-build time. | [Platform Overview, 2.3.4](PlatformOverview.md#234-the-price-no-flexibility-after-build) |
| Constraint | A numbered rule on the meta-model, cited as `[constr_nnnn]`. It must hold from its imposition time on; a model that violates it at that point is invalid. | [Main page](../README.md#requirement-and-constraint-ids), [Manifests, 2.5](Manifests.md#25-constraints-and-imposition-times) |
| Context ID | The Log and Trace identifier of a logical group of messages within an application, for example `TRCK` of `Fusion`; platform clusters use reserved four-character IDs such as `#COR` | [Core, 12.5](CoreAndGeneral.md#125-logging-and-tracing-conventions), [Log and Trace, 5.3](LogAndTrace.md#53-context-id) |
| Continuation | A callable registered with `Future::then` that runs when the result is ready | [Core, 9.5](CoreAndGeneral.md#95-continuations-with-then) |
| Contract version | The version of the structure of a process's persistent data; when it increases, the application may migrate its data in the update callback. | [Persistency, 2.5](Persistency.md#25-contract-version-and-target-configuration-version) |
| Control message | A DLT message with which a logging client controls the logging module, or the module's response. | [Log and Trace, 13](LogAndTrace.md#12-controlling-a-running-ecu-control-messages) |
| Controller (State Management) | The one StateMachine that starts with State Management, controls `MachineFG` and starts and stops the Agents. | [SM, 2.5](StateManagement.md#25-controller-and-agent) |
| Corruption | The corruption of a system resource, such as a stack overflow or a bit flip; non-recoverable | [Core, 6.4](CoreAndGeneral.md#64-corruptions-and-failed-default-allocations) |
| CppImplementationDataType | A data type with its C++ binding; its category selects the C++ form. | [Manifests, 6.4](Manifests.md#64-data-types) |
| CurrentState | The state a Function Group is in when a transition starts. | [EM, 8.1](ExecutionManagement.md#81-vocabulary) |
| Daemon-based | A functional cluster that is intended to be implemented with its own daemon process. | [Main page](../README.md#functional-clusters-and-their-guides), [Platform Overview, 4.2](PlatformOverview.md#42-library-based-and-service-based-functional-clusters) |
| Data Identifier (DID) | A UDS identifier of a data record that a tester can read or write, such as a software version. | [Diagnostics Part 1, 10.1](DiagnosticsPart1.md#101-reading-and-writing-dids-0x22-0x2e) |
| Data type mapping | `PersistencyKeyValueDataTypeMapping`: declares the previous and the current type of a key, so that the old value can be read during a migration. | [Persistency, 12.6](Persistency.md#126-migrating-data-the-update-callback-and-data-type-mappings) |
| Deadline Supervision | A PHM supervision that checks that the time from a source to a target checkpoint lies between a minimum and a maximum. | [PHM, 7](PlatformHealthManagement.md#7-deadline-supervision) |
| Design model | Model content that describes the system across compute nodes and is exchanged between roles, often as a contract. | [Manifests, 1.2](Manifests.md#12-design-models-and-target-configuration) |
| Determinism | The property that the same inputs always give the same outputs, within a known, bounded time, every time. | [Platform Overview, 2.3.1](PlatformOverview.md#231-what-determinism-means) |
| Diagnostic Address | The address under which a diagnostic server is reached. A machine can have one for all Software Clusters or one per Software Cluster. | [Diagnostics Part 1, 2.3](DiagnosticsPart1.md#23-diagnostic-server-instances-and-software-clusters) |
| Diagnostic Contribution Set | `DiagnosticContributionSet`: the diagnostic configuration of one Diagnostic Server instance; Software Clusters reference it. | [Diagnostics Part 1, 2.3](DiagnosticsPart1.md#23-diagnostic-server-instances-and-software-clusters) |
| Diagnostic Conversation | The state of the exchange between one diagnostic tester and one Diagnostic Server instance (session, security level, ongoing request), allocated at run time. | [Diagnostics Part 1, 6](DiagnosticsPart1.md#6-diagnostic-conversations) |
| Diagnostic Event | The atomic unit of fault detection in Diagnostic Management. Its status reflects the latest result of a diagnostic monitor; one or more events make up a DTC. | [Diagnostics Part 2, 2.1](DiagnosticsPart2.md#21-monitor-diagnostic-event-dtc) |
| Diagnostic Extract (DEXT) | The AUTOSAR model of the diagnostic behavior of an ECU, shared by the Classic and the Adaptive Platform; the configuration input of Diagnostic Management. | [Diagnostics Part 1, 2.8](DiagnosticsPart1.md#28-the-diagnostic-extract-dext-and-the-manifest) |
| Diagnostic mapping | A model element that connects a DEXT element, such as a DID or routine, to a port of an executable and a process. | [Diagnostics Part 1, 14.11](DiagnosticsPart1.md#1411-diagnostic-mappings-ports-and-processes) |
| Diagnostic Monitor | The logic, usually in an application, that tests for a fault and reports the result to a diagnostic event. | [Diagnostics Part 2, 2.1](DiagnosticsPart2.md#21-monitor-diagnostic-event-dtc) |
| Diagnostic Server instance | One UDS server inside Diagnostic Management; there is one per Diagnostic Contribution Set. | [Diagnostics Part 1, 2.3](DiagnosticsPart1.md#23-diagnostic-server-instances-and-software-clusters) |
| Diagnostic Session | A mode of a Diagnostic Conversation that unlocks diagnostic services, switched with DiagnosticSessionControl (`0x10`). | [Diagnostics Part 1, 2.5](DiagnosticsPart1.md#25-sessions-security-levels-and-access-permissions) |
| Diagnostic Trouble Code (DTC) | A code that identifies a detected fault in the vehicle. Diagnostic Management stores it together with snapshot and extended data. | [Diagnostics Part 2, 8.1](DiagnosticsPart2.md#81-dtc-format-and-groups) |
| E2E Profile | A standardized combination of E2E mechanisms and header layout, for example `PROFILE_04`. | [Secure Communication, 10.2](SecureAndSafeCommunication.md#102-profiles-available-on-the-adaptive-platform) |
| E2E Protection | Safety mechanisms that detect corrupted, lost, repeated or delayed data between sender and receiver. An E2E profile defines the exact mechanism. | [Secure Communication](SecureAndSafeCommunication.md#10-e2e-profiles-and-the-e2e-header) |
| E2E State Machine | The function that turns the history of E2E checks into the states VALID, INVALID, INIT or NODATA, using windows and thresholds. | [Secure Communication, 12](SecureAndSafeCommunication.md#11-the-e2e-state-machine) |
| ECU | Electronic Control Unit: an embedded computer with at least one CPU and its peripherals in one housing, connected to vehicle networks, sensors and actuators. | [Platform Overview, 2.1](PlatformOverview.md#21-the-problem-the-classic-platform-solves) |
| ECU ID | The identifier of the ECU or machine in log and trace messages, defined by `DltEcu.ecuId`. | [Log and Trace, 5.1](LogAndTrace.md#51-ecu-id) |
| Element (Persistency) | A key-value pair of a Key-Value Storage or a file of a File Storage. | [Persistency, 2.1](Persistency.md#21-storages-and-elements) |
| Error | The inability of an assumed-bug-free API function to fulfill its purpose; recoverable; returned in `Result` or `Future` | [Core, 6.2](CoreAndGeneral.md#62-errors-are-returned-never-thrown) |
| Error code value | The integer part of an `ErrorCode`, from the enumeration of its domain | [Core, 7.1](CoreAndGeneral.md#71-errorcode-value-domain-and-support-data) |
| Error domain | The context of a set of error codes: identifier, name, messages, exception type | [Core, 7.3](CoreAndGeneral.md#73-errordomain-identity-name-and-message) |
| Error domain identifier | The unique 64-bit number that identifies an error domain | [Core, 7.4](CoreAndGeneral.md#74-error-domain-identifiers) |
| ErrorRecoveryTable | The rules of a StateMachine that map an error code to the StateMachine State to enter; it must contain an `ANY` entry. | [SM, 2.4](StateManagement.md#24-transitionrequesttable-and-errorrecoverytable) |
| Event (service element) | A message that a service provider sends to all subscribed consumers. | [CM, 7](CommunicationManagement.md#7-events-and-triggers) |
| Event Memory | The part of Diagnostic Management that stores DTCs and their data. | [Diagnostics Part 2, 9.1](DiagnosticsPart2.md#91-primary-and-user-defined-memories) |
| Eventgroup | On SOME/IP, a set of events and field notifiers that a client subscribes to together. | [Network Bindings](NetworkBindings.md) |
| Executable | A program file with exactly one `main()` function. | [EM, 2.1](ExecutionManagement.md#21-software-units-from-application-to-os-process), [Manifests, 5.3](Manifests.md#53-the-executable-and-its-root-prototype) |
| Execution Budget | In the Classic OS, the statically configured maximum execution time of a task or interrupt handler, enforced by timing protection. | [Platform Overview, 2.3.2](PlatformOverview.md#232-how-the-classic-platform-achieves-it) |
| Execution Dependency | "Start me only after process X is *Running* (or has *Terminated*)." It controls order, not whether a process starts. | [EM, 6](ExecutionManagement.md#6-execution-dependencies-startup-and-shutdown-ordering) |
| Execution Manifest | The configuration of an Executable's processes: states, arguments, scheduling, dependencies, timeouts and more. | [EM, 4.1](ExecutionManagement.md#41-where-the-configuration-lives), [Manifests, 8](Manifests.md#8-the-execution-manifest) |
| Execution State | The state of a process as seen by the process itself. The only reportable value is `kRunning`. | [EM, 5.1](ExecutionManagement.md#51-two-views-of-a-process-execution-state-and-process-state) |
| ExecutionError | A number (`std::uint32_t`) that identifies why a process failed. It is configured per process, with the default `1`. | [EM, 14.6](ExecutionManagement.md#146-executionerrorevent-and-executionerror) |
| ExecutionErrorEvent | The event that tells State Management which Function Group failed, together with its `ExecutionError`. | [EM, 14.6](ExecutionManagement.md#146-executionerrorevent-and-executionerror) |
| Executor | An `ara::core` object that runs callables asynchronously in a thread-safe context | [Core, 11.12](CoreAndGeneral.md#1112-executor) |
| Explicitly aborting an Operation | Immediately aborting an API call by calling `ara::core::Abort`, usually after a Violation | [Core, 10.3](CoreAndGeneral.md#103-abort) |
| Failed Default Allocation | The default memory allocation of the framework cannot satisfy a request; handled like a Non-Standardized Violation | [Core, 6.4](CoreAndGeneral.md#64-corruptions-and-failed-default-allocations) |
| Failure transparent | A function that always succeeds: no errors, `noexcept`, no `Result` or `Future` | [Core, 2.5](CoreAndGeneral.md#25-thread-safety-and-recoverability) |
| Field | A service element that holds a value. Consumers can get it, set it and be notified when it changes. | [CM, 9](CommunicationManagement.md#9-fields) |
| File Storage | A Persistency storage location in which a process can create files, like a directory without subdirectories. | [Persistency, 7](Persistency.md#7-file-storages) |
| Find service handle | The `ara::com::FindServiceHandle` that identifies a running `StartFindService` search, used to stop it. | [CM, 6.4](CommunicationManagement.md#64-finding-continuously) |
| Fire-and-forget method | A method without out arguments and without errors; the caller gets no answer. | [CM, 8.5](CommunicationManagement.md#85-fire-and-forget-methods) |
| Firewall | The functional cluster that configures the filtering of network traffic according to rules from the Machine Manifest. | IDSM and Firewall |
| Forwarding header | `ara/core/core_fwd.h`, which declares most `ara::core` types without defining them | [Core, 12.2](CoreAndGeneral.md#122-header-files) |
| Foundation | The AUTOSAR standard that holds what the Classic and the Adaptive Platform have in common, such as the protocols and the glossary. | [Main page](../README.md#how-autosar-documents-are-named) |
| Foundation (standard) | The AUTOSAR standard that contains the artifacts common to the Classic and the Adaptive Platform, such as protocols and common requirements, to ensure interoperability. | [Platform Overview, 1.2](PlatformOverview.md#12-three-autosar-standards-adaptive-classic-and-foundation) |
| Freedom From Interference | The guarantee that a faulty part of the system cannot disturb unrelated parts. | [EM, 11.1](ExecutionManagement.md#111-why-resource-management-matters) |
| Freshness Value | A counter or time stamp that makes each SecOC message unique in time and prevents replay. | [Secure Communication, 2.3](SecureAndSafeCommunication.md#23-authenticator-mac-freshness-value-and-truncation) |
| Freshness Value Manager (FVM) | The plug-in that provides and synchronizes SecOC freshness values; on the Adaptive Platform the platform extension `apext::com::secoc::FVM`. | [Secure Communication, 7.8](SecureAndSafeCommunication.md#78-the-freshness-value-manager-plug-in) |
| Function Group | A named group of processes that are switched on and off together. | [EM, 7.2](ExecutionManagement.md#72-function-groups-and-function-group-states), [Manifests, 7.5](Manifests.md#75-function-groups-and-their-states) |
| Function Group State | One mode of a Function Group, which defines the set of processes that run. | [EM, 7.2](ExecutionManagement.md#72-function-groups-and-function-group-states) |
| Functional address | A diagnostic target address that addresses several servers at once. | [Diagnostics Part 1, 2.2](DiagnosticsPart1.md#22-diagnostic-client-diagnostic-server-and-addresses) |
| Functional Cluster | A logical group of platform functionality, such as Execution Management, with its own specification and API. | [Main page](../README.md#functional-clusters-and-their-guides), [Platform Overview, 5](PlatformOverview.md#5-the-functional-clusters-of-r25-11) |
| FunctionGroupPortMapping | The manifest element that allows one State Management process to control one Function Group. | [EM, 12.6](ExecutionManagement.md#126-function-group-access-control) |
| Getter | The accessor of a field with which a consumer reads its current value (`Get`). | [CM, 9.3](CommunicationManagement.md#93-get-and-the-optional-gethandler) |
| Global Supervision | A group of supervisions of processes of one Function Group, with one aggregated status. | [PHM, 9.4](PlatformHealthManagement.md#94-grouping-supervisions-into-global-supervisions) |
| Global Supervision Status | The worst of the Elementary Supervision Statuses of a Global Supervision; additionally `kSTOPPED`. | [PHM, 9.2](PlatformHealthManagement.md#92-global-supervision-status) |
| Graceful Degradation | Continuing to operate with reduced functionality when errors occur, instead of failing completely. In the running example, `ADAS.Degraded`. | SM, PHM |
| Handle | A `{<SI>}Proxy::HandleType` returned by service discovery; it identifies one found service instance and is used to create a proxy. | [CM, 6.5](CommunicationManagement.md#65-from-handle-to-proxy) |
| Health Monitoring | Supervision of the software behavior for correct timing and sequence; the Foundation concept shared by the Classic and the Adaptive Platform. | [PHM, 2.6](PlatformHealthManagement.md#26-health-monitoring-and-phm-who-specifies-what) |
| Hypervisor | Low-level software that runs several virtual machines on one physical machine. | [Platform Overview, 4.3](PlatformOverview.md#43-the-machine) |
| I-PDU | A protocol data unit that carries one or more signals between ECUs. | [Network Bindings](NetworkBindings.md) |
| Identity and Access Management | The framework that controls which Adaptive Applications may access which service interfaces and platform interfaces. | [Main page](../README.md#functional-clusters-and-their-guides), IAM |
| Identity Information | The properties of an application on which access control decisions are based. | IAM |
| ImpactedByUpdate | The marking of a StateMachine whose Function Groups are being updated; it blocks transition requests and recovery. | [SM, 2.7](StateManagement.md#27-update-session-terms) |
| Implementation-defined behavior | Behavior chosen and documented by the platform implementation; vendor-specific behavior is the same | [Core, 2.4](CoreAndGeneral.md#24-undefined-implementation-defined-and-vendor-specific-behavior) |
| Imposition time | The point in the workflow at which a constraint must hold, for example `IT_BefAraApiGen` or `IT_Mani`. | [Manifests, 2.5](Manifests.md#25-constraints-and-imposition-times) |
| Initial Process | A process with management rights, for example to determine the exit status, over all processes of the Adaptive Platform. The OS shall allow starting EM as the Initial Process. | [Platform Overview, 7.4](PlatformOverview.md#74-processes-threads-and-isolation) |
| Initial State (StateMachine) | The StateMachine State that a StateMachine enters when it is started without a parameter (`ModeDeclarationGroup.initialMode`). | [SM, 2.2](StateManagement.md#22-statemachine-statemachine-state-and-initial-state) |
| Instance reference | A reference that navigates from a base through context elements to a target in an instance tree. Written as `-IREF`. | [Manifests, 2.2](Manifests.md#22-types-prototypes-and-instance-references), [Manifests, 3.5](Manifests.md#35-instance-references--iref) |
| InstanceIdentifier | The binding-specific identifier of one service instance, `ara::com::InstanceIdentifier`. | [CM, 6.7](CommunicationManagement.md#67-instancespecifier-instanceidentifier-and-resolveinstanceids) |
| InstanceSpecifier | A path in the model that identifies a configured element, such as a port, from code. Example: `/fusion/Root/CameraRPort`. | [Manifests, 9.4](Manifests.md#94-from-port-to-instancespecifier), [Core, 11.11](CoreAndGeneral.md#1111-instancespecifier) |
| Integrity | The property that data has not been changed or destroyed in an unauthorized way. | Cryptography |
| Inter-Functional-Cluster (IFC) interface | An interface that one functional cluster provides to other clusters. Not part of ARA and not a formal requirement; described in an annex of the SWS. | [Platform Overview, 6.2](PlatformOverview.md#62-how-clusters-talk-to-each-other) |
| Intrusion Detection System | The system that detects, records and reports security events. It consists of security sensors, the IdsM and the IdsR. | IDSM and Firewall |
| Intrusion Detection System Manager | The functional cluster that collects security events, qualifies them by rules, and stores or forwards the qualified events. | IDSM and Firewall |
| Key-Value Storage | A Persistency storage location that holds key-value pairs. | [Persistency, 6](Persistency.md#6-key-value-storages) |
| Language Binding | How a service is presented to the programmer, for example as generated C++ proxy and skeleton classes. | [CM, 5](CommunicationManagement.md#5-from-service-interface-to-generated-code) |
| Library-based | A functional cluster whose interface library is linked into the application and communicates with the cluster directly. | [Platform Overview, 4.2](PlatformOverview.md#42-library-based-and-service-based-functional-clusters) |
| Local cache | The memory that `Subscribe(maxSampleCount)` reserves in the consumer for the samples of one event or field. | [CM, 7.3](CommunicationManagement.md#73-receiving-samples) |
| Log and Trace | The functional cluster that lets applications and clusters send log messages to the network, a console or a file. | [Log and Trace, 1.1](LogAndTrace.md#11-what-is-log-and-trace) |
| Log and Trace Extract | The part of the model that describes the sources (`DltEcu`, `DltApplication`, `DltContext`) and the modeled messages. | [Log and Trace, 2.6](LogAndTrace.md#26-the-log-and-trace-extract) |
| Log channel | A named output path of the DLT protocol, for example one Ethernet connection. | [Log and Trace, 2.5](LogAndTrace.md#25-sinks-and-log-channels) |
| Log level | The severity of a log message: Fatal, Error, Warn, Info, Debug or Verbose. | [Log and Trace, 9.1](LogAndTrace.md#91-the-six-levels-and-koff) |
| Log sink | A destination of log messages: console, file, DLT network channel or ARTI, modeled as `DltLogSink`. | [Log and Trace, 11](LogAndTrace.md#10-output-sinks) |
| Logger | The `ara::log` object that represents one context of one process; created by `CreateLogger`. | [Log and Trace, 2.3](LogAndTrace.md#23-logger-and-logstream) |
| Logging backend | The implementation of the LT protocol behind the `ara::log` library, for example a DLT daemon. | [Log and Trace, 1.4](LogAndTrace.md#14-log-and-trace-and-ara) |
| Logging client | An external tool that receives and stores log messages and can control the ECU. | [Log and Trace, 2.8](LogAndTrace.md#28-logging-client-and-control-messages) |
| Logical Supervision | A PHM supervision that checks the order of checkpoints against a graph of allowed transitions. | [PHM, 8](PlatformHealthManagement.md#8-logical-supervision) |
| LogStream | The temporary `ara::log` object that collects the arguments of one non-modeled message. | [Log and Trace, 7.8](LogAndTrace.md#78-keeping-a-logstream-flush-and-scope) |
| M out of N | Redundancy with N copies of which at least M must be identical when read; the only redundancy type that can repair corrupted data. | [Persistency, 9.3](Persistency.md#93-m-out-of-n-and-storage-locations) |
| Machine | The environment one Adaptive Platform instance runs on: an ECU, a virtual machine or a container. | [EM, 2.1](ExecutionManagement.md#21-software-units-from-application-to-os-process), [Manifests, 7.3](Manifests.md#73-the-machine) |
| Machine Design | The design-time placeholder of an Adaptive Machine in the system, the counterpart of the Classic `EcuInstance`. | [Manifests, 7.2](Manifests.md#72-machine-design) |
| Machine Manifest | The machine-wide configuration. | [EM, 4.1](ExecutionManagement.md#41-where-the-configuration-lives), [Manifests, 7](Manifests.md#7-system-design-machine-design-and-the-machine-manifest) |
| Machine State | A state of the Function Group `MachineFG`. | [EM, 7.3](ExecutionManagement.md#73-machinefg-and-machine-states) |
| MachineFG | The mandatory Function Group that controls the machine lifecycle. | [EM, 7.3](ExecutionManagement.md#73-machinefg-and-machine-states) |
| Manifest | A piece of AUTOSAR model that configures the platform or the software deployed on it, and that is installed together with that software. | [EM, 2.2](ExecutionManagement.md#22-manifests), [Manifests, 1.1](Manifests.md#11-what-is-a-manifest) |
| Message Authentication Code | A short value computed with a secret key that proves the integrity and authenticity of data. | Cryptography |
| Message ID | The 32-bit identifier of a modeled message on the wire. | [Log and Trace, 8.5](LogAndTrace.md#85-message-ids) |
| Meta-model | The AUTOSAR vocabulary (M2) in which models (M1) are written; the XML Schema is generated from it. | [Manifests, 2.1](Manifests.md#21-meta-levels-meta-model-model-and-xml-schema) |
| MetaInfo | `ara::diag::MetaInfo`: information about the current diagnostic request, such as the tester's address, passed to every provider call. | [Diagnostics Part 1, 13.2](DiagnosticsPart1.md#132-metainfo-who-is-asking) |
| Method | A service element that a consumer calls and the provider executes, possibly returning a result. | [CM, 8](CommunicationManagement.md#8-methods) |
| Method Call Processing Mode | How a skeleton executes incoming method calls: `kEvent` (concurrent), `kEventSingleThread` (sequential) or `kPoll` (on request of the provider). | [CM, 8.7](CommunicationManagement.md#87-method-call-processing-modes) |
| Minimum Send Interval | The configurable minimum time between two transmissions of one event, trigger, field update, method call, `Get` or `Set`. | [CM, 11.4](CommunicationManagement.md#114-the-minimum-send-interval) |
| Modeled message | A log message whose static parts are defined in the model, so that only the dynamic parts are sent ("non-verbose" in DLT). | [Log and Trace, 8](LogAndTrace.md#8-modeled-messages) |
| Modelled Process | The manifest description of one way to run an Executable (the meta-class `Process`). | [EM, 2.1](ExecutionManagement.md#21-software-units-from-application-to-os-process) |
| monitorMode | Trusted-platform mode in which failed checks are logged, but software is still launched. | [EM, 12.3](ExecutionManagement.md#123-launch-behavior-modes) |
| Multi-binding | One proxy or skeleton class communicating over several transports or protocols, for example one instance offered over local IPC and SOME/IP. | [CM, 13.3](CommunicationManagement.md#133-multi-binding) |
| Multicast Threshold | The number of subscribers from which SOME/IP sends the events of an eventgroup by multicast instead of unicast. | [Network Bindings](NetworkBindings.md) |
| Named constructor | A static `noexcept` function, usually `Create`, that constructs an object and returns a `Result` | [Core, 10.2](CoreAndGeneral.md#102-building-without-exceptions) |
| Nested recovery | A new error reported for a StateMachine while its previous recovery is still in progress. | [SM, 8.4](StateManagement.md#84-nested-recovery) |
| Network Binding | How a service is represented on a specific transport, for example SOME/IP or DDS: serialization and protocol. | [Network Bindings](NetworkBindings.md) |
| No rollback semantics | A recoverability class: the failed call may have had side effects; invariants hold | [Core, 6.6](CoreAndGeneral.md#66-recoverability-classes) |
| Non-modeled message | A log message that is built and sent completely at run time ("verbose" in DLT). | [Log and Trace, 7](LogAndTrace.md#7-writing-non-modeled-messages) |
| Non-reporting Process | A process that does not report its Execution State and is considered *Running* immediately after creation. | [EM, 5.4](ExecutionManagement.md#54-non-reporting-processes-and-the-companion-pattern) |
| Non-Standardized Violation | A Violation specific to an implementation; ends with `Abort` or a non-`ara::core` exception | [Core, 6.3](CoreAndGeneral.md#63-violations-fail-early) |
| Non-verbose mode | The DLT form in which a message carries only a message ID and its variable data. | [Log and Trace, 11.5](LogAndTrace.md#115-non-verbose-payload) |
| Notifier | The part of a field that notifies subscribers of value changes, like an event. | [CM, 9.5](CommunicationManagement.md#95-subscribing-to-field-notifications) |
| NRC | Negative response code: the one-byte reason in a negative UDS response. | [Diagnostics Part 1, 2.1](DiagnosticsPart1.md#21-uds-in-one-page) |
| Off (state) | The mandatory initial state of every Function Group. No processes run in it. | [EM, 7.2](ExecutionManagement.md#72-function-groups-and-function-group-states) |
| Operating System Interface | The part of ARA that defines the operating system services available to Adaptive Applications (PSE51 and the C++ standard library), and the requirements on the operating system. | [Platform Overview, 7](PlatformOverview.md#7-the-operating-system-interface) |
| Operation Cycle | A period, such as one drive cycle, that Diagnostic Management uses to evaluate and age DTCs. | [Diagnostics Part 2, 7.1](DiagnosticsPart2.md#71-operation-cycles) |
| OSEK OS | The event-triggered automotive operating system with fixed priority-based scheduling, standardized as ISO 17356-3, on which the Classic OS is based. | [Platform Overview, 2.2](PlatformOverview.md#22-why-the-classic-design-fits-its-problem) |
| OTA Client | An Adaptive Application that connects the vehicle's update management to the backend. | UCM |
| P2, P2* | Server response times of a diagnostic session: until the first response, and between response-pending messages. | [Diagnostics Part 1, 7.6](DiagnosticsPart1.md#76-response-pending-p2-and-p2-and-the-pending-limit) |
| Partial model | The content of one ARXML file; it shall validate against the schema but need not satisfy all constraints. | [Manifests, 3.7](Manifests.md#37-many-files-one-model) |
| Partial Network | A subset of the nodes of a network that can be woken up and put to sleep independently of the rest. | NM/TSync/RDS |
| Partial SOME/IP Header | The first 8 bytes of a SOME/IP header (Message ID and Length) in front of a signal-based PDU on Ethernet. | [Network Bindings](NetworkBindings.md) |
| Persistency user | An Adaptive Application or a functional cluster that uses Persistency. | [Persistency, 2.3](Persistency.md#23-persistency-users-and-process-local-data) |
| Physical address | A diagnostic target address of exactly one server. | [Diagnostics Part 1, 2.2](DiagnosticsPart1.md#22-diagnostic-client-diagnostic-server-and-addresses) |
| Planned Dynamics | The principle that dynamic behavior is allowed during development but can be limited to defined ways for production. | [Main page](../README.md#the-adaptive-platform-in-one-page), [Platform Overview, 2.7](PlatformOverview.md#27-determinism-on-the-adaptive-platform) |
| Platform extension interface | A standardized interface through which the OEM extends the platform: a callout, a callback or a plugin. | [Platform Overview, 3.5](PlatformOverview.md#35-standardized-and-non-standardized-parts) |
| PLATFORM_CORE | The category of the SoftwareCluster that carries `MachineFG`. There is exactly one per machine. | [EM, 7.3](ExecutionManagement.md#73-machinefg-and-machine-states) |
| Policy Decision Point | The logic of IAM that decides whether a request is allowed. | IAM |
| Policy Enforcement Point | The logic of IAM that enforces the decision of the Policy Decision Point. | IAM |
| PortPrototype | A port of a software component, provided (`PPortPrototype`) or required (`RPortPrototype`), typed by a port interface. | [Manifests, 5.2](Manifests.md#52-ports-how-software-talks-to-the-outside) |
| Pre-mapping | Loading a process completely before it runs, to avoid demand-loading delays. | [EM, 11.4](ExecutionManagement.md#114-process-level-memory-settings) |
| Process | The running OS process that EM creates from a Modelled Process. | [EM, 2.1](ExecutionManagement.md#21-software-units-from-application-to-os-process) |
| Process State | The state of a process as tracked by EM: `Idle`, `Starting`, `Running`, `Terminating`, `Terminated`. | [EM, 5.1](ExecutionManagement.md#51-two-views-of-a-process-execution-state-and-process-state) |
| ProcessDesign | The design-time stand-in for a process that will be defined in the Execution Manifest. | [Manifests, 5.4](Manifests.md#54-process-design-a-stand-in-for-a-future-process) |
| Processed Manifest | A manifest converted into a platform-specific format for fast reading at startup. | [EM, 4.1](ExecutionManagement.md#41-where-the-configuration-lives), [Manifests, 11.8](Manifests.md#118-how-the-platform-consumes-manifests-at-run-time) |
| Profile check status | The result of the E2E check of one received sample, `ara::com::e2e::ProfileCheckStatus`. | [CM, 12.2](CommunicationManagement.md#122-events-check-status-per-sample-state-per-event) |
| Proxy (Service Proxy) | The generated class with which a consumer uses a service, as if it were a local object. | [CM, 2.2](CommunicationManagement.md#22-skeleton-and-proxy) |
| PSE51 | The minimal real-time POSIX profile. Adaptive Applications may use only this part of the OS API. | [Platform Overview, 7.2](PlatformOverview.md#72-pse51-for-applications-full-posix-for-the-platform) |
| Qualified Security Event (QSEv) | A security event that the IdsM has filtered and qualified by its rules. | IDSM and Firewall |
| Raw Data Stream | Unstructured bytes exchanged with an external device, such as a sensor, over TCP, UDP or IEEE 1722. It is a functional cluster of its own, no longer part of Communication Management. | NM/TSync/RDS |
| Rebind | The assignment behavior of `Optional<T&>` and `Result<T&>`: the object refers to the new target afterwards | [Core, 11.5](CoreAndGeneral.md#115-optional-and-variant) |
| Receive handler | A callback that Communication Management calls when new event data, field notifications or triggers have arrived. | [CM, 7.5](CommunicationManagement.md#75-polling-or-event-driven-reception) |
| Recommended package | The package name that the meta-model proposes for an element kind, for example `ServiceInterfaces`. | [Manifests, 3.2](Manifests.md#32-packages-short-names-and-paths) |
| Recovery (Persistency) | Best-effort restoration of a corrupted storage or element; the result may be current, outdated or initial data and must be validated. | [Persistency, 9.6](Persistency.md#96-recover-or-reset) |
| Recovery notification | The call of State Management's `RecoveryHandler` when a Global Supervision expires, and its configuration. | [PHM, 13](PlatformHealthManagement.md#12-recovery-notifying-state-management) |
| Redundancy (Persistency) | CRCs, hash values or copies that Persistency stores to detect and possibly repair corrupted data. | [Persistency, 9.1](Persistency.md#91-detect-or-repair) |
| Registry | An internal component that gives other clusters access to manifest information. Not used by applications. | [Platform Overview, 5.7](PlatformOverview.md#57-configuration), [Manifests, 11.8](Manifests.md#118-how-the-platform-consumes-manifests-at-run-time) |
| Reporting Process | A process that reports `kRunning` using `ExecutionClient`. This is the normal case. | [EM, 2.4](ExecutionManagement.md#24-process-flavors) |
| RequestedState | The target state of a transition. | [EM, 8.1](ExecutionManagement.md#81-vocabulary) |
| Requirement ID | The unique identifier of a requirement in a specification, such as `[SWS_EM_01050]`. | [Main page](../README.md#requirement-and-constraint-ids) |
| Reset (Persistency) | Returning a storage or an element to the state after installation with the current target configuration. | [Persistency, 9.6](Persistency.md#96-recover-or-reset) |
| ResourceGroup | A group of processes that share a CPU limit and a memory limit. | [EM, 11.3](ExecutionManagement.md#113-resourcegroup-group-level-limits) |
| Response Pending | The NRC `0x78`, sent by the server while it needs more time to answer. | [Diagnostics Part 1, 7.6](DiagnosticsPart1.md#76-response-pending-p2-and-p2-and-the-pending-limit) |
| Response time | The time between a task becoming ready and generating its response, including all preemptions. | [Platform Overview, 2.3.1](PlatformOverview.md#231-what-determinism-means) |
| Rollback | Returning to the previous software version after an update. | UCM |
| Rollback semantics | A recoverability class: the failed call has no negative side effects; retrying is safe | [Core, 6.6](CoreAndGeneral.md#66-recoverability-classes) |
| RootSwComponentPrototype | The root of the component hierarchy inside an Executable; its short name is part of every `InstanceSpecifier`. | [Manifests, 5.3](Manifests.md#53-the-executable-and-its-root-prototype) |
| Routine | A function in the ECU that a tester starts, stops or queries with the UDS service RoutineControl. | [Diagnostics Part 1, 11.1](DiagnosticsPart1.md#111-start-stop-and-request-results) |
| Runnable (Runnable Entity) | In the Classic Platform, a part of a software component that the RTE can start and that is executed in the context of an OS task. | [Platform Overview, 2.3.2](PlatformOverview.md#232-how-the-classic-platform-achieves-it) |
| Runtime Environment (RTE) | In the Classic Platform, the generated layer between the application software components and the Basic Software. | [Platform Overview, 2.2](PlatformOverview.md#22-why-the-classic-design-fits-its-problem) |
| S2R Hub | The part of State Management that asks the S2R Satellites to enter or leave Suspend Mode and then tells the OS to suspend. | [SM, 2.8](StateManagement.md#28-suspend-to-ram-terms) |
| S2R Satellite | An object in an S2R-Aware application that registers with the S2R Hub and is notified before suspend and after wake-up. | [SM, 2.8](StateManagement.md#28-suspend-to-ram-terms) |
| S3 timer | Session timeout that returns a silent tester to the default session (5000 ms if not configured). | [Diagnostics Part 1, 8.1](DiagnosticsPart1.md#81-diagnosticsessioncontrol-and-the-s3-timer) |
| Safe Translation | A Signal-to-Service translation that preserves end-to-end protection (`safeTranslation`). | [Secure Communication, 14.1](SecureAndSafeCommunication.md#141-safetranslation-and-securetranslation) |
| Safety Element out of Context (SEooC) | A safety element developed without a specific vehicle context, based on assumptions; at best, the architecture of the Adaptive Platform can be considered one. | [Platform Overview, 8.3](PlatformOverview.md#83-safety) |
| SampleAllocateePtr | The smart pointer to memory that a provider gets from `Allocate()` and hands over with `Send`. | [CM, 7.1](CommunicationManagement.md#71-sending-an-event) |
| SamplePtr | The smart pointer, similar to `std::unique_ptr`, through which a consumer accesses one read-only sample. | [CM, 7.4](CommunicationManagement.md#74-sampleptr-who-owns-a-sample) |
| ScheduleTable | In the Classic OS, a statically defined set of expiry points that activate tasks or set events at fixed offsets. | [Platform Overview, 2.3.2](PlatformOverview.md#232-how-the-classic-platform-achieves-it) |
| Secure Channel | A communication channel that provides at least integrity and authenticity, and authenticates at least one side. | [Secure Communication](SecureAndSafeCommunication.md#22-secure-channel-and-security-association), Cryptography |
| Secured I-PDU | A message with SecOC authentication information: the authentic message, an optional freshness value and the authenticator. | [Secure Communication, 7.2](SecureAndSafeCommunication.md#72-the-secured-message-byte-by-byte) |
| Security Event | An event related to the security of the ECU that should be reported for later analysis. | IDSM and Firewall |
| Security Level (diagnostics) | A level of a Diagnostic Conversation unlocked with SecurityAccess (`0x27`) by a seed-and-key exchange. | [Diagnostics Part 1, 8.2](DiagnosticsPart1.md#82-securityaccess-seed-and-key-aradiagsecurityaccess) |
| Self-terminating Process | A process that is allowed to exit on its own, typically a one-shot job. | [EM, 5.6](ExecutionManagement.md#56-self-terminating-processes) |
| Server | A software entity that provides services to clients. | [CM, 2.1](CommunicationManagement.md#21-service-interface-service-instance-provider-and-consumer) |
| Service | Functionality with a published interface and behavior that a provider offers to consumers. | [CM, 2.1](CommunicationManagement.md#21-service-interface-service-instance-provider-and-consumer) |
| Service contract version | The `majorVersion` and `minorVersion` of a service interface; an incompatible change increases the major version. | [CM, 6.8](CommunicationManagement.md#68-service-contract-versioning) |
| Service Discovery | The Communication Management mechanism with which applications find each other's services. It is the preferred way to sequence applications. | [EM, 6.6](ExecutionManagement.md#66-prefer-service-discovery-for-applications), [CM, 6](CommunicationManagement.md#6-service-discovery-offering-and-finding-services) |
| Service Instance | One concrete provision of a service interface, with its own identity. | [CM, 2.1](CommunicationManagement.md#21-service-interface-service-instance-provider-and-consumer) |
| Service Instance Manifest | The configuration of how service-oriented communication is deployed on the network, including E2E, security and logging settings. | [EM, 4.1](ExecutionManagement.md#41-where-the-configuration-lives), [Manifests, 9](Manifests.md#9-the-service-instance-manifest-and-the-instancespecifier), [Network Bindings](NetworkBindings.md) |
| Service Interface | The definition of a service: its events, methods and fields. | [CM, 2.1](CommunicationManagement.md#21-service-interface-service-instance-provider-and-consumer) |
| Service Registry | The part of Communication Management with which providers register their services and consumers find them. | [CM, 3.3](CommunicationManagement.md#33-service-discovery-inside-the-machine) |
| Service-based | A functional cluster that offers its functions as services through Communication Management. | [Platform Overview, 4.2](PlatformOverview.md#42-library-based-and-service-based-functional-clusters) |
| Service-Oriented Communication | Communication in which partners are not fixed at design time but are discovered and bound at run time. | [CM, 1.1](CommunicationManagement.md#11-what-is-communication-management) |
| ServiceInstanceToPortPrototypeMapping | The element that connects one port, in one process, to one service instance. | [Manifests, 9.3](Manifests.md#93-connecting-a-port-to-a-service-instance) |
| ServiceInterfaceDeployment | The representation of a service interface on one transport, for example its SOME/IP IDs. | [Manifests, 9.1](Manifests.md#91-service-interface-deployment) |
| Session Handling | Counting the Session ID of SOME/IP messages; active for requests, responses and segmented messages. | [Network Bindings](NetworkBindings.md) |
| Session ID | The identifier of one instance of a software component that runs several times. | [Log and Trace, 5.5](LogAndTrace.md#55-session-id) |
| Setter | The accessor of a field with which a consumer asks the provider to change its value (`Set`). | [CM, 9.4](CommunicationManagement.md#94-set-and-the-mandatory-sethandler) |
| Shared handle | `ara::per::SharedHandle`: the copyable owner of an open Key-Value Storage or File Storage. | [Persistency, 5.3](Persistency.md#53-sharedhandle-and-uniquehandle) |
| Shared state | The object shared by a `Promise` and its `Future` that holds the value or error | [Core, 9.1](CoreAndGeneral.md#91-future-and-promise-in-plain-words) |
| Short name | The identifier of a model element within its name space; a C identifier, unique case-insensitively. | [Manifests, 3.2](Manifests.md#32-packages-short-names-and-paths) |
| Signal | A piece of data, such as the vehicle speed, that is exchanged in signal-based communication, typically in a PDU on CAN. | [Network Bindings](NetworkBindings.md) |
| Signal-Based Network Binding | The binding of Communication Management that performs Signal-to-Service translation; variants Signal-Based SOME/IP, Signal-Based Static and Signal-Based IEEE1722 ACF. | [Network Bindings](NetworkBindings.md) |
| Signal-to-Service Translation | The standardized mapping between signal-based communication and service-oriented communication, in both directions. | [Network Bindings](NetworkBindings.md) |
| Skeleton (Service Skeleton) | The generated base class from which a provider implements a service and connects it to Communication Management. | [CM, 2.2](CommunicationManagement.md#22-skeleton-and-proxy) |
| SMControlApplication | The project-specific application that decides which StateMachine transitions to request; it also decides whether an update is allowed. | [SM, 2.6](StateManagement.md#26-smcontrolapplication) |
| Snapshot Record | Environmental data, such as the vehicle speed, that Diagnostic Management stores when a DTC occurs. | [Diagnostics Part 2, 9.3](DiagnosticsPart2.md#93-snapshot-records) |
| Software Cluster | The unit of deployment and update: a set of executables, manifests and data, which claims Function Groups. It is installed as one Software Package. The meta-class is `SoftwareCluster`. | [Running Example, 1.3](RunningExample.md#13-the-hpc-machine), [Manifests, 10.2](Manifests.md#102-software-cluster-the-uploadable-unit), UCM |
| Software Cluster Design | The OEM's design-level contract for a Software Cluster (meta-class `SoftwareClusterDesign`). | [Manifests, 10.1](Manifests.md#101-software-cluster-design-the-oems-contract) |
| Software Package | The unit that UCM installs: one Software Cluster plus the metadata to install it. It is digitally signed. | UCM, [Manifests, 10.3](Manifests.md#103-software-package-and-vehicle-package) |
| SOME/IP | An AUTOSAR protocol for service-oriented communication over IP, with its own service discovery (SOME/IP-SD). | [Network Bindings](NetworkBindings.md) |
| SOME/IP-TP | The segmentation of large SOME/IP messages over UDP. | [Network Bindings](NetworkBindings.md) |
| SOVD | Service-Oriented Vehicle Diagnostics, an ASAM standard for diagnostics over web technologies. | [Diagnostics Part 2, 2.7](DiagnosticsPart2.md#27-sovd-in-one-page) |
| Stack | An implementation of the Adaptive Platform standard by a platform vendor. | [Platform Overview, 1.3](PlatformOverview.md#13-what-the-standard-defines-and-what-it-leaves-open) |
| Standardized M1 model | Model content published by AUTOSAR in the top-level package `AUTOSAR`, for example `/AUTOSAR/StdTypes`. | [Manifests, 2.1](Manifests.md#21-meta-levels-meta-model-model-and-xml-schema) |
| Standardized Violation | A Violation defined by AUTOSAR, with a standardized DLT message | [Core, 6.3](CoreAndGeneral.md#63-violations-fail-early) |
| StartupConfig | A reusable set of start parameters for a process. | [EM, 13.5](ExecutionManagement.md#135-startupconfig) |
| State Management | The functional cluster that decides which Function Group States are requested. | [EM, 7.4](ExecutionManagement.md#74-division-of-responsibilities-sm-decides-em-executes), [SM, 1.1](StateManagement.md#11-what-is-state-management) |
| StateClientInterface | The port interface of the R-port through which State Management controls one Function Group (status draft in R25-11). | [EM, 13.10](ExecutionManagement.md#1310-state-management-access-stateclientinterface-and-functiongroupportmapping) |
| StateDependentStartupConfig | Links a process to a `StartupConfig` for a set of Function Group States, with dependencies and resources. | [EM, 13.4](ExecutionManagement.md#134-statedependentstartupconfig-and-executiondependency), [Manifests, 8.2](Manifests.md#82-state-dependent-startup-configuration) |
| StateMachine (State Management) | A configurable state machine of State Management that covers standard cases with little code. A project-specific application requests its transitions. | [SM, 2.2](StateManagement.md#22-statemachine-statemachine-state-and-initial-state) |
| StateMachine State | A state of a State Management StateMachine (a `ModeDeclaration`); entering it executes its ActionList. Not the same as a Function Group State. | [SM, 2.2](StateManagement.md#22-statemachine-statemachine-state-and-initial-state) |
| Static Service Connection | SOME/IP communication with pre-configured endpoints instead of service discovery. | [Network Bindings](NetworkBindings.md) |
| Storage header | The header that a logging client adds in front of each stored DLT message. | [Log and Trace, 11.9](LogAndTrace.md#119-storing-messages-in-files-the-storage-header) |
| strictMode | Trusted-platform mode in which software that fails a check is never launched. | [EM, 12.3](ExecutionManagement.md#123-launch-behavior-modes) |
| Subscription state | The state of a subscription: `kSubscribed`, `kNotSubscribed` or `kSubscriptionPending`. | [CM, 7.2](CommunicationManagement.md#72-subscribing-to-an-event) |
| Supervised Entity | A whole or a part of a software component type that is supervised; a collection of checkpoints. | [PHM, 2.1](PlatformHealthManagement.md#21-supervised-entity-checkpoint-and-supervised-entity-instance) |
| Supervised Entity Instance | One occurrence of a Supervised Entity, identified by its port in an executable and its process. | [PHM, 5.5](PlatformHealthManagement.md#55-multiple-instances-of-a-supervised-entity) |
| Supervised Process | A process that PHM supervises. EM informs PHM about its lifecycle. | [EM, 5.9](ExecutionManagement.md#59-synchronization-with-platform-health-management) |
| Supervision Mode | A state of the machine or a Function Group in which supervisions are performed with a specific set of parameters. | [PHM, 12](PlatformHealthManagement.md#11-supervision-modes-and-function-group-state-changes) |
| Support data value | Optional vendor-specific data inside an `ErrorCode`; ignored by comparisons | [Core, 7.1](CoreAndGeneral.md#71-errorcode-value-domain-and-support-data) |
| Suspend-to-RAM (S2R) | A low-power mode in which RAM keeps the system state while most of the machine is powered down, for a fast wake-up. | [SM, 2.8](StateManagement.md#28-suspend-to-ram-terms) |
| Target configuration | Model content whose scope is mostly local to one compute node, usually created during integration. Formerly called "deployment". | [Manifests, 1.2](Manifests.md#12-design-models-and-target-configuration) |
| Target Configuration version | The version of the deployed content of a storage (`PersistencyCommon.Version`); it decides between installation, update and roll-back. | [Persistency, 2.5](Persistency.md#25-contract-version-and-target-configuration-version) |
| Task (OS) | The smallest schedulable unit managed by the operating system; a thread in POSIX terms. | [Platform Overview, 7.10](PlatformOverview.md#710-os-tracing-with-arti) |
| Termination handler | The callback that `ExecutionClient` invokes, in a background thread, when `SIGTERM` arrives. | [EM, 5.5](ExecutionManagement.md#55-terminating-a-process) |
| Temporary storage | The in-memory working copy of an open Key-Value Storage; changes become persistent only with `SyncToStorage`. | [Persistency, 6.1](Persistency.md#61-the-temporary-storage) |
| Thread-safe | Callable concurrently on the same object by several threads without synchronization by the caller | [Core, 12.6](CoreAndGeneral.md#126-thread-safety) |
| Threshold | The minimum log level that a logger lets through. | [Log and Trace, 2.1](LogAndTrace.md#21-log-message-log-level-and-threshold) |
| Time Base | A synchronized time, such as `VehicleTime`, that Time Synchronization offers to applications. | NM/TSync/RDS |
| Timing protection | In the Classic OS, the run-time enforcement of statically configured execution budgets, lock budgets and minimum inter-arrival times. | [Platform Overview, 2.3.2](PlatformOverview.md#232-how-the-classic-platform-achieves-it) |
| Trace status | The on/off switch for trace messages of a context, controlled by control messages. | [Log and Trace, 9.5](LogAndTrace.md#95-trace-status) |
| Trace switch | The compile-time routing of a modeled message to the logger, ARTI, both or nowhere, configured by `TraceSwitchConfig`. | [Log and Trace, 14.3](LogAndTrace.md#143-the-trace-switch) |
| TransitionRequestTable | The rules of a StateMachine that map a requested value and the current StateMachine State to the next StateMachine State. | [SM, 2.4](StateManagement.md#24-transitionrequesttable-and-errorrecoverytable) |
| Transport fault condition | A transport-related fault reported to a handler: sample rejected, deadline missed or sample lost. | [CM, 11.5](CommunicationManagement.md#115-transport-fault-conditions) |
| Transport Protocol Handler | A plug-in of Diagnostic Management that implements a UDS transport protocol such as DoIP. | [Diagnostics Part 1, 5.1](DiagnosticsPart1.md#51-transport-protocol-handlers-and-the-transport-protocol-manager) |
| Trigger | A service element like an event, but without data. | [CM, 7.7](CommunicationManagement.md#77-triggers) |
| Trust Anchor | The root of trust, for example a public key in protected memory, from which all authenticity checks derive. | [EM, 12.1](ExecutionManagement.md#121-trusted-platform-basics) |
| Trusted Platform | A platform on which only software of verified integrity and authenticity runs. | [EM, 12.1](ExecutionManagement.md#121-trusted-platform-basics) |
| UDS | Unified Diagnostic Services, the diagnostic protocol of ISO 14229 that testers use. | [Diagnostics Part 1, 2.1](DiagnosticsPart1.md#21-uds-in-one-page) |
| Undefined behavior | No guarantees at all, as in the C++ standard; not detected, unlike a Violation | [Core, 2.4](CoreAndGeneral.md#24-undefined-implementation-defined-and-vendor-specific-behavior) |
| Undefined Function Group State | A Function Group state that is not one of the modelled states: during a transition, after a failed transition, or after a crash. | [EM, 10.3](ExecutionManagement.md#103-undefined-function-group-state) |
| Unexpected Termination | A process ended without a justified reason, for example without being asked to, or before it reported `kRunning`. | [EM, 2.5](ExecutionManagement.md#25-termination-events) |
| Unique handle | `ara::per::UniqueHandle`: the move-only owner of an open file accessor. | [Persistency, 5.3](Persistency.md#53-sharedhandle-and-uniquehandle) |
| Unrecoverable State | EM's last resort: pre-cleanup, then terminate all processes, then post-cleanup. | [EM, 10.4](ExecutionManagement.md#104-unrecoverable-state) |
| Update Bit | A bit in a PDU that indicates whether a signal was actually updated in this transmission. | [Network Bindings](NetworkBindings.md) |
| Update session | The period, granted by State Management, during which UCM may change the software of the machine. | UCM |
| Update strategy | What Persistency does with an existing element when a new configuration is deployed: keep existing, overwrite, or delete. | [Persistency, 2.6](Persistency.md#26-update-strategies) |
| Uploadable element | An element derived from `UploadablePackageElement`, which is uploaded to the Machine as part of a Software Cluster. | [Manifests, 2.4](Manifests.md#24-design-elements-and-uploadable-elements) |
| Vehicle Package | A package, assembled by the OEM backend, that describes an update campaign across several ECUs. V-UCM processes it. | UCM |
| Vehicle Services | Functional clusters that provide vehicle-level functions: V-UCM, the Automotive API Gateway and Remote Persistency. | [Platform Overview, 3.3](PlatformOverview.md#33-four-groups-of-functional-clusters) |
| Vehicle State Manager | An OEM-specific application that controls the vehicle-level state and interacts with V-UCM during updates. | UCM |
| Vehicle Update and Configuration Management | The functional cluster that coordinates software updates across all ECUs of a vehicle. | [Main page](../README.md#topics-outside-the-series), UCM |
| Vendor-specific error | An error that an implementation returns in addition to the specified ones, in a vendor-specific domain | [Core, 7.6](CoreAndGeneral.md#76-vendor-specific-errors) |
| Verbose mode | The DLT form in which a message carries type information, and optionally names and units, for each argument. | [Log and Trace, 11.6](LogAndTrace.md#116-verbose-payload) |
| Violation | A broken API contract, for example two `ExecutionClient` objects. It is logged, and the offending process is terminated. | [EM, 10.1](ExecutionManagement.md#101-errors-and-violations), [Core, 6.3](CoreAndGeneral.md#63-violations-fail-early) |
| Violation message | The standardized fatal DLT message of a Standardized Violation | [Core, 15.3](CoreAndGeneral.md#153-violation-messages) |
| Watchdog | A hardware or software timer that resets the system if it is not triggered in time. PHM triggers it. | [PHM, 14](PlatformHealthManagement.md#13-the-hardware-watchdog-and-critical-failures) |
| Worst-case execution time (WCET) | The longest possible execution time of a task or interrupt handler. | [Platform Overview, 2.3.1](PlatformOverview.md#231-what-determinism-means) |
| Write-only-once | Access mode, new in R25-11, that allows adding elements to a storage but never changing existing ones. | [Persistency, 2.8](Persistency.md#28-access-modes) |

---

## Appendix A. References

**AUTOSAR documents (R25-11):**

- *Glossary* (`AUTOSAR_FO_TR_Glossary`), Foundation
- *Explanation of Adaptive Platform Design* (`AUTOSAR_AP_EXP_PlatformDesign`), Adaptive Platform
- *Explanation of Adaptive Platform Software Architecture* (`AUTOSAR_AP_EXP_SWArchitecture`), Adaptive Platform
- The specifications of the functional clusters, through the guides named in the column *Explained in*

---
