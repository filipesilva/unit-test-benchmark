import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7804Component } from './my-comp-7804.component';

describe('MyComp7804Component', () => {
  let component: MyComp7804Component;
  let fixture: ComponentFixture<MyComp7804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
