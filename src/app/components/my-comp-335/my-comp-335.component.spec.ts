import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp335Component } from './my-comp-335.component';

describe('MyComp335Component', () => {
  let component: MyComp335Component;
  let fixture: ComponentFixture<MyComp335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
