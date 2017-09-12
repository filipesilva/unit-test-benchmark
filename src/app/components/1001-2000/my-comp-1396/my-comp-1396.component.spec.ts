import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1396Component } from './my-comp-1396.component';

describe('MyComp1396Component', () => {
  let component: MyComp1396Component;
  let fixture: ComponentFixture<MyComp1396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
