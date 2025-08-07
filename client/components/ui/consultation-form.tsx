import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';

interface ConsultationFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  availability: string;
}

export function ConsultationForm({ onSubmit }: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    availability: 'IMEDIATAMENTE',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar uma consultoria gratuita:

📝 *Dados para Consultoria:*
👤 Nome: ${formData.name}
📞 Telefone: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}
⏰ Disponibilidade: ${formData.availability}

Aguardo retorno em até 24h conforme prometido!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5527981709551?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Call optional onSubmit callback
    onSubmit?.(formData);
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleAvailabilityChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      availability: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <CardTitle className="text-2xl lg:text-3xl font-playfair text-moss">
          Descubra qual tipo de lago combina com meu espaço
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Receba uma consultoria personalizada e gratuita para criar seu refúgio natural
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary">Consultoria gratuita</Badge>
          <Badge variant="secondary">Projeto personalizado</Badge>
          <Badge variant="secondary">Resposta em 24h</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              required
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (opcional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-4">
            <Label>Qual a disponibilidade para iniciar o projeto? *</Label>
            <RadioGroup
              value={formData.availability}
              onValueChange={handleAvailabilityChange}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="IMEDIATAMENTE" id="immediately" />
                <Label htmlFor="immediately" className="cursor-pointer">
                  Imediatamente
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3 MESES" id="three-months" />
                <Label htmlFor="three-months" className="cursor-pointer">
                  3 meses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6 MESES" id="six-months" />
                <Label htmlFor="six-months" className="cursor-pointer">
                  6 meses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="AINDA ESTOU PLANEJANDO" id="planning" />
                <Label htmlFor="planning" className="cursor-pointer">
                  Ainda estou planejando
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-moss hover:bg-moss/90 text-white"
            size="lg"
          >
            Quero Minha Consultoria Gratuita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
