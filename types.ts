export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
}

// Added ChatMessage interface to resolve import errors
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}