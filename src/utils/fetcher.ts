export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorBody = await res.text();
      const error = new Error(`Erro ${res.status}: ${errorBody}`);
      (error as any).status = res.status;
      throw error;
    }

    return res.json();
  } catch (err: any) {
    console.error('Erro na requisição:', err);

    if (err.status === 401) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }

    throw err;
  }
}