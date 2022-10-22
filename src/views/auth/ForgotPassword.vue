<template>
  <div class="flex items-end gap-3">
    <div class="text-2xl font-medium">
      <div
        class="px-2 py-1 text-sm font-medium rounded-lg bg-emerald-50 text-emerald-600"
      >
        Open Beta 🏀
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full gap-2 mt-4">
    <h1 class="text-2xl font-medium">Forgot your password?</h1>
    <p class="text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque
      accusantium commodi minima.
    </p>

    <div class="flex flex-col gap-4 mt-4">
      <UiMessage />

      <Form
        v-slot="{ errors }"
        :validation-schema="schema"
        class="flex flex-col gap-4"
        @submit="onSubmit"
      >
        <UiInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          :error="errors.email"
        />

        <UiButton type="submit" :loading="authStore.loading"
          >Reset my password</UiButton
        >

        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">
            Don't have an account?
            <router-link to="/auth/signup" class="text-primary-600"
              >Sign up</router-link
            >
          </div>
          <div class="text-sm">
            <router-link to="/auth/signin" class="text-primary-600"
              >Sign In</router-link
            >
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import UiButton from '@/components/ui/UiButton.vue';
import UiInput from '@/components/ui/UiInput.vue';
import UiMessage from '@/components/ui/UiMessage.vue';
import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
});

const authStore = useAuthStore();

async function onSubmit(values) {
  const { email } = values;
  await authStore.forgot(email);
}
</script>
