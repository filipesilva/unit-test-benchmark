import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4122Component } from './my-comp-4122.component';

describe('MyComp4122Component', () => {
  let component: MyComp4122Component;
  let fixture: ComponentFixture<MyComp4122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
