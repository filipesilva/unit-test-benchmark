import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp769Component } from './my-comp-769.component';

describe('MyComp769Component', () => {
  let component: MyComp769Component;
  let fixture: ComponentFixture<MyComp769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
