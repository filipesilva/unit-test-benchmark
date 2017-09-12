import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1803Component } from './my-comp-1803.component';

describe('MyComp1803Component', () => {
  let component: MyComp1803Component;
  let fixture: ComponentFixture<MyComp1803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
