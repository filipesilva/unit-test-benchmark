import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1804Component } from './my-comp-1804.component';

describe('MyComp1804Component', () => {
  let component: MyComp1804Component;
  let fixture: ComponentFixture<MyComp1804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
