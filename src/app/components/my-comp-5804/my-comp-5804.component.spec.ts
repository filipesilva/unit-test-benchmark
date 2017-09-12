import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5804Component } from './my-comp-5804.component';

describe('MyComp5804Component', () => {
  let component: MyComp5804Component;
  let fixture: ComponentFixture<MyComp5804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
