import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1180Component } from './my-comp-1180.component';

describe('MyComp1180Component', () => {
  let component: MyComp1180Component;
  let fixture: ComponentFixture<MyComp1180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
