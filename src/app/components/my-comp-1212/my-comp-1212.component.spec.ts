import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1212Component } from './my-comp-1212.component';

describe('MyComp1212Component', () => {
  let component: MyComp1212Component;
  let fixture: ComponentFixture<MyComp1212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
