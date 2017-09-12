import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7561Component } from './my-comp-7561.component';

describe('MyComp7561Component', () => {
  let component: MyComp7561Component;
  let fixture: ComponentFixture<MyComp7561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
