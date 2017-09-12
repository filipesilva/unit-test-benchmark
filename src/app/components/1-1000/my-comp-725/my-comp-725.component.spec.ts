import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp725Component } from './my-comp-725.component';

describe('MyComp725Component', () => {
  let component: MyComp725Component;
  let fixture: ComponentFixture<MyComp725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
