import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4366Component } from './my-comp-4366.component';

describe('MyComp4366Component', () => {
  let component: MyComp4366Component;
  let fixture: ComponentFixture<MyComp4366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
