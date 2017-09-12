import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5167Component } from './my-comp-5167.component';

describe('MyComp5167Component', () => {
  let component: MyComp5167Component;
  let fixture: ComponentFixture<MyComp5167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
