import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp344Component } from './my-comp-344.component';

describe('MyComp344Component', () => {
  let component: MyComp344Component;
  let fixture: ComponentFixture<MyComp344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
