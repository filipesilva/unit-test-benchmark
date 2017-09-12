import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4902Component } from './my-comp-4902.component';

describe('MyComp4902Component', () => {
  let component: MyComp4902Component;
  let fixture: ComponentFixture<MyComp4902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
