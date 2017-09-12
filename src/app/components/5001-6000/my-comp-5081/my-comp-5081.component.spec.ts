import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5081Component } from './my-comp-5081.component';

describe('MyComp5081Component', () => {
  let component: MyComp5081Component;
  let fixture: ComponentFixture<MyComp5081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
