import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1367Component } from './my-comp-1367.component';

describe('MyComp1367Component', () => {
  let component: MyComp1367Component;
  let fixture: ComponentFixture<MyComp1367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
