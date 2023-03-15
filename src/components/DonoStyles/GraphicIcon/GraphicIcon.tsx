import React from 'react';
import './GraphicIcon.scss';

import ChevonIcon from './ChevonIcon/ChevonIcon';
import EditIcon from './EditIcon/EditIcon';
import StarIcon from './StarIcon/StarIcon';
import TicketIcon from './TicketIcon/TicketIcon';
import TrashIcon from './TrashIcon/TrashIcon';
import SelectIcon from './SelectIcon/SelectIcon';
import SwitchIcon from '../SwitchIcon/SwitchIcon';
import AddIcon from './AddIcon/AddIcon';
import CloseIcon from './CloseIcon/CloseIcon';
import ResetIcon from './ResetIcon/ResetIcon';
import paperPlane from './paperPlane/paperPlane';

type GraphicIconType = 'reset' | 'switchIcon' | 'chevon' | 'edit' | 'star' | 'ticket' | 'trash' | 'selectIcon' | 'add' | 'close' | 'paperPlane';
type TypeMap = {
  [K in GraphicIconType]: React.FC<Props>;
};

interface Props {
  type: GraphicIconType;
  scale?: number;
  color?: string;
  fill?: string;
  activate?: boolean;
}

const GraphicIcon: React.FC<Props> = ({ type, scale, activate }) => {
  const graphicIcon: TypeMap = {
    chevon: ChevonIcon,
    edit: EditIcon,
    star: StarIcon,
    ticket: TicketIcon,
    trash: TrashIcon,
    reset: ResetIcon,
    selectIcon: SelectIcon,
    switchIcon: SwitchIcon,
    add: AddIcon,
    close: CloseIcon,
    paperPlane: paperPlane,
  };
  const Element = graphicIcon[type];
  return (
    <div style={scale ? { transform: `scale(${scale})` } : { transform: 'scale(1)' }} className='graphic-icon'>
      {type !== 'star' && <Element type={type}></Element>}
      {type === 'star' && <Element type='star' activate={activate}></Element>}
    </div>
  );
};

export default GraphicIcon;
