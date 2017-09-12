import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1910Component } from './my-comp-1910.component';

describe('MyComp1910Component', () => {
  let component: MyComp1910Component;
  let fixture: ComponentFixture<MyComp1910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
