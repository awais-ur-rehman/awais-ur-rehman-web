type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `${slug} | Project Details | Portfolio`,
    description: `Details about ${slug} project`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Project: {slug}</h1>
      <p className="text-lg">Project details coming soon</p>
    </div>
  );
}

