import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9568Component } from './my-comp-9568.component';

describe('MyComp9568Component', () => {
  let component: MyComp9568Component;
  let fixture: ComponentFixture<MyComp9568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
