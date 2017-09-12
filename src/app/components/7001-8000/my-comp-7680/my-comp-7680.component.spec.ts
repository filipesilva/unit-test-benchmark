import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7680Component } from './my-comp-7680.component';

describe('MyComp7680Component', () => {
  let component: MyComp7680Component;
  let fixture: ComponentFixture<MyComp7680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
