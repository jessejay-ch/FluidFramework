/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { ApiModel } from "@microsoft/api-extractor-model";
import { NewlineKind } from "@rushstack/node-core-library";

import { Logger, defaultConsoleLogger } from "./Logging";
import { PolicyOptions, defaultPolicyOptions } from "./Policies";
import {
	ApiItemTransformationConfiguration,
	defaultApiItemTransformations,
} from "./api-item-transforms";

/**
 * Configuration options for the Markdown documenter.
 */
export interface MarkdownDocumenterConfiguration
	extends PolicyOptions,
		ApiItemTransformationConfiguration {
	/**
	 * API Model for which the documentation is being generated.
	 * This is the output of {@link https://api-extractor.com/ | API-Extractor}.
	 *
	 * @remarks Beyond being the root entry for rendering, this is used to resolve member links globally, etc.
	 *
	 * If you need to generate a model from API reports on disk, see {@link loadModel}.
	 */
	apiModel: ApiModel;

	/**
	 * Default root URI used when generating content links.
	 */
	readonly uriRoot: string;

	/**
	 * Specifies what type of newlines API Documenter should use when writing output files.
	 *
	 * @defaultValue {@link @rushstack/node-core-library#NewlineKind.OsDefault}
	 */
	readonly newlineKind?: NewlineKind;

	/**
	 * Policy object for logging system events.
	 *
	 * @remarks A custom logger can be provided for customized policy, or for a target other than the console.
	 *
	 * If you wish to enable `verbose` logging, consider using {@link verboseConsoleLogger}.
	 *
	 * @defaultValue {@link defaultConsoleLogger}
	 */
	readonly logger?: Logger;
}

/**
 * Creates a complete system configuration by filling in any optional properties with defaults.
 * @param partialConfig - Configuration with optional properties. Any missing properties will be filled in with
 * default values. Any specified properties will take precedence over defaults.
 */
export function markdownDocumenterConfigurationWithDefaults(
	partialConfig: MarkdownDocumenterConfiguration,
): Required<MarkdownDocumenterConfiguration> {
	return {
		newlineKind: NewlineKind.OsDefault,
		logger: defaultConsoleLogger,
		...defaultPolicyOptions,
		...defaultApiItemTransformations,
		...partialConfig,
	};
}
