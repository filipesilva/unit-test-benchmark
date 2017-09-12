import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2260Component } from './my-comp-2260.component';

describe('MyComp2260Component', () => {
  let component: MyComp2260Component;
  let fixture: ComponentFixture<MyComp2260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
