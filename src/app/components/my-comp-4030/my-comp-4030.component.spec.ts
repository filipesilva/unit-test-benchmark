import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4030Component } from './my-comp-4030.component';

describe('MyComp4030Component', () => {
  let component: MyComp4030Component;
  let fixture: ComponentFixture<MyComp4030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
