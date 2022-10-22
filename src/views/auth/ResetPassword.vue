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
    <h1 class="text-2xl font-medium">Reset your password?</h1>
    <p class="text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque
      accusantium commodi minima.
    </p>

    <div class="flex flex-col gap-4 mt-4">
      <div v-if="checkLoading">
        <UiMessage>
          <div
            class="p-4 border rounded-md border-sky-900/10 bg-sky-50 text-sky-700"
          >
            <strong class="text-sm font-medium whitespace-pre-wrap">
              <div class="flex items-center justify-start">
                <svg
                  class="w-5 h-5 mr-3 -ml-1 text-sky-700 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span
                  >Processing the access token verification for resetting the
                  password...</span
                >
              </div>
            </strong>
          </div>
        </UiMessage>
      </div>

      <div v-else-if="!checkLoading && !checkSuccess">
        <UiMessage>
          <div
            class="p-4 text-red-700 border rounded-md border-red-900/10 bg-red-50"
          >
            <strong class="text-sm font-medium whitespace-pre-wrap">
              Invalid access token
            </strong>
          </div>
        </UiMessage>
      </div>

      <div v-else-if="!checkLoading && checkSuccess">
        <Form
          v-slot="{ errors }"
          :validation-schema="schema"
          class="flex flex-col gap-4"
          @submit="onSubmit"
        >
          <UiMessage />

          <UiInput
            id="password"
            type="password"
            name="password"
            label="New password"
            placeholder="Enter your new password"
            :error="errors.password"
          />

          <UiInput
            id="confirm_password"
            type="password"
            name="confirm_password"
            label="Confirm your new password"
            placeholder="Confirm your new password"
            :error="errors.confirm_password"
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
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import UiButton from '@/components/ui/UiButton.vue';
import UiInput from '@/components/ui/UiInput.vue';
import UiMessage from '@/components/ui/UiMessage.vue';
import { useAuthStore } from '@/stores';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';

const schema = Yup.object().shape({
  password: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: Yup.string()
    .required('Confirm password is required')
    .min(6, 'Confirm password must be at least 6 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const route = useRoute();
const authStore = useAuthStore();
const checkLoading = ref(false);
const checkSuccess = ref(false);
const token = route.params.token;

onBeforeMount(async () => {
  if (token) {
    checkLoading.value = true;
    const response = await authStore.validate('reset', token);
    if (response.success) {
      checkLoading.value = false;
      checkSuccess.value = true;
    } else {
      checkLoading.value = false;
      checkSuccess.value = false;
    }
  }
});

async function onSubmit(values) {
  const { password, confirm_password } = values;
  await authStore.reset({ token, password, confirm_password });
}
</script>
