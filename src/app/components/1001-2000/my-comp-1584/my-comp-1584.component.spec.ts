import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1584Component } from './my-comp-1584.component';

describe('MyComp1584Component', () => {
  let component: MyComp1584Component;
  let fixture: ComponentFixture<MyComp1584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
