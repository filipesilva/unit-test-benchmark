import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4804Component } from './my-comp-4804.component';

describe('MyComp4804Component', () => {
  let component: MyComp4804Component;
  let fixture: ComponentFixture<MyComp4804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
