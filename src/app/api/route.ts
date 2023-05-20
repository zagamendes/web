export async function GET() {
  console.log('zzz');
  return { message: 'tes' };
  /* const { searchParams } = new URL(req.url);
  console.log(searchParams);

  const code = searchParams.get('code');
  const { data } = await api.post('/register', {
    code,
  });
  console.log(data);

  const redirectURL = new URL('/', req.url).toString();
  return NextResponse.redirect(redirectURL); */
}
