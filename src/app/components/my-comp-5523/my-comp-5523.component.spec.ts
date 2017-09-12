import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5523Component } from './my-comp-5523.component';

describe('MyComp5523Component', () => {
  let component: MyComp5523Component;
  let fixture: ComponentFixture<MyComp5523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
