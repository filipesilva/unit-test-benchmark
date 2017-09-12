import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8660Component } from './my-comp-8660.component';

describe('MyComp8660Component', () => {
  let component: MyComp8660Component;
  let fixture: ComponentFixture<MyComp8660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
