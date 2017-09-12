import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5836Component } from './my-comp-5836.component';

describe('MyComp5836Component', () => {
  let component: MyComp5836Component;
  let fixture: ComponentFixture<MyComp5836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
