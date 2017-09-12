import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp671Component } from './my-comp-671.component';

describe('MyComp671Component', () => {
  let component: MyComp671Component;
  let fixture: ComponentFixture<MyComp671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
