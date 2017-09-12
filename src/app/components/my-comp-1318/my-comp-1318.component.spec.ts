import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1318Component } from './my-comp-1318.component';

describe('MyComp1318Component', () => {
  let component: MyComp1318Component;
  let fixture: ComponentFixture<MyComp1318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
