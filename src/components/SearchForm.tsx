// src/components/SearchForm.tsx
import { toast } from 'react-toastify';
interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm(props: SearchFormProps) {
  const { onSubmit } = props;
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    
    // Якщо текстове поле порожнє, виводимо повідомлення 
		// і припиняємо виконання функції.
    if (topic === "") {
      toast.error("Please enter search topic!", {
        position: 'top-right',
        theme: 'dark'
      });
      return;
    }
    
    // У протилежному випадку викликаємо пропс 
		// і передаємо йому значення поля
    onSubmit(topic);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
