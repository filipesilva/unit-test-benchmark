import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp405Component } from './my-comp-405.component';

describe('MyComp405Component', () => {
  let component: MyComp405Component;
  let fixture: ComponentFixture<MyComp405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
