import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9628Component } from './my-comp-9628.component';

describe('MyComp9628Component', () => {
  let component: MyComp9628Component;
  let fixture: ComponentFixture<MyComp9628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
