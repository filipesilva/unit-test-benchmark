import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9804Component } from './my-comp-9804.component';

describe('MyComp9804Component', () => {
  let component: MyComp9804Component;
  let fixture: ComponentFixture<MyComp9804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
