import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5093Component } from './my-comp-5093.component';

describe('MyComp5093Component', () => {
  let component: MyComp5093Component;
  let fixture: ComponentFixture<MyComp5093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
