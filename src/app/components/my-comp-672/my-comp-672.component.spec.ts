import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp672Component } from './my-comp-672.component';

describe('MyComp672Component', () => {
  let component: MyComp672Component;
  let fixture: ComponentFixture<MyComp672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
