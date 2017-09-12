import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9529Component } from './my-comp-9529.component';

describe('MyComp9529Component', () => {
  let component: MyComp9529Component;
  let fixture: ComponentFixture<MyComp9529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
