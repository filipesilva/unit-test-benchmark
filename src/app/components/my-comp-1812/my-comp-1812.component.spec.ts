import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1812Component } from './my-comp-1812.component';

describe('MyComp1812Component', () => {
  let component: MyComp1812Component;
  let fixture: ComponentFixture<MyComp1812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
