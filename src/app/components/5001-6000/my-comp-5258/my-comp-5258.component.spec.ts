import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5258Component } from './my-comp-5258.component';

describe('MyComp5258Component', () => {
  let component: MyComp5258Component;
  let fixture: ComponentFixture<MyComp5258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
