/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { ITelemetryBaseEvent } from "@fluidframework/common-definitions";
import { IDebuggerMessage } from "./Messages";

// #region Outbound messages

/**
 * Message data format used by {@link TelemetryEventMessage}.
 *
 * @public
 */
export interface TelemetryEventMessageData {
	/**
	 * Contents of the telemetry event
	 */
	contents: ITelemetryBaseEvent;
}

/**
 * Outbound event indicating that a telemetry event has been generated by the application.
 * Includes the contents of the telemetry event.
 *
 * @public
 */
export interface TelemetryEventMessage extends IDebuggerMessage<TelemetryEventMessageData> {
	type: "TELEMETRY_EVENT";
}

// #endregion
