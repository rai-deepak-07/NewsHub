import { useNavigate } from "react-router-dom";
import { Compass } from "lucide-react";

import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <Container className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Compass size={30} />
        </div>

        <h1 className="text-4xl font-bold text-slate-900">404</h1>

        <p className="mt-3 text-slate-500">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Button className="mt-8" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
