import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7636Component } from './my-comp-7636.component';

describe('MyComp7636Component', () => {
  let component: MyComp7636Component;
  let fixture: ComponentFixture<MyComp7636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
