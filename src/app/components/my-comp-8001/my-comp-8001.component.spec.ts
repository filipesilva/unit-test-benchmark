import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8001Component } from './my-comp-8001.component';

describe('MyComp8001Component', () => {
  let component: MyComp8001Component;
  let fixture: ComponentFixture<MyComp8001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
