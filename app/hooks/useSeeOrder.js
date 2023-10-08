import { useParams } from "next/navigation";
import { useMemo } from "react";

// This Hook Use for Get ConversationId
const useSeeOrder = () => {
  const params = useParams();

  const orderId = useMemo(() => {
    if (!params?.orderId) {
      return "";
    }
    if (params?.orderId.includes("@")) {
      return false;
    }

    return params.orderId;
  }, [params?.orderId]);

  const isOpen = useMemo(() => !!orderId, [orderId]);

  return useMemo(
    () => ({
      isOpen,
      orderId,
    }),
    [isOpen, orderId]
  );
};

export default useSeeOrder;
