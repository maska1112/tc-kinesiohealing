import { ButtonLink } from "@/components/site/Primitives";

export default function NotFoundPage() {
  return (
    <section className="bg-paper py-32" data-testid="not-found-page">
      <div className="container-site text-center">
        <p className="font-serif text-7xl text-brand">404</p>
        <h1 className="mt-6 text-3xl text-ink">Page not found</h1>
        <ButtonLink to="/" className="mt-10" testId="not-found-home-button">Domov</ButtonLink>
      </div>
    </section>
  );
}
