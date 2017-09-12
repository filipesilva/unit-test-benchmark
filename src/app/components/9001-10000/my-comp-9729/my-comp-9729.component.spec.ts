import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9729Component } from './my-comp-9729.component';

describe('MyComp9729Component', () => {
  let component: MyComp9729Component;
  let fixture: ComponentFixture<MyComp9729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
