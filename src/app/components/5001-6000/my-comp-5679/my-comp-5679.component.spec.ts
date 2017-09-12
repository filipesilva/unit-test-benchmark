import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5679Component } from './my-comp-5679.component';

describe('MyComp5679Component', () => {
  let component: MyComp5679Component;
  let fixture: ComponentFixture<MyComp5679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
