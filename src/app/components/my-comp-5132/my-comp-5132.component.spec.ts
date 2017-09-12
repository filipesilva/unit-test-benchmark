import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5132Component } from './my-comp-5132.component';

describe('MyComp5132Component', () => {
  let component: MyComp5132Component;
  let fixture: ComponentFixture<MyComp5132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
