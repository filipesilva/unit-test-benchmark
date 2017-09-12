import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5873Component } from './my-comp-5873.component';

describe('MyComp5873Component', () => {
  let component: MyComp5873Component;
  let fixture: ComponentFixture<MyComp5873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
