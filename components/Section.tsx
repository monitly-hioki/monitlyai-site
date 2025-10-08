import Container from "@/components/Container";
export default function Section({ title, lead, children, bg }: {title:string, lead?:string, children:React.ReactNode, bg?:'soft'|'soft2'}){
  const bgCls = bg==='soft' ? 'bg-[#F7F9FA]' : bg==='soft2' ? 'bg-[#F0F3F5]' : 'bg-white';
  return (
    <section className={`${bgCls} py-16 md:py-24`}>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {lead && <p className="mt-3 text-neutral-600">{lead}</p>}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}
