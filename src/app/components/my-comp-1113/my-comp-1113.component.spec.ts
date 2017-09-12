import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1113Component } from './my-comp-1113.component';

describe('MyComp1113Component', () => {
  let component: MyComp1113Component;
  let fixture: ComponentFixture<MyComp1113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
