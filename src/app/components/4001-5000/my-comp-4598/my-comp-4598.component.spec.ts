import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4598Component } from './my-comp-4598.component';

describe('MyComp4598Component', () => {
  let component: MyComp4598Component;
  let fixture: ComponentFixture<MyComp4598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
