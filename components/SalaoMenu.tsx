'use client';

interface SalaoMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const salaoFeatures = {
  vendaMais: [
    { title: 'Comer fora', description: 'Atraia clientes para o salão' },
    { title: 'CRM 360', description: 'Tenha visão completa dos clientes' },
    { title: 'Cardápio digital', description: 'Mais praticidade na escolha' }
  ],
  controleCentral: [
    { title: 'PDV', description: 'Tenha visão completa do negócio' },
    { title: 'Relatórios e Insights', description: 'Esteja sempre um passo a frente' },
    { title: 'Gestão financeira', description: 'Organize as finanças' }
  ],
  eficienciaOperacional: [
    { title: 'Totem', description: 'Mais facilidade pros clientes' },
    { title: 'Reservas', description: 'Ofereça agendamento prévio' },
    { title: 'Gestão de filas', description: 'Organize o atendimento' },
    { title: 'Integração de pagamentos', description: 'Organize o atendimento' }
  ]
};

export default function SalaoMenu({ isOpen, onClose }: SalaoMenuProps) {


  return (
    <>
      {/* Dropdown Menu Expandido */}
      <div
        className={`w-full bg-white rounded-3xl z-50 transition-all duration-300 origin-top overflow-hidden ${
          isOpen
            ? 'opacity-100 scale-y-100 mb-4'
            : 'opacity-0 scale-y-95 max-h-0 mb-0 pointer-events-none'
        }`}
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          transitionProperty: 'max-height, opacity, margin-bottom'
        }}
      >
        <div className="flex items-stretch h-full overflow-y-auto">
          {/* Left Side - Product Info */}
          <div className="w-80 bg-white p-10 flex flex-col justify-between border-r border-[#ebebeb]">
            <div className="flex flex-col gap-8">
              {/* Product Image */}
              <div className="relative h-48 bg-[#f6f1ea] rounded-3xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/_videos/v1/396f8219d0efb6d84ab6f28f3f562bedb05d3336" />
                </video>
              </div>

              {/* Product Title */}
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-[#141414]">
                  iFood Salão
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">
                  Seus clientes do iFood agora podem viver a experiência presencial
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white border-2 border-[#141414] text-[#141414] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#141414] hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95">
              Falar com especialista
            </button>
          </div>

          {/* Right Side - Features Grid */}
          <div className="flex-1 bg-white p-10 flex gap-10">
            {/* Venda mais Section */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-base font-semibold text-[#141414] px-3 py-2">
                Venda mais
              </h3>
              <div className="flex flex-col gap-3">
                {salaoFeatures.vendaMais.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#ebebeb] rounded-xl p-3 hover:border-[#eb0033] hover:shadow-md transition-all duration-300 group menu-card-appear ${
                      isOpen ? 'menu-card-appear' : ''
                    }`}
                    style={{
                      animationDelay: isOpen ? `${idx * 0.05}s` : '0s'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f5f5f5] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#eb0033] transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                        <div className="w-5 h-5 bg-[#f5f5f5] group-hover:bg-white rounded" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-semibold text-[#141414] text-xs">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#a3a3a3] group-hover:text-[#666] transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controle Central Section */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-base font-semibold text-[#141414] px-3 py-2">
                Controle central
              </h3>
              <div className="flex flex-col gap-3">
                {salaoFeatures.controleCentral.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#ebebeb] rounded-xl p-3 hover:border-[#eb0033] hover:shadow-md transition-all duration-300 group menu-card-appear ${
                      isOpen ? 'menu-card-appear' : ''
                    }`}
                    style={{
                      animationDelay: isOpen ? `${(idx + 3) * 0.05}s` : '0s'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f5f5f5] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#eb0033] transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                        <div className="w-5 h-5 bg-[#f5f5f5] group-hover:bg-white rounded" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-semibold text-[#141414] text-xs">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#a3a3a3] group-hover:text-[#666] transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eficiência Operacional Section */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-base font-semibold text-[#141414] px-3 py-2">
                Eficiência operacional
              </h3>
              <div className="flex flex-col gap-3">
                {salaoFeatures.eficienciaOperacional.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#ebebeb] rounded-xl p-3 hover:border-[#eb0033] hover:shadow-md transition-all duration-300 group menu-card-appear ${
                      isOpen ? 'menu-card-appear' : ''
                    }`}
                    style={{
                      animationDelay: isOpen ? `${(idx + 6) * 0.05}s` : '0s'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f5f5f5] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#eb0033] transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                        <div className="w-5 h-5 bg-[#f5f5f5] group-hover:bg-white rounded" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-semibold text-[#141414] text-xs">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#a3a3a3] group-hover:text-[#666] transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
