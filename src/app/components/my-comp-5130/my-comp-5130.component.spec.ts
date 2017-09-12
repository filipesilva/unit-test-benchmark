import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5130Component } from './my-comp-5130.component';

describe('MyComp5130Component', () => {
  let component: MyComp5130Component;
  let fixture: ComponentFixture<MyComp5130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
