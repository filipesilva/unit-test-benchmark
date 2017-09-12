import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp804Component } from './my-comp-804.component';

describe('MyComp804Component', () => {
  let component: MyComp804Component;
  let fixture: ComponentFixture<MyComp804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
