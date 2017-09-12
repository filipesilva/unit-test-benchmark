import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp142Component } from './my-comp-142.component';

describe('MyComp142Component', () => {
  let component: MyComp142Component;
  let fixture: ComponentFixture<MyComp142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
