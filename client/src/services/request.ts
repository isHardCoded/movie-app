export async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch('/api' + url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? `Ошибка ${res.status}`);
  }
  if (res.status === 204) return undefined as T;
  
  return res.json();
} 