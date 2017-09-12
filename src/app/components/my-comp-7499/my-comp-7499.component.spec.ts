import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7499Component } from './my-comp-7499.component';

describe('MyComp7499Component', () => {
  let component: MyComp7499Component;
  let fixture: ComponentFixture<MyComp7499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
