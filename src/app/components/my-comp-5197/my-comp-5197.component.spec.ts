import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5197Component } from './my-comp-5197.component';

describe('MyComp5197Component', () => {
  let component: MyComp5197Component;
  let fixture: ComponentFixture<MyComp5197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
