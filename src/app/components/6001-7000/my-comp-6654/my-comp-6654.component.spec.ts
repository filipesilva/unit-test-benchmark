import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6654Component } from './my-comp-6654.component';

describe('MyComp6654Component', () => {
  let component: MyComp6654Component;
  let fixture: ComponentFixture<MyComp6654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
