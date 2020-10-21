import React, { useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';

import { format, subWeeks, subMonths, addMonths } from 'date-fns';

import {
  Container,
  ContainerInput,
  ContainerMenu,
  Menu,
  Calendars,
} from './styles';

registerLocale('pt', pt);

const DateRange = ({ onChangeValue, horizontalAlign }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [calendarsIsOpen, setCalendarsIsOpen] = useState(false);
  const [menuOptionActive, setMenuOptionActive] = useState('');

  const [startDateSelected, setStartDateSelected] = useState('');
  const [endDateSelected, setEndDateSelected] = useState('');

  const [startDateSelectedTemp, setStartDateSelectedTemp] = useState(
    new Date()
  );
  const [endDateSelectedTemp, setEndDateSelectedTemp] = useState(
    addMonths(new Date(), 1)
  );

  const menuRef = useRef(null);

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  });

  const renderDateRangeInInput = useMemo(() => {
    const startDateFormatted = startDateSelected
      ? format(startDateSelected, 'dd/MM/yyyy')
      : '';
    const endDateFormatted = endDateSelected
      ? format(endDateSelected, 'dd/MM/yyyy')
      : '';

    if (!startDateSelected && !endDateSelected) {
      return 'Selecione o período';
    }

    return `${startDateFormatted} - ${endDateFormatted}`;
  }, [startDateSelected, endDateSelected]);

  const handleSelectDateRange = (start, end) => {
    setStartDateSelected(start);
    setEndDateSelected(end);

    const formattedStartDate = format(start, 'yyyy-MM-dd');
    const formattedEndDate = format(end, 'yyyy-MM-dd');

    onChangeValue({ startDate: formattedStartDate, endDate: formattedEndDate });
  };

  const handleResetDateRange = () => {
    onChangeValue({ startDate: '', endDate: '' });
    setStartDateSelected('');
    setEndDateSelected('');
    setStartDateSelectedTemp(new Date());
    setEndDateSelectedTemp(new Date());
    setMenuIsOpen(false);
    setCalendarsIsOpen(false);
    setMenuOptionActive('');
  };

  const ranges = [
    { label: 'Hoje', value: { start: new Date(), end: new Date() } },
    {
      label: 'Última semana',
      value: { start: subWeeks(new Date(), 1), end: new Date() },
    },
    {
      label: 'Último mês',
      value: { start: subMonths(new Date(), 1), end: new Date() },
    },
  ];

  return (
    <Container>
      <ContainerInput>
        <input
          type="text"
          value={renderDateRangeInInput}
          readOnly
          onClick={() => setMenuIsOpen(old => !old)}
        />

        {(startDateSelected || endDateSelected) && (
          <span
            className="input__clear-button"
            onClick={() => handleResetDateRange()}
            title="Limpar pesquisa"
          />
        )}
        <span className="input__arrow-down" />
      </ContainerInput>

      <ContainerMenu
        hidden={!menuIsOpen}
        ref={menuRef}
        horizontalAlign={horizontalAlign}
      >
        <Menu>
          {ranges.map(option => (
            <button
              type="button"
              key={option.label}
              className={
                menuOptionActive === option.label
                  ? 'menu__option active'
                  : 'menu__option'
              }
              onClick={() => {
                setCalendarsIsOpen(false);
                setMenuOptionActive(option.label);
                handleSelectDateRange(option.value.start, option.value.end);
              }}
            >
              {option.label}
            </button>
          ))}

          <button
            className={
              menuOptionActive === 'custom'
                ? 'menu__option active'
                : 'menu__option'
            }
            onClick={() => {
              setCalendarsIsOpen(true);
              setMenuOptionActive('custom');
            }}
            type="button"
          >
            Outra data
          </button>
        </Menu>

        <Calendars hidden={!calendarsIsOpen}>
          <div className="calendars__body">
            <DatePicker
              selected={startDateSelectedTemp}
              onChange={date => setStartDateSelectedTemp(date)}
              selectsStart
              startDate={startDateSelectedTemp}
              endDate={endDateSelectedTemp}
              maxDate={endDateSelectedTemp}
              inline
              locale="pt"
            />
            <DatePicker
              selected={endDateSelectedTemp}
              onChange={date => setEndDateSelectedTemp(date)}
              selectsEnd
              startDate={startDateSelectedTemp}
              endDate={endDateSelectedTemp}
              minDate={startDateSelectedTemp}
              inline
              locale="pt"
            />
          </div>

          <div className="calendars__footer">
            <button
              type="button"
              className="button"
              onClick={() => handleResetDateRange()}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="button button--success"
              onClick={() =>
                handleSelectDateRange(
                  startDateSelectedTemp,
                  endDateSelectedTemp
                )
              }
            >
              Buscar
            </button>
          </div>
        </Calendars>
      </ContainerMenu>
    </Container>
  );
};

DateRange.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  horizontalAlign: PropTypes.string,
};

DateRange.defaultProps = {
  horizontalAlign: 'right',
};

export default DateRange;
