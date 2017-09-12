import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9700Component } from './my-comp-9700.component';

describe('MyComp9700Component', () => {
  let component: MyComp9700Component;
  let fixture: ComponentFixture<MyComp9700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
