import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5290Component } from './my-comp-5290.component';

describe('MyComp5290Component', () => {
  let component: MyComp5290Component;
  let fixture: ComponentFixture<MyComp5290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
