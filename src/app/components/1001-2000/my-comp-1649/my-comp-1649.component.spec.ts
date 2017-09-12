import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1649Component } from './my-comp-1649.component';

describe('MyComp1649Component', () => {
  let component: MyComp1649Component;
  let fixture: ComponentFixture<MyComp1649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
