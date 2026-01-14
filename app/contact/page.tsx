import type { Metadata } from 'next';
import { Contact } from '@/components/home/Contact';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
    title: 'Contact | Nay Myo Kyaw',
    description:
        'Get in touch with software engineer Nay Myo Kyaw for collaboration, opportunities, or speaking.',
};

export default function ContactPage() {
    return (
        <AppShell>
            <div className="w-full">
                <Contact />
            </div>
        </AppShell>
    );
}
