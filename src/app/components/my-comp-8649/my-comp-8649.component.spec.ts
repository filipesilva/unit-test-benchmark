import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8649Component } from './my-comp-8649.component';

describe('MyComp8649Component', () => {
  let component: MyComp8649Component;
  let fixture: ComponentFixture<MyComp8649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
