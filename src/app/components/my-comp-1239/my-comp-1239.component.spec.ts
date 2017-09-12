import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1239Component } from './my-comp-1239.component';

describe('MyComp1239Component', () => {
  let component: MyComp1239Component;
  let fixture: ComponentFixture<MyComp1239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
