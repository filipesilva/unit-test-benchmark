import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1525Component } from './my-comp-1525.component';

describe('MyComp1525Component', () => {
  let component: MyComp1525Component;
  let fixture: ComponentFixture<MyComp1525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
