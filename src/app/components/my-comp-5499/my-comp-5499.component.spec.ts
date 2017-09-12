import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5499Component } from './my-comp-5499.component';

describe('MyComp5499Component', () => {
  let component: MyComp5499Component;
  let fixture: ComponentFixture<MyComp5499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
