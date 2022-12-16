import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('price');
        resetField('amount')
    }

  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Stock Details</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Enter stock name' className='form-input' />
                </div>
                <div className="input-group">
                    <input type="text" {...register('price')} placeholder='Enter stock price' className='form-input' />
                </div>
                
                <select className='form-input' {...register('type')}>
                    <option value="Largecap" defaultValue>LargeCap</option>
                    <option value="Midcap">MidCap</option>
                    <option value="Smallcap">SmallCap</option>
                    
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='total amount invested' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-slate-800 rounded-lg w-full'>Add Stocks</button>
                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}
