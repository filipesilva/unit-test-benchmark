import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1266Component } from './my-comp-1266.component';

describe('MyComp1266Component', () => {
  let component: MyComp1266Component;
  let fixture: ComponentFixture<MyComp1266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
