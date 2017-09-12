import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp568Component } from './my-comp-568.component';

describe('MyComp568Component', () => {
  let component: MyComp568Component;
  let fixture: ComponentFixture<MyComp568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
