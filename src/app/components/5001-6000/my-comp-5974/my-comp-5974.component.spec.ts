import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5974Component } from './my-comp-5974.component';

describe('MyComp5974Component', () => {
  let component: MyComp5974Component;
  let fixture: ComponentFixture<MyComp5974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
