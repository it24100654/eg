import { useState } from 'react';
import { createItem } from '../api';

export default function ItemForm({ onItemAdded }) {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [extrainfo, setExtrainfo] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
try {
await createItem({ name, description, price: Number(price) ,extrainfo: String(extrainfo)});
setName('');
setDescription('');
setPrice('');
setExtrainfo('');
onItemAdded();
} catch (err) {
console.error('Error creating item:', err);
alert('Failed to create item');
}
};

return (
<form onSubmit={handleSubmit} style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
<h2>Add New Item</h2>
<div style={{ marginBottom: '1rem' }}>
<label style={{ display: 'block', marginBottom: '0.5rem' }}>Item Name</label>
<input
placeholder="Item name"
value={name}
onChange={e => setName(e.target.value)}
style={{ width: '100%', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ddd' }}
required
/>
</div>
<div style={{ marginBottom: '1rem' }}>
<label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
<input
placeholder="Description"
value={description}
onChange={e => setDescription(e.target.value)}
style={{ width: '100%', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ddd' }}
required
/>
</div>
<div style={{ marginBottom: '1rem' }}>
<label style={{ display: 'block', marginBottom: '0.5rem' }}>Price</label>
<input
placeholder="Price (e.g. 29.99)"
type="number"
value={price}
onChange={e => setPrice(e.target.value)}
style={{ width: '100%', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ddd' }}
required
/>
</div>
<div style={{ marginBottom: '1rem' }}>
    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Extra Info</label>
    <input
        placeholder="Extra information"
        value={extrainfo}
        onChange={e => setExtrainfo(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', borderRadius: '3px', border: '1px solid #ddd' }}
    />
</div>
<button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#aa3bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add Item</button>
</form>
);
}