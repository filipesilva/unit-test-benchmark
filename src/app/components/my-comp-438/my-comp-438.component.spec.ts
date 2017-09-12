import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp438Component } from './my-comp-438.component';

describe('MyComp438Component', () => {
  let component: MyComp438Component;
  let fixture: ComponentFixture<MyComp438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
