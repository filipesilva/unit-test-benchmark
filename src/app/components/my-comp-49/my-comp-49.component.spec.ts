import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp49Component } from './my-comp-49.component';

describe('MyComp49Component', () => {
  let component: MyComp49Component;
  let fixture: ComponentFixture<MyComp49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
