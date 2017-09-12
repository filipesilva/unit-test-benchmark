import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1220Component } from './my-comp-1220.component';

describe('MyComp1220Component', () => {
  let component: MyComp1220Component;
  let fixture: ComponentFixture<MyComp1220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
