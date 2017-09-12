import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4162Component } from './my-comp-4162.component';

describe('MyComp4162Component', () => {
  let component: MyComp4162Component;
  let fixture: ComponentFixture<MyComp4162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
