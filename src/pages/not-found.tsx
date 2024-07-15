import Layout from "@/components/layout";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="inline-block rounded-lg bg-destructive px-6 py-3 text-6xl font-bold text-destructive-foreground">404</div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
          <div className="mt-6">
            <Link
              to={"/"}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;