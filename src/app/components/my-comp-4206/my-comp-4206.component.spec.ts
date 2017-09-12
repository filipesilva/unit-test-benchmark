import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4206Component } from './my-comp-4206.component';

describe('MyComp4206Component', () => {
  let component: MyComp4206Component;
  let fixture: ComponentFixture<MyComp4206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
