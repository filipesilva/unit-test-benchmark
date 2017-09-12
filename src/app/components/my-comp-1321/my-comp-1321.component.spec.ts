import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1321Component } from './my-comp-1321.component';

describe('MyComp1321Component', () => {
  let component: MyComp1321Component;
  let fixture: ComponentFixture<MyComp1321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
