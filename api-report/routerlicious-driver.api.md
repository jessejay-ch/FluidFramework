## API Report File for "@fluidframework/routerlicious-driver"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { IDocumentService } from '@fluidframework/driver-definitions';
import { IDocumentServiceFactory } from '@fluidframework/driver-definitions';
import { IResolvedUrl } from '@fluidframework/driver-definitions';
import { ISession } from '@fluidframework/server-services-client';
import { ISummaryTree } from '@fluidframework/protocol-definitions';
import { ITelemetryBaseLogger } from '@fluidframework/common-definitions';
import { ITokenClaims } from '@fluidframework/protocol-definitions';

// @public
export class DefaultTokenProvider implements ITokenProvider {
    constructor(jwt: string);
    // (undocumented)
    fetchOrdererToken(): Promise<ITokenResponse>;
    // (undocumented)
    fetchStorageToken(): Promise<ITokenResponse>;
}

// @public
export class DocumentPostCreateError extends Error {
    constructor(
    innerError: Error);
    // (undocumented)
    readonly name = "DocumentPostCreateError";
    // (undocumented)
    get stack(): string | undefined;
}

// @public (undocumented)
export interface IRouterliciousDriverPolicies {
    aggregateBlobsSmallerThanBytes: number | undefined;
    enableDiscovery?: boolean;
    enableInternalSummaryCaching: boolean;
    enablePrefetch: boolean;
    enableRestLess: boolean;
    enableWholeSummaryUpload: boolean;
    maxConcurrentOrdererRequests: number;
    maxConcurrentStorageRequests: number;
}

// @public
export interface ITokenProvider {
    documentPostCreateCallback?(documentId: string, creationToken: string): Promise<void>;
    fetchOrdererToken(tenantId: string, documentId?: string, refresh?: boolean): Promise<ITokenResponse>;
    fetchStorageToken(tenantId: string, documentId: string, refresh?: boolean): Promise<ITokenResponse>;
}

// @public (undocumented)
export interface ITokenResponse {
    fromCache?: boolean;
    jwt: string;
}

// @public
export interface ITokenService {
    extractClaims(token: string): ITokenClaims;
}

// @public
export class RouterliciousDocumentServiceFactory implements IDocumentServiceFactory {
    constructor(tokenProvider: ITokenProvider, driverPolicies?: Partial<IRouterliciousDriverPolicies>);
    // (undocumented)
    createContainer(createNewSummary: ISummaryTree | undefined, resolvedUrl: IResolvedUrl, logger?: ITelemetryBaseLogger, clientIsSummarizer?: boolean): Promise<IDocumentService>;
    // (undocumented)
    createDocumentService(resolvedUrl: IResolvedUrl, logger?: ITelemetryBaseLogger, clientIsSummarizer?: boolean, session?: ISession): Promise<IDocumentService>;
    // @deprecated (undocumented)
    readonly protocolName = "fluid:";
}

// @public
export enum RouterliciousErrorType {
    fileNotFoundOrAccessDeniedError = "fileNotFoundOrAccessDeniedError",
    // (undocumented)
    sslCertError = "sslCertError"
}

// (No @packageDocumentation comment for this package)

```
