import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1244Component } from './my-comp-1244.component';

describe('MyComp1244Component', () => {
  let component: MyComp1244Component;
  let fixture: ComponentFixture<MyComp1244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
