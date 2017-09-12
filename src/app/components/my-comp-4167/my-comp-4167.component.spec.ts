import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4167Component } from './my-comp-4167.component';

describe('MyComp4167Component', () => {
  let component: MyComp4167Component;
  let fixture: ComponentFixture<MyComp4167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
