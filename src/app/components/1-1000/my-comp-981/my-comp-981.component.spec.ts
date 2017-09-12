import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp981Component } from './my-comp-981.component';

describe('MyComp981Component', () => {
  let component: MyComp981Component;
  let fixture: ComponentFixture<MyComp981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
