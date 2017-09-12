import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5978Component } from './my-comp-5978.component';

describe('MyComp5978Component', () => {
  let component: MyComp5978Component;
  let fixture: ComponentFixture<MyComp5978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
