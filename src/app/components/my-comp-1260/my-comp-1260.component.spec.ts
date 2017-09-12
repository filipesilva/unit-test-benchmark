import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1260Component } from './my-comp-1260.component';

describe('MyComp1260Component', () => {
  let component: MyComp1260Component;
  let fixture: ComponentFixture<MyComp1260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
