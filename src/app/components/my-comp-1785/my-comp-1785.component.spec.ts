import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1785Component } from './my-comp-1785.component';

describe('MyComp1785Component', () => {
  let component: MyComp1785Component;
  let fixture: ComponentFixture<MyComp1785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
