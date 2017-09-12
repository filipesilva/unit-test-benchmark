import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5579Component } from './my-comp-5579.component';

describe('MyComp5579Component', () => {
  let component: MyComp5579Component;
  let fixture: ComponentFixture<MyComp5579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
