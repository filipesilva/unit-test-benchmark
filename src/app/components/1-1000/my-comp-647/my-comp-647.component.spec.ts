import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp647Component } from './my-comp-647.component';

describe('MyComp647Component', () => {
  let component: MyComp647Component;
  let fixture: ComponentFixture<MyComp647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
