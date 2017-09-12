import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5774Component } from './my-comp-5774.component';

describe('MyComp5774Component', () => {
  let component: MyComp5774Component;
  let fixture: ComponentFixture<MyComp5774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
