import { useAuth } from "@/context/AuthContext";

const MembersOnly = ({
  children,
  className: _className,
  silent: _silent,
}: {
  children: React.ReactNode;
  className?: string;
  silent?: boolean;
}) => {
  const { authenticated } = useAuth();
  if (!authenticated) return null;
  return <>{children}</>;
};

export default MembersOnly;
