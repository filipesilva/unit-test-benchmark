import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5289Component } from './my-comp-5289.component';

describe('MyComp5289Component', () => {
  let component: MyComp5289Component;
  let fixture: ComponentFixture<MyComp5289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
