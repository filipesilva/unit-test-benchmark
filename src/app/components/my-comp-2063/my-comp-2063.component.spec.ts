import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2063Component } from './my-comp-2063.component';

describe('MyComp2063Component', () => {
  let component: MyComp2063Component;
  let fixture: ComponentFixture<MyComp2063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
