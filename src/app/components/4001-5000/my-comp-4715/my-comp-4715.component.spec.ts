import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4715Component } from './my-comp-4715.component';

describe('MyComp4715Component', () => {
  let component: MyComp4715Component;
  let fixture: ComponentFixture<MyComp4715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
