import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1499Component } from './my-comp-1499.component';

describe('MyComp1499Component', () => {
  let component: MyComp1499Component;
  let fixture: ComponentFixture<MyComp1499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
