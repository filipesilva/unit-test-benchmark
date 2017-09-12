import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9617Component } from './my-comp-9617.component';

describe('MyComp9617Component', () => {
  let component: MyComp9617Component;
  let fixture: ComponentFixture<MyComp9617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
