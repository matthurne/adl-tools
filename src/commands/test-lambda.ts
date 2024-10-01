import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

export const testLambda = async () => {
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: "hurneTest",
  });

  const response = await client.send(command);
  console.log(
    `Response:\n${JSON.stringify(response, ["StatusCode", "FunctionError", "ExecutedVersion"], 2)}`,
  );
  if (response.Payload) {
    const responsePayload = JSON.parse(
      Buffer.from(response.Payload).toString(),
    );
    console.log(
      `\nResponse payload:\n${JSON.stringify(responsePayload, null, 2)}`,
    );
  }
};
