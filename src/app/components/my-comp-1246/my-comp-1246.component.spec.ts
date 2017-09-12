import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1246Component } from './my-comp-1246.component';

describe('MyComp1246Component', () => {
  let component: MyComp1246Component;
  let fixture: ComponentFixture<MyComp1246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
