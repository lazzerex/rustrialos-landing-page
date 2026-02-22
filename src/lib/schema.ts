import type { WebSite, Organization, WithContext } from 'schema-dts';
import { siteConfig } from '@/config/site.config';

/**
 * Create WebSite schema for homepage
 */
export function createWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url || 'https://rustrial-os.dev',
    description: siteConfig.description,
  };
}

/**
 * Create Organization schema
 */
export function createOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url || 'https://rustrial-os.dev',
    description: siteConfig.description,
  };
}
