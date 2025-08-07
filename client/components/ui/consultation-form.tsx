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

  // Função para formatar telefone (00) 00000-0000
  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    const limited = numbers.slice(0, 11);

    // Aplica a formatação
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  // Função para validar nome (apenas letras, espaços, acentos)
  const validateName = (value: string) => {
    // Permite letras (incluindo acentuadas), espaços e hífens
    return value.replace(/[^a-zA-ZÀ-ÿ\s\-']/g, '');
  };

  // Função para validar email básico
  const isValidEmail = (email: string) => {
    if (!email) return true; // Email é opcional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validações antes do envio
    if (formData.name.trim().length < 2) {
      alert('Por favor, insira um nome válido com pelo menos 2 caracteres.');
      return;
    }

    // Remove formatação do telefone para validação
    const phoneNumbers = formData.phone.replace(/\D/g, '');
    if (phoneNumbers.length < 10) {
      alert('Por favor, insira um telefone válido com pelo menos 10 dígitos.');
      return;
    }

    if (formData.email && !isValidEmail(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar uma consultoria gratuita:

*Dados para Consultoria:*
Nome: ${formData.name}
Telefone: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}
Disponibilidade: ${formData.availability}

Aguardo retorno em até 24h conforme prometido!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5527981709551?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Call optional onSubmit callback
    onSubmit?.(formData);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedName = validateName(e.target.value);
    setFormData(prev => ({
      ...prev,
      name: validatedName
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      email: e.target.value.toLowerCase().trim()
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
              onChange={handleNameChange}
              required
              placeholder="Seu nome completo"
              maxLength={50}
            />
            <p className="text-xs text-muted-foreground">
              Apenas letras e espaços são permitidos
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
            <p className="text-xs text-muted-foreground">
              Formato automático: (00) 00000-0000
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (opcional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="seu@email.com"
              className={formData.email && !isValidEmail(formData.email) ? 'border-red-500' : ''}
            />
            {formData.email && !isValidEmail(formData.email) && (
              <p className="text-xs text-red-500">
                Por favor, insira um email válido
              </p>
            )}
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
            disabled={
              !formData.name.trim() ||
              formData.phone.replace(/\D/g, '').length < 10 ||
              (formData.email && !isValidEmail(formData.email))
            }
          >
            Quero Minha Consultoria Gratuita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}