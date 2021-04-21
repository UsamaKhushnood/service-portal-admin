    <template>
    <div>
        <b-modal
        id="change-user-permission-modal"
        title="Changer User Permission"
        header-bg-variant="success"
        header-text-variant="light"
        >
        <div class="modal-body">
            <b-form>
            <b-form-group
                label="Changer User Permission"
            >
                <b-form-checkbox-group
                id="checkbox-group-2"
                v-model="selected"
                name="flavour-2"
                >   
                <b-form-checkbox value="orange">Read</b-form-checkbox>
                <b-form-checkbox value="apple">Write</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-button variant="success" size="sm" class="btn-block"
                >Save</b-button
            >
            </b-form>
        </div>
        <template #modal-footer="{hide}">
            <div class="w-100">
            <b-button
                variant="dark"
                size="sm"
                class="float-right"
                @click="hide"
                squared
            >
                Close
            </b-button>
            </div>
        </template>
        </b-modal>
    </div>
    </template>
    <script>
    export default {
    data: () => ({}),
    };
    </script>
    <style lang="scss"></style>
