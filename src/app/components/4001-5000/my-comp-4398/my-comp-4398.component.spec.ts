import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4398Component } from './my-comp-4398.component';

describe('MyComp4398Component', () => {
  let component: MyComp4398Component;
  let fixture: ComponentFixture<MyComp4398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
