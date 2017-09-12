import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5365Component } from './my-comp-5365.component';

describe('MyComp5365Component', () => {
  let component: MyComp5365Component;
  let fixture: ComponentFixture<MyComp5365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
