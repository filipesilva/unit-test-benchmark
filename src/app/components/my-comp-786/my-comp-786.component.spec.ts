import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp786Component } from './my-comp-786.component';

describe('MyComp786Component', () => {
  let component: MyComp786Component;
  let fixture: ComponentFixture<MyComp786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
