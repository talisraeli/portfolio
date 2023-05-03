import style from "./SentNotification.module.sass";
import { useState, useEffect } from "preact/hooks";

interface SentNotificationProps {
  isSuccessed?: boolean;
  pop?: boolean;
  resetPop?: () => void;
}

export default function SentNotification(props: SentNotificationProps) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (props.pop && props.resetPop) {
      setIsOpened(true);
      props.resetPop();
    }
  }, [props.pop]);

  return (
    <div
      className={`${style.container} ${isOpened ? style.opened : style.closed}`}
    >
      <div className="wrapper-m">
        <h4>Message Notification</h4>
        <p>
          {props.isSuccessed ? (
            <>
              Your message submitted successfully!
              <br />
              Please wait patiently and wait for a reply. Thank you!
            </>
          ) : (
            <>
              An error occurred while sending the message.
              <br />
              Please try again later. Thank you!
            </>
          )}
        </p>
        <br />
        <p>
          <a onClick={() => setIsOpened(false)}>Close popup</a>
        </p>
      </div>
    </div>
  );
}
