import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6127Component } from './my-comp-6127.component';

describe('MyComp6127Component', () => {
  let component: MyComp6127Component;
  let fixture: ComponentFixture<MyComp6127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
