import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1829Component } from './my-comp-1829.component';

describe('MyComp1829Component', () => {
  let component: MyComp1829Component;
  let fixture: ComponentFixture<MyComp1829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
