import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5784Component } from './my-comp-5784.component';

describe('MyComp5784Component', () => {
  let component: MyComp5784Component;
  let fixture: ComponentFixture<MyComp5784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
