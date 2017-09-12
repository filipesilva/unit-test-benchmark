import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5458Component } from './my-comp-5458.component';

describe('MyComp5458Component', () => {
  let component: MyComp5458Component;
  let fixture: ComponentFixture<MyComp5458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
