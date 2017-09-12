import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7471Component } from './my-comp-7471.component';

describe('MyComp7471Component', () => {
  let component: MyComp7471Component;
  let fixture: ComponentFixture<MyComp7471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
