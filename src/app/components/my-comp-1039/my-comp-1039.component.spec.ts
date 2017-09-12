import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1039Component } from './my-comp-1039.component';

describe('MyComp1039Component', () => {
  let component: MyComp1039Component;
  let fixture: ComponentFixture<MyComp1039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
