import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8648Component } from './my-comp-8648.component';

describe('MyComp8648Component', () => {
  let component: MyComp8648Component;
  let fixture: ComponentFixture<MyComp8648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
