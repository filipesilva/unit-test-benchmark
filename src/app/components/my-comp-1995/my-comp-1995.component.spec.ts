import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1995Component } from './my-comp-1995.component';

describe('MyComp1995Component', () => {
  let component: MyComp1995Component;
  let fixture: ComponentFixture<MyComp1995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
