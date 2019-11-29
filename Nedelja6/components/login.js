class Login{
    constructor(){
        this.txtTitle=document.createElement('input');
        this.txtTitle.type='text';
        this.txtTitle.id='txt-user';
        this.txtTitle.placeholder='User';

        this.txtPasword=document.createElement('input');
        this.txtPasword.type='password';
        this.txtPasword.id='txt-password';
        this.txtPasword.placeholder='Pasword';

        this.btnAdd=document.createElement('input');
        this.btnAdd.type='submit';
        this.btnAdd.id='btn-add';
        this.btnAdd.value='Add User'

        this.node = document.createElement('div');
        this.node.appendChild(this.txtTitle);
        this.node.appendChild(this.txtPasword)
        this.node.appendChild(this.btnAdd);

        this.txtTitle.value = '';

        this.txtTitle.addEventListener('change', () => {
            this.username = this.txtTitle.value;
        });

    }

  getNode(){
      return this.node
  }

  btnAddClickEventListener(onclick){
      this.btnAdd.addEventListener('click', onclick);
  }

}

export {
    Login
}