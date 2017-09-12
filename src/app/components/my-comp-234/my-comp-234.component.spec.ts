import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp234Component } from './my-comp-234.component';

describe('MyComp234Component', () => {
  let component: MyComp234Component;
  let fixture: ComponentFixture<MyComp234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
