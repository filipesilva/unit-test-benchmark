import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4719Component } from './my-comp-4719.component';

describe('MyComp4719Component', () => {
  let component: MyComp4719Component;
  let fixture: ComponentFixture<MyComp4719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
