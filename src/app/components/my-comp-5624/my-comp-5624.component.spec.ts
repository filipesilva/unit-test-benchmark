import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5624Component } from './my-comp-5624.component';

describe('MyComp5624Component', () => {
  let component: MyComp5624Component;
  let fixture: ComponentFixture<MyComp5624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
