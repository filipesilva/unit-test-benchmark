import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1504Component } from './my-comp-1504.component';

describe('MyComp1504Component', () => {
  let component: MyComp1504Component;
  let fixture: ComponentFixture<MyComp1504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
