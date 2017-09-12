import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp713Component } from './my-comp-713.component';

describe('MyComp713Component', () => {
  let component: MyComp713Component;
  let fixture: ComponentFixture<MyComp713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
