import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5530Component } from './my-comp-5530.component';

describe('MyComp5530Component', () => {
  let component: MyComp5530Component;
  let fixture: ComponentFixture<MyComp5530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
