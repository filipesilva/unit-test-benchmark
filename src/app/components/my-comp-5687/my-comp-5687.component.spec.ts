import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5687Component } from './my-comp-5687.component';

describe('MyComp5687Component', () => {
  let component: MyComp5687Component;
  let fixture: ComponentFixture<MyComp5687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
