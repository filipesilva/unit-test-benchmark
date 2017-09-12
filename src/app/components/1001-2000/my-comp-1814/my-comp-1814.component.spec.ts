import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1814Component } from './my-comp-1814.component';

describe('MyComp1814Component', () => {
  let component: MyComp1814Component;
  let fixture: ComponentFixture<MyComp1814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
