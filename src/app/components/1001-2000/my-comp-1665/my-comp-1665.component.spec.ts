import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1665Component } from './my-comp-1665.component';

describe('MyComp1665Component', () => {
  let component: MyComp1665Component;
  let fixture: ComponentFixture<MyComp1665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
