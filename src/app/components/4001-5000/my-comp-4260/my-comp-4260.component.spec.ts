import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4260Component } from './my-comp-4260.component';

describe('MyComp4260Component', () => {
  let component: MyComp4260Component;
  let fixture: ComponentFixture<MyComp4260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
