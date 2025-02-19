/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { IDocumentDeltaStorageService, IStream } from "@fluidframework/driver-definitions";
import { ISequencedDocumentMessage } from "@fluidframework/protocol-definitions";
import { Queue } from "./parallelRequests";

/**
 * Implementation of IDocumentDeltaStorageService that will always return an empty message queue when fetching messages
 *
 * @deprecated 2.0.0-internal.3.2.0 Not recommended for general purpose use.
 */
export class EmptyDocumentDeltaStorageService implements IDocumentDeltaStorageService {
	/**
	 * @deprecated 2.0.0-internal.3.2.0 Not recommended for general purpose use.
	 */
	public fetchMessages(
		from: number,
		_to: number | undefined,
		_abortSignal?: AbortSignal,
		_cachedOnly?: boolean,
		_fetchReason?: string,
	): IStream<ISequencedDocumentMessage[]> {
		const queue = new Queue<ISequencedDocumentMessage[]>();
		queue.pushDone();
		return queue;
	}
}
