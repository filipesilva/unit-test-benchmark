import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp584Component } from './my-comp-584.component';

describe('MyComp584Component', () => {
  let component: MyComp584Component;
  let fixture: ComponentFixture<MyComp584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
