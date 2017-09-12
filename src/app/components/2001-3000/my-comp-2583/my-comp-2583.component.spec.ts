import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2583Component } from './my-comp-2583.component';

describe('MyComp2583Component', () => {
  let component: MyComp2583Component;
  let fixture: ComponentFixture<MyComp2583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
