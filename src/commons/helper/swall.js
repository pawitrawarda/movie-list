import swall from 'sweetalert'

const alert = {
  confirmation (callback, confirmationText = '') {
    swall({
      text: confirmationText === '' ? 'Apakah anda yakin ingin menghapus data ini?' : confirmationText,
      buttons: ['Tidak', 'Iya']
    }).then(willDelete => {
      if (willDelete) {
        if (callback) callback()
      }
    })
  },

  confirmSwitch (callYes, callNo) {
    swall({
      text: 'Yakin Ingin Mengubah Data?',
      buttons: ['Tidak', 'Iya']
    }).then(willDelete => {
      if (willDelete) {
        if (callYes) callYes()
      } else {
        if (callNo) callNo()
      }
    })
  },

  confirmation2 (callback, confirmationText = '', stop) {
    swall({
      text: confirmationText === '' ? 'Apakah anda yakin ingin menghapus data ini?' : confirmationText,
      buttons: ['Tidak', 'Iya']
    }).then(result => {
      if (result) {
        if (callback) {
          callback()
        } else {
          stop()
        }
      }
    })
  },

  success (successText = '', callback) {
    swall({
      icon: 'success',
      // title: 'Berhasil',
      text: successText === '' ? 'Data berhasil disimpan!' : successText,
      button: true
    }).then(result => {
      if (result) {
        if (callback) callback()
      }
    })
  },

  successrubah (successText = '', callback) {
    swall({
      icon: 'success',
      text: successText === '' ? 'Data berhasil diubah!' : successText,
      button: true
    }).then(result => {
      if (result) {
        if (callback) callback()
      }
    })
  },

  successhapus (successText = '', callback) {
    swall({
      icon: 'success',
      text: successText === '' ? 'Data berhasil dihapus!' : successText,
      button: true
    }).then(result => {
      if (result) {
        if (callback) callback()
      }
    })
  },

  custom (status, successText = '', callback) {
    swall({
      icon: status === 200 ? 'success' : 'warning',
      title: status === 200 ? 'Berhasil' : 'warning',
      text: successText === '' ? '' : successText,
      button: true
    }).then(result => {
      if (result) {
        if (callback) callback()
      }
    })
  },

  failed (failText = '', callback) {
    swall({
      icon: 'error',
      title: 'Gagal',
      text: failText === '' ? 'Terjadi Kesalahan, Silahkan Coba Kembali' : failText,
      button: true
    }).then(result => {
      if (result) {
        if (callback) callback()
      }
    })
  }
}

export default alert
