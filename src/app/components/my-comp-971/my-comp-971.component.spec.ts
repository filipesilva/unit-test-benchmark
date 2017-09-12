import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp971Component } from './my-comp-971.component';

describe('MyComp971Component', () => {
  let component: MyComp971Component;
  let fixture: ComponentFixture<MyComp971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
