import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4460Component } from './my-comp-4460.component';

describe('MyComp4460Component', () => {
  let component: MyComp4460Component;
  let fixture: ComponentFixture<MyComp4460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
