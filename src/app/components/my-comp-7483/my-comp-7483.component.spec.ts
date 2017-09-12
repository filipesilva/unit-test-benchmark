import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7483Component } from './my-comp-7483.component';

describe('MyComp7483Component', () => {
  let component: MyComp7483Component;
  let fixture: ComponentFixture<MyComp7483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
