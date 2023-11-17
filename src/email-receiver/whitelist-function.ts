// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for WhitelistFunction
 */
export interface WhitelistFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/email-receiver/whitelist.
 */
export class WhitelistFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: WhitelistFunctionProps) {
    super(scope, id, {
      description: 'src/email-receiver/whitelist.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs20.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/email-receiver/whitelist.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}