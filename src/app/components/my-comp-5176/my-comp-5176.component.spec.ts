import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5176Component } from './my-comp-5176.component';

describe('MyComp5176Component', () => {
  let component: MyComp5176Component;
  let fixture: ComponentFixture<MyComp5176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
