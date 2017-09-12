import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9317Component } from './my-comp-9317.component';

describe('MyComp9317Component', () => {
  let component: MyComp9317Component;
  let fixture: ComponentFixture<MyComp9317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
