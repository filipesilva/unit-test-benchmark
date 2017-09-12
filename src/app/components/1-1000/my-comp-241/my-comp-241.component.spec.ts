import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp241Component } from './my-comp-241.component';

describe('MyComp241Component', () => {
  let component: MyComp241Component;
  let fixture: ComponentFixture<MyComp241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
