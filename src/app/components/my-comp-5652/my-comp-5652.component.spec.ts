import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5652Component } from './my-comp-5652.component';

describe('MyComp5652Component', () => {
  let component: MyComp5652Component;
  let fixture: ComponentFixture<MyComp5652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
