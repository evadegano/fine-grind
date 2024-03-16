import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useOneTapSignin from "../hooks/useOneTapSignin";
import BirthdayForm from "./birthdayForm";

const OneTapSignin = () => {
  const [showBirthdayForm, setShowBirthdayForm] = useState(false);
  const { data: session } = useSession();
  const { isLoading } = useOneTapSignin({
    redirect: false,
    parentContainerId: "one-tap",
  });

  console.log("Session:", session);
  useEffect(() => {
    if (session && !session.user.birthday) {
      setShowBirthdayForm(true);
    }
  }, [session]);

  return (
    <div id="one-tap" className="one-tap-btn">
      {showBirthdayForm && <BirthdayForm />}
    </div>
  );
};

export default OneTapSignin;
