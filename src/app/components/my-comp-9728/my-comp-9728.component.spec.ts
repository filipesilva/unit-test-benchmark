import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9728Component } from './my-comp-9728.component';

describe('MyComp9728Component', () => {
  let component: MyComp9728Component;
  let fixture: ComponentFixture<MyComp9728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
