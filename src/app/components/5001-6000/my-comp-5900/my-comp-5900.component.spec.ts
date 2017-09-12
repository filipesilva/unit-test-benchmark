import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5900Component } from './my-comp-5900.component';

describe('MyComp5900Component', () => {
  let component: MyComp5900Component;
  let fixture: ComponentFixture<MyComp5900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
