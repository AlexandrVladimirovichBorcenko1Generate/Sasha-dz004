document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
  
    const formData = new FormData(this);
  
    const response = await fetch('адрес_сервера', {
      method: 'POST',
      body: formData
    });
  
    if (response.ok) {
      const responseData = await response.json(); 
      console.log('данные успешно отправлены:', responseData);
    } else {
      console.error('произошла ошибка при отправке данных');
    }
  });
  