import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5932Component } from './my-comp-5932.component';

describe('MyComp5932Component', () => {
  let component: MyComp5932Component;
  let fixture: ComponentFixture<MyComp5932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
