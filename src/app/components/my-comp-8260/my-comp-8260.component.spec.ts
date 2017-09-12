import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8260Component } from './my-comp-8260.component';

describe('MyComp8260Component', () => {
  let component: MyComp8260Component;
  let fixture: ComponentFixture<MyComp8260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
