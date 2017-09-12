import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1376Component } from './my-comp-1376.component';

describe('MyComp1376Component', () => {
  let component: MyComp1376Component;
  let fixture: ComponentFixture<MyComp1376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
