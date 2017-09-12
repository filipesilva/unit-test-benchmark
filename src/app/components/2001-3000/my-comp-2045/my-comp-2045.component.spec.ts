import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2045Component } from './my-comp-2045.component';

describe('MyComp2045Component', () => {
  let component: MyComp2045Component;
  let fixture: ComponentFixture<MyComp2045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
