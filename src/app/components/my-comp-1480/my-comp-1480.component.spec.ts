import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1480Component } from './my-comp-1480.component';

describe('MyComp1480Component', () => {
  let component: MyComp1480Component;
  let fixture: ComponentFixture<MyComp1480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
