---
title: Overview
menuPosition: 1
author: skylerjokiel
editor: tylerbutler
---

{{< callout note >}}

This article assumes that you are familiar with the concept of *operation* in the Fluid Framework. See [How Fluid works]({{< relref "docs/_index.md#how-fluid-works" >}}).

{{< /callout >}}

There are three primary concepts to understand when building an application with Fluid.

-   Service
-   Container
-   Shared objects

### Service

Fluid clients require a centralized service that all connected clients use to send and receive operations. Fluid offers multiple service implementations that developers can use without any modifications. For each of them, there is a corresponding client library. You must use the client library that corresponds to the service you are connecting to. See [Available Fluid Services]({{< relref "service-options.md" >}}) for more information about Fluid service options.

Each service-specific library adheres to a common API structure and has the primary goal of creating and retrieving container objects. The common structure enables you to switch from one service to another with minimal code changes. There are two services currently available:

-   The [Tinylicious service]({{< relref "Tinylicious" >}}) runs on your development computer and is used for development and testing. It is used in Fluid examples throughout this documentation.
-   [Azure Fluid Relay]({{< relref "azure-frs.md" >}}) runs in Azure and enables high-scale production scenarios.

See [Service-specific client libraries](#service-specific-client-libraries) for more details.

### Container

The container is the primary unit of encapsulation in Fluid. It consists of a collection of shared objects and supporting APIs to manage the lifecycle of the container and the objects within it. New containers must be created from a client, but are bound to the data stored on the supporting server. After a container has been created, it can be accessed by other clients.

For more about containers see [Containers](./containers.md).

### Shared objects

A *shared object* is any object type that supports collaboration (simultaneous editing).
The fundamental type of shared object that is provided by Fluid Framework is called a **Distributed Data Structure (DDS)**. A DDS holds shared data that the collaborators are working with.

Fluid Framework supports a second type of shared object called **Data Object**.
*This type of object is in beta and should not be used in a production application.*
A Data Object contains one or more DDSes that are organized to enable a particular collaborative use case.
DDSes are low-level data structures, while Data Objects are composed of DDSes and other shared objects.
Data Objects are used to organize DDSes into semantically meaningful groupings for your scenario, as well as providing an API surface to your app's data.

For more information about these types and the differences between them, see [Data modeling]({{< relref "data-modeling.md" >}}) and [Introducing distributed data structures]({{< relref "dds.md" >}}).

## Library structure

There are two primary libraries you'll use when building with Fluid: the basic Fluid Framework library and a service-specific client library (such as Fluid Azure Relay or Tinylicious).

### The Fluid Framework library

The Fluid Framework library is a collection of core Fluid APIs that make it easy to build and use applications.
This library contains all the common type definitions as well as all the built-in shared objects.
The library is in the package [fluid-framework](https://www.npmjs.com/package/fluid-framework).

### Service-specific client libraries

Fluid works with multiple service implementations. Each service has a corresponding service-specific client library. These libraries have a common API structure but also support functionality unique to each service.

For specifics about each service-specific client implementation see their corresponding documentation.

-   The client library for the [Tinylicious]({{< relref "Tinylicious" >}}) service is in the package [@fluidframework/tinylicious-client](https://www.npmjs.com/package/@fluidframework/tinylicious-client).
-   The client library for the [Azure Fluid Relay]({{< relref "azure-frs.md" >}}) is in the package [@fluidframework/azure-client](https://www.npmjs.com/package/@fluidframework/azure-client).

For more information see [Packages]({{< relref "packages.md" >}}).

<!-- AUTO-GENERATED-CONTENT:START (INCLUDE:path=docs/_includes/links.md) -->

<!-- prettier-ignore-start -->

<!-- This section is automatically generated. To update it, make the appropriate changes to docs/md-magic.config.js or the embedded content, then run 'npm run build:md-magic' in the docs folder. -->
<!-- Links -->

<!-- Concepts -->

[Fluid container]: {{< relref "containers.md" >}}
[Signals]: {{< relref "/docs/concepts/signals.md" >}}

<!-- Distributed Data Structures -->

[SharedCounter]: {{< relref "/docs/data-structures/counter.md" >}}
[SharedMap]: {{< relref "/docs/data-structures/map.md" >}}
[SharedString]: {{< relref "/docs/data-structures/string.md" >}}
[Sequences]:  {{< relref "/docs/data-structures/sequences.md" >}}

<!-- API links -->

[fluid-framework]: {{< relref "/docs/apis/fluid-framework.md" >}}
[@fluidframework/azure-client]: {{< relref "/docs/apis/azure-client.md" >}}
[@fluidframework/tinylicious-client]: {{< relref "/docs/apis/tinylicious-client.md" >}}

[AzureClient]: {{< relref "/docs/apis/azure-client/AzureClient-class.md" >}}
[TinyliciousClient]: {{< relref "/docs/apis/tinylicious-client/TinyliciousClient-class.md" >}}

[FluidContainer]: {{< relref "/docs/apis/fluid-static/fluidcontainer-class.md" >}}
[IFluidContainer]: {{< relref "/docs/apis/fluid-static/ifluidcontainer-interface.md" >}}

<!-- prettier-ignore-end -->

<!-- AUTO-GENERATED-CONTENT:END -->
