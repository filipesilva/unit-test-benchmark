import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1058Component } from './my-comp-1058.component';

describe('MyComp1058Component', () => {
  let component: MyComp1058Component;
  let fixture: ComponentFixture<MyComp1058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
