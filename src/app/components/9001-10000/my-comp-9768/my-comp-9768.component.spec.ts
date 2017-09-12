import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9768Component } from './my-comp-9768.component';

describe('MyComp9768Component', () => {
  let component: MyComp9768Component;
  let fixture: ComponentFixture<MyComp9768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
