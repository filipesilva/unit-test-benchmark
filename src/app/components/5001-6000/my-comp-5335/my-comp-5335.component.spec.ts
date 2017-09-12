import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5335Component } from './my-comp-5335.component';

describe('MyComp5335Component', () => {
  let component: MyComp5335Component;
  let fixture: ComponentFixture<MyComp5335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
