create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  price_cents integer not null,
  currency text not null default 'eur',
  description text not null,
  download_path text not null,
  stripe_price_id text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_email text,
  product_id uuid references products(id),
  stripe_session_id text unique,
  status text not null default 'pending',
  amount_total integer,
  currency text,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table if not exists licenses (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  product_id uuid references products(id),
  user_email text not null,
  license_key text unique not null default encode(gen_random_bytes(18), 'hex'),
  created_at timestamptz not null default now()
);

create table if not exists downloads (
  id uuid primary key default gen_random_uuid(),
  license_id uuid references licenses(id),
  product_id uuid references products(id),
  user_email text,
  downloaded_at timestamptz not null default now(),
  ip_hash text
);

insert into products (slug, name, price_cents, currency, description, download_path)
values (
  'crystal-obsidian',
  'Crystal Obsidian',
  499,
  'eur',
  'Client-side Fabric helper for Minecraft 1.21.11 that places obsidian and an End Crystal in one clean sequence.',
  'crystal-obsidian-1.0.0.jar'
)
on conflict (slug) do nothing;
