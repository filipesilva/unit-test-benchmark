import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3545Component } from './my-comp-3545.component';

describe('MyComp3545Component', () => {
  let component: MyComp3545Component;
  let fixture: ComponentFixture<MyComp3545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
