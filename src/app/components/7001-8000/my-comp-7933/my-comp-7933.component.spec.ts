import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7933Component } from './my-comp-7933.component';

describe('MyComp7933Component', () => {
  let component: MyComp7933Component;
  let fixture: ComponentFixture<MyComp7933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
