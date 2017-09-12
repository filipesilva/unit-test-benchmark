import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp152Component } from './my-comp-152.component';

describe('MyComp152Component', () => {
  let component: MyComp152Component;
  let fixture: ComponentFixture<MyComp152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
