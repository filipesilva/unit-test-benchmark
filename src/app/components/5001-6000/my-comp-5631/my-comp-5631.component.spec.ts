import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5631Component } from './my-comp-5631.component';

describe('MyComp5631Component', () => {
  let component: MyComp5631Component;
  let fixture: ComponentFixture<MyComp5631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
