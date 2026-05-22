export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data])
    .replace(/<\/script>/gi, "<\\/script>")
    .replace(/<!--/g, "<\\!--")
    .replace(/ /g, "\\u2028")
    .replace(/ /g, "\\u2029");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
