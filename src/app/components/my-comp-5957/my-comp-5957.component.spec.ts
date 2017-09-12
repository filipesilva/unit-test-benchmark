import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5957Component } from './my-comp-5957.component';

describe('MyComp5957Component', () => {
  let component: MyComp5957Component;
  let fixture: ComponentFixture<MyComp5957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
