import { useState} from 'react';
import {z} from 'zod';
import { useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { Input , Stack, Text, InputGroup, InputRightElement, Button} from '@chakra-ui/react';



const schema = z.object({
    fullName: z.string().min(3,{message: 'full Name should be at least 3 Characters'}).max(50),
    email: z.string().min(3,{message:'Email required'}),
    phoneNumber: z.number({invalid_type_error: 'password is required'}).min(0.01),
    
})

type ExpenseFormData = z.infer<typeof schema>

interface Props{
    onSubmit: (data: ExpenseFormData)=> void,
}

const ExpenseForm = ({onSubmit}:Props) => {

   const {register, handleSubmit,reset, formState: {errors}} = useForm<ExpenseFormData>({resolver: zodResolver(schema)})  
   

    const [show, setShow] = useState(false)
    
  
   
  
   
  return (
    <form  onSubmit={handleSubmit(data=> {onSubmit(data); reset()}
    )}>
        
        <Stack spacing={4}>
        <div>
            <Text>Full Name</Text>
            <Input
            color='teal'
            placeholder='Jhone Smith'
             _placeholder={{ color: 'inherit' }}
             {...register('fullName')} id='fullName'/>
             {errors.fullName && <p className='text-danger'>{errors.fullName.message}</p>}
        </div>
        <div>
            <Text>Email</Text>
            <Input
            color='teal'
            placeholder='jonesmith@example.com'
             _placeholder={{ color: 'inherit' }}
             {...register('email')} id='email'/>
             {errors.email && <p className='text-danger'>{errors.email.message}</p>}
        </div>
        <div>
            <Text>Password</Text>
        <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          {...register('phoneNumber', {valueAsNumber: true})} id="phoneNumber"
        />       
        <InputRightElement width='4.5rem'>
            
          <Button h='1.75rem' size='sm' onClick={()=> setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      {errors.phoneNumber && <p className='text-danger'>{errors.phoneNumber.message}</p>}
        </div>
            
        <Button colorScheme='telegram' type='submit'>Login</Button>
        </Stack>
        
        
       
    </form>
  )
}

export default ExpenseForm;