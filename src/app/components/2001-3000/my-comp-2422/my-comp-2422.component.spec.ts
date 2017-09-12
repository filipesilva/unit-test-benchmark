import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2422Component } from './my-comp-2422.component';

describe('MyComp2422Component', () => {
  let component: MyComp2422Component;
  let fixture: ComponentFixture<MyComp2422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
