import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5287Component } from './my-comp-5287.component';

describe('MyComp5287Component', () => {
  let component: MyComp5287Component;
  let fixture: ComponentFixture<MyComp5287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
