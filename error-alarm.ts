/**
Error Alarm Exercise

Suppose we have a web application that runs on a single server. Errors that
occur from time to time during normal operation of the application are logged to a
text file that is stored in the file system on the server.

We are not concerned about these errors when their frequency is low. However,
when lots of errors occur in a short period of time, there may be a problem with
the application and we want to be notified immediately. Specifically, when more
than ten errors occur in one minute, we want to receive an email notification.
In general terms or pseudo code, how would you implement such an alarm?

Please assume:

  1. The general paradigm of logging errors to a text file will be kept in place.

  2. There exists a function

    function logError( error )

    This function is called each time there is an error and appends the error to
    the end of the log file.

  3. We never want to receive more than one email notification per minute.
*/

/**
 * A working example is available at: https://stackblitz.com/edit/typescript-bzqnm8?devtoolsheight=33&file=index.ts
 */

let errorQueue: Array<{ error: Error; timestamp: number }> = [];
let lastNotification: number;

function notify(email: string) {
  // send alert notification
}

function checkAndNotify(error: Error) {
  const timestamp = new Date().getTime();

  // saves error if it's the first.
  if (!errorQueue.length) {
    errorQueue.push({ error, timestamp });
    return;
  }

  // saves error if the queue has less than 10 records
  // and the first was registered less than a minute ago,
  // otherwise resets the queue to keep track of new errors
  if (errorQueue.length < 10) {
    if (timestamp - errorQueue[0].timestamp < 60000) {
      errorQueue.push({ error, timestamp });
    } else {
      errorQueue = [{ error, timestamp }];
    }
  } else {
    // if the queue reachs the limit, the admin is notified
    // ONLY if it was never notified or the alert was sent
    // more than a minute ago.
    if (!lastNotification || timestamp - lastNotification > 60000) {
      lastNotification = timestamp;
      notify("admin@example.com");
    }

    // reset the queue to keep track of new errors
    errorQueue = [{ error, timestamp }];
  }
}

function logError(error: Error) {
  checkAndNotify(error);

  // appends error to the end of the log file
}
