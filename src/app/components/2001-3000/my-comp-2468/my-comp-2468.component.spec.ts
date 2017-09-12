import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2468Component } from './my-comp-2468.component';

describe('MyComp2468Component', () => {
  let component: MyComp2468Component;
  let fixture: ComponentFixture<MyComp2468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
