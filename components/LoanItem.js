import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoanItem({ emprestimo }) {
  const {
    idEmprestimo,
    Cliente,
    valorEmprestimo,
    valorPago,
    numParcelas,
    numParcelasPagas,
    dataInicio,
    pago
  } = emprestimo;

  function getStatus(status) {
    let x = '';
    switch (status) {
      case 1:
        x = 'Pago';
        break;
      case 0:
        x = 'Andamento';
        break;
    }
    return x;
  }

  const changeDateFormatTo = date => {
    const [yy, mm, dd] = date.substring(0, 10).split(/-/g);
    return `${dd}/${mm}/${yy}`;
  };

  var statusColor = '#e88f1c'

  function statusColor(status) {
    let x = '000';
    switch (status) {
      case 1:
        x = '#000';
        break;
      case 0:
        x = '#e88f1c';
        break;
    }
    return x;
  }

  return (
    <TouchableOpacity style={styles.loanItem}>
      {Cliente ? <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Cliente}</Text> : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16 }}>
          Emprestimo: <Text style={{ fontWeight: 'normal' }}>{idEmprestimo}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Status:{' '}
          <Text style={{  }}>
            {getStatus(pago)}
          </Text>
        </Text>
      </View>
      <Text style={{ marginBottom: 10 }}>
        Data:{' '}
        <Text style={{ fontWeight: 'normal' }}>{changeDateFormatTo(dataInicio)}</Text>
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Total:{' '}
          <Text style={{ fontWeight: 'normal' }}>R${valorEmprestimo.toFixed(2).replace('.', ',')}</Text>
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Parcelas: <Text style={{ fontWeight: 'normal' }}>{numParcelas}</Text>
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Pago: <Text style={{ fontWeight: 'normal' }}>R${valorPago.toFixed(2).replace('.', ',')}</Text>
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Pagas: <Text style={{ fontWeight: 'normal' }}>{numParcelasPagas}</Text>
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Restante: <Text style={{ fontWeight: 'normal' }}>R${(valorEmprestimo-valorPago).toFixed(2).replace('.', ',')}</Text>
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
          Restantes: <Text style={{ fontWeight: 'normal' }}>{(numParcelas - numParcelasPagas)}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  loanItem: {
    padding: 10,
    borderBottomColor: 'gray',
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
});