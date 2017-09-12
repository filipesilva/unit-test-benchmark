import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9836Component } from './my-comp-9836.component';

describe('MyComp9836Component', () => {
  let component: MyComp9836Component;
  let fixture: ComponentFixture<MyComp9836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
