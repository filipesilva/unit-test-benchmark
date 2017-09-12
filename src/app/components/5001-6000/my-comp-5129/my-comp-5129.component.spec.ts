import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5129Component } from './my-comp-5129.component';

describe('MyComp5129Component', () => {
  let component: MyComp5129Component;
  let fixture: ComponentFixture<MyComp5129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
