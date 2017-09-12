import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5909Component } from './my-comp-5909.component';

describe('MyComp5909Component', () => {
  let component: MyComp5909Component;
  let fixture: ComponentFixture<MyComp5909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
