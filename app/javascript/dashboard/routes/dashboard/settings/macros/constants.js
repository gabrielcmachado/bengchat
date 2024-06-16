export const MACRO_ACTION_TYPES = [
  {
    key: 'assign_team',
    label: 'Atribuir à um Time',
    inputType: 'search_select',
  },
  {
    key: 'assign_agent',
    label: 'Atribuir à um Agente',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Inserir Marcador',
    inputType: 'multi_select',
  },
  {
    key: 'remove_label',
    label: 'Remover Marcador',
    inputType: 'multi_select',
  },
  {
    key: 'remove_assigned_team',
    label: 'Remover Time Atribuído',
    inputType: null,
  },
  {
    key: 'send_email_transcript',
    label: 'Enviar Transcrição por email',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Silenciar Conversa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Conversa em Espera',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Finalizar Conversa',
    inputType: null,
  },
  {
    key: 'send_attachment',
    label: 'Enviar Anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar Mensagem',
    inputType: 'textarea',
  },
  {
    key: 'add_private_note',
    label: 'Add Nota Privada',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Mudar Prioridade',
    inputType: 'search_select',
  },
];
