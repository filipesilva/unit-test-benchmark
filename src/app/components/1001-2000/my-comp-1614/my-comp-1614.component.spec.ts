import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1614Component } from './my-comp-1614.component';

describe('MyComp1614Component', () => {
  let component: MyComp1614Component;
  let fixture: ComponentFixture<MyComp1614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
