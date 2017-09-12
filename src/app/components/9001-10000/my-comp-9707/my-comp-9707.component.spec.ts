import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9707Component } from './my-comp-9707.component';

describe('MyComp9707Component', () => {
  let component: MyComp9707Component;
  let fixture: ComponentFixture<MyComp9707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
