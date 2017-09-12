import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7669Component } from './my-comp-7669.component';

describe('MyComp7669Component', () => {
  let component: MyComp7669Component;
  let fixture: ComponentFixture<MyComp7669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
