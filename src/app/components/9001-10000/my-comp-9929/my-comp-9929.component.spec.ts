import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9929Component } from './my-comp-9929.component';

describe('MyComp9929Component', () => {
  let component: MyComp9929Component;
  let fixture: ComponentFixture<MyComp9929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
